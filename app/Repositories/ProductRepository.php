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
            ->selectraw('book.*,
                discount_start_date,
                discount_end_date,
                author.author_name as author_name,
                category.category_name as category_name,
                coalesce(discount_price, 0) as discount_price ,
                case
                    when 
                    (discount_start_date <= now() 
                    and discount_price !=0
                    and (discount_end_date >= now() 
                    or discount_end_date IS NULL))
                        then discount_price 
                    else 
                        book_price 
                    end 
                    as 
                        final_price,
                        count(review.book_id) AS count_review
                
            ')
            ->leftJoin('author','author.id','=','book.author_id')
            ->leftJoin('category','category.id','=','book.category_id')
            ->leftJoin('discount','discount.book_id','=','book.id')
            ->leftJoin('review','book.id','=','review.book_id')
            ->where('book.id',$id)
            ->groupBy('book.id','discount_start_date','discount_end_date','discount_price','author_name','category_name')
            ->get() ;   
        return $products;
    }
}