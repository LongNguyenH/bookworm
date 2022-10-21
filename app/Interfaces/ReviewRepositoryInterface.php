<?php
namespace App\Interfaces;

use Illuminate\Http\Request;

interface ReviewRepositoryInterface
{
    public function getReviewsByBookId(Request $request);

}