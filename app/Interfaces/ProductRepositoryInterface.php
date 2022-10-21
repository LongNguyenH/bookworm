<?php
namespace App\Interfaces;

use Illuminate\Http\Request;

interface ProductRepositoryInterface
{
    public function getProductById($id);
}