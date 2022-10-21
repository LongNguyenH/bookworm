<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use App\Models\Review;
use App\Interfaces\ReviewRepositoryInterface;
use Illuminate\Support\Facades\DB;
class ReviewRepository implements ReviewRepositoryInterface
{
    private Review $review;
    public function __construct(Review $review) 
    {
        $this->review = $review;
    }

    /* get all Review */
    public function getReviewsByBookId(Request $request){
        $id=$request->id;
        $orderby=$request->orderby;
        $order=$request->order;
        $star=$request->star;
        $reviews=$this->review
        ->select(

        )
        ->where('book_id','=',$id)->orderBy($orderby,$order)->get();
        return $reviews;    
    }
    /* public function getRatingStarByBookId($id){
        $reviews=$this->review
        ->selectraw('');

    } */
}