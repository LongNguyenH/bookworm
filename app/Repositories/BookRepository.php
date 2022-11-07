<?php

namespace App\Repositories;

use Carbon\Carbon;

use Illuminate\Http\Request;
use App\Models\Book;
use App\Interfaces\BookRepositoryInterface;
use Illuminate\Support\Facades\DB;
class BookRepository implements BookRepositoryInterface
{
    private Book $book;
    public function __construct(Book $book) 
    {
        $this->book = $book;
    }

    /* get all book */
    public function getAllBooks(Request $request){
        /* sort variable */
        $sortby = $request->input('sortby');
        $mode = $request->input('mode');

        /* filter variable */
        $category_id=$request->input('category_id');
        $author_id=$request->input('author_id');
        $rating=$request->input('rating');

        $books=$this->book
        ->selectraw('book.*,
            discount_start_date,
            discount_end_date,
            author.author_name as author_name,
            coalesce(discount_price, 0) as discount_price ,
            round(avg(coalesce(review.rating_start,0)),2) as avg_rating,
            case
                when 
                    (discount_start_date <= now() 
                        and discount_price !=0
                        and (discount_end_date >= now() 
                        or discount_end_date  IS null))
                    then discount_price 
                else 
                    book_price 
                end 
                as 
                    final_price,
            count(review.book_id) as count_review
            
            ')
            ->leftJoin('author','author.id','=','book.author_id')
            ->leftJoin('discount','discount.book_id','=','book.id')
            ->leftJoin('review','book.id','=','review.book_id')
            ->groupBy('book.id','discount_start_date','discount_end_date','discount_price','author_name')
        /* sort condition */
        ->when($sortby=='onsale' && $mode=='desc',
        function($query){
            $query->orderBy('discount_price','desc');
        })
        ->when($sortby=='onsale' && $mode=='asc',
        function($query){
            $query->orderBy('final_price','asc');
        })
        ->when($sortby=='popularity' && $mode=='desc',
        function($query){
            $query->orderBy('count_review','desc');
        })
        ->when($sortby=='popularity' && $mode=='asc',
        function($query){
            $query->orderBy('final_price','asc');
        })
        ->when($sortby=='price' && $mode=='desc',
        function($query){
            $query->orderBy('final_price','desc');
        })
        ->when($sortby=='price' && $mode=='asc',
        function($query){
            $query->orderBy('final_price','asc');
        })
        /* filter condition */
        ->when($category_id!=null ,
        function($query) use($category_id){
            $query->where('category_id',$category_id);
        })
        ->when($author_id!=null ,
        function($query) use($author_id){
            $query->where('author_id',$author_id);
        })
        ->when($rating!=null ,
        function($query) use($rating){
            $query->havingRaw('round(avg(coalesce(review.rating_start,0)),2) >='.$rating);
        })
        ->get();  
                
        return $books;
    }

    /* get book by id */
    public function getBookById($id) {
        $today = Carbon::now()->format('Y-m-d');
        $discountdate=$this->book->select(
            'discount_start_date','discount_end_date')
            ->leftJoin('discount','discount.book_id','=','book.id')
            ->where('book.id',$id)->first();
        $discount_start_date = $discountdate->discount_start_date;
        $discount_end_date = $discountdate->discount_end_date;
        $books=$this->book->select('book.*',
            'discount_start_date','discount_end_date','discount_price')
            ->leftJoin('discount','discount.book_id','=','book.id')
            ->where('book.id',$id)
            ->when($discount_start_date < $today & ($discount_end_date >$today or $discount_end_date==null ),
            function ($query) {
                $query->addSelect(DB::raw('discount_price as final_price'));
            },
            function ($query) {
                $query->addSelect(DB::raw('book_price as final_price'));
            })->get();
            
            
        return $books;
    }
    
    

    /* get book on sale */
    public function getOnSale()
    {
        $books = $this->book->select(
            'book.*',
            'discount_start_date','discount_end_date',
            'discount_price',
            DB::raw('author.author_name as author_name'),
            DB::raw('book_price - discount_price AS sub_price'),
            DB::raw('ROUND(AVG(review.rating_start),1) AS avg_rating')
        )
        ->leftJoin('author','author.id','=','book.author_id')
        ->leftjoin('discount','discount.book_id','=','book.id')
        ->leftJoin('review','book.id','=','review.book_id')
        ->groupBy('book.id','discount_start_date','discount_end_date','discount_price','author_name')
        ->where('discount_start_date','<=','now()')
        ->where(function ($query) {
            $query->where('discount_end_date','>','now()')
                ->orWhereNull('discount_end_date');
        })
        ->orderByRaw('sub_price DESC ')
        ->LIMIT(env('DISCOUNT_ITEM_GET_LIMIT'))->get();
        return $books ;
    }
    public function getRecommended()
    {
        $books = $this->book
        ->selectraw('book.*,
            discount_start_date,
            discount_end_date,
            author.author_name as author_name,
            coalesce(discount_price, 0) as discount_price ,
            round(avg(coalesce(review.rating_start,0)),2) as avg_rating,
            case
                when 
                    (discount_start_date <= now() 
                        and discount_price !=0
                        and (discount_end_date >= now() 
                        or discount_end_date  IS null))
                    then discount_price 
                else 
                    book_price 
                end 
                as 
                    final_price,
            count(review.book_id) as count_review
            
            ')
        ->leftJoin('author','author.id','=','book.author_id')
        ->leftjoin('discount','discount.book_id','=','book.id')
        ->join('review','book.id','=','review.book_id')
        ->groupBy('book.id','discount_start_date','discount_end_date','discount_price','author_name')
        ->orderBy('avg_rating')
        ->orderBy('book_price')
        ->limit(env('POPULAR_ITEM_GET_LIMIT'))->get();
        return $books;
    }
    public function getPopular()
    {
        $books = $this->book
        ->selectraw('book.*,
        discount_start_date,
        discount_end_date,
        author.author_name as author_name,
        coalesce(discount_price, 0) as discount_price ,
        round(avg(coalesce(review.rating_start,0)),2) as avg_rating,
        case
            when 
                (discount_start_date <= now() 
                    and discount_price !=0
                    and (discount_end_date >= now() 
                    or discount_end_date  IS null))
                then discount_price 
            else 
                book_price 
            end 
            as 
                final_price,
        count(review.book_id) as count_review
        
        ')
    ->leftJoin('author','author.id','=','book.author_id')
    ->leftjoin('discount','discount.book_id','=','book.id')
    ->join('review','book.id','=','review.book_id')
    ->groupBy('book.id','discount_start_date','discount_end_date','discount_price','author_name')
        ->orderBy('count_review','desc')
        ->orderBy('book_price')
        ->limit(env('POPULAR_ITEM_GET_LIMIT'))->get();
        return $books;
    }
    /* get book rating */
    public function getRating()
    {
        $books = $this->book->select('book.book_title',DB::raw('AVG(review.rating_start) AS avg_rating'))->where('avg_rating','>=',2)
        ->leftJoin('review','book.id','=','book_id')->groupBy('book.id')->get();
        
        return $books;
    }

}