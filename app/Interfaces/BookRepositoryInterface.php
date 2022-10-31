<?php
namespace App\Interfaces;

use Illuminate\Http\Request;

interface BookRepositoryInterface
{
    public function getAllBooks(Request $request);
    public function getBookById($id);
    public function getOnSale();
    public function getRecommended();
    public function getPopular();
    public function getRating();

    

}