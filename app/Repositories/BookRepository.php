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
        $sortby = $request->input('sortby');
        $mode = $request->input('mode');

        $today = Carbon::today()->toDateString();

        $books=$this->book
        ->selectraw('book.*,
            discount_start_date,
            discount_end_date,
            coalesce(discount_price, 0) as discount_price ,
            case
                when 
                    (discount_start_date <= now() 
                        and discount_price !=0
                        and (discount_end_date >= now() 
                        or discount_end_date!=null))
                    then discount_price 
                else 
                    book_price 
                end 
                as 
                    final_price,
                    count(review.book_id) AS count_review
            ')
            ->leftJoin('discount','discount.book_id','=','book.id')
            ->leftJoin('review','book.id','=','review.book_id')
            ->groupBy('book.id','discount_start_date','discount_end_date','discount_price')
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
    
    /* Get book by condition */
    public function filter(Request $request){

        $category_id=$request->input('category_id');
        $author_id=$request->input('author_id');
        $sort_by=$request->input('sort_by');
        
        if (is_null($category_id) or is_null($author_id))
            $books=$this->book->where('category_id','=',$category_id)
            ->orWhere('author_id','=',$author_id);
        else
        $books=$this->book->where('category_id',$category_id)
        ->Where('author_id',$author_id);
        if(is_null($sort_by)==false)
            $books=$books->orderBy($sort_by,'asc')->get();
        else 
            $books=$books->get();
        return $books;
        
    }

    /* get book on sale */
    public function getOnSale()
    {
        $books = $this->book->select('book.*','discount_start_date','discount_end_date',
        'discount_price',
        DB::raw('book_price - discount_price AS sub_price'),
        DB::raw('ROUND(AVG(review.rating_start),1) AS avg_rating') )
        ->leftjoin('discount','discount.book_id','=','book.id')
        ->leftJoin('review','book.id','=','review.book_id')
        ->groupBy('book.id','discount_start_date','discount_end_date','discount_price')
        ->where('discount_start_date','<=','now()')
        ->where('discount_end_date','>','now()')
        ->orderByRaw('sub_price DESC ')
        ->LIMIT(env('DISCOUNT_ITEM_GET_LIMIT'))->get();
        return $books ;
    }
    public function getRecommended()
    {
        $books = $this->book->select('book.*',DB::raw('AVG(review.rating_start) AS avg_rating'))
        ->join('review','book.id','=','book_id')
        ->groupBy('book.id')
        ->orderBy('avg_rating')
        ->orderBy('book_price')
        ->limit(env('POPULAR_ITEM_GET_LIMIT'))->get();
        return $books;
    }
    public function getPopular()
    {
        $books = $this->book->select('book.*',DB::raw('count(review.book_id) AS count_review'))
        ->leftJoin('review','book.id','=','book_id')
        ->groupBy('book.id')
        ->orderBy('count_review','desc')
        ->orderBy('book_price')
        ->limit(env('POPULAR_ITEM_GET_LIMIT'))->get();
        return $books;
    }
    /* get book rating */
    public function getRating()
    {
        $books = $this->book->select('book.book_title',DB::raw('AVG(review.rating_start) AS avg_rating'))
        ->leftJoin('review','book.id','=','book_id')->groupBy('book.id')->get();
        
        return $books;
    }

}