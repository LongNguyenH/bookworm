<?php 
namespace App\Repositories;
use Carbon\Carbon;

use Illuminate\Http\Request;
use App\Models\Book;
use App\Interfaces\ProductRepositoryInterface;
use Illuminate\Support\Facades\DB;
class ProductRepository implements ProductRepositoryInterface
{
    private Book $product;
    public function __construct(Book $product) 
    {
        $this->product = $product;
    }
    /* get Product by id */
    public function getProductById($id) 
    {
        
        $products=$this->product
        /* ->select(
        'discount_start_date')
        ->leftJoin('discount','discount.book_id','=','book.id')
        ->where('book.id',$id)->first()->discount_start_date;
        $end=$this->product->select(
            'discount_end_date')
            ->leftJoin('discount','discount.book_id','=','book.id')
            ->where('book.id',$id)->first()->discount_end_date;
        $products=$this->product->select('book.*',
            'discount_start_date',
            'discount_end_date',
            'discount_price')
            ->leftJoin('discount','discount.book_id','=','book.id')
            ->where('book.id',$id)
            ->when(is_null('discount_price')==false  &&
                $today>=$start && 
                ($today<$end||is_null('discount_end_date')==true)
                ($today->lte('discount_end_date') ||is_null('discount_end_date')==true) ,
                
            function ($query) {
                $query->addSelect(DB::raw('discount_price as final_price'));
            },
            function ($query) {
                $query->addSelect(DB::raw('book_price as final_price'));
            })->get(); */
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
            ->where('book.id',$id)
            ->groupBy('book.id','discount_start_date','discount_end_date','discount_price')
            ->get() ;   
        return $products;
    }
}