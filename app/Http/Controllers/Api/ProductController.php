<?php

namespace App\Http\Controllers\Api;
use DB;
use App\Http\Controllers\Controller;
use App\Interfaces\ProductRepositoryInterface;
use App\Models\Product;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Null_;

class ProductController extends Controller
{
    public function __construct(ProductRepositoryInterface $productRepository) 
    {
        $this->productRepository = $productRepository;
    }
    public function show(/* Product $Product */Request $request)
    {
            //
        $product = $this->productRepository->getProductById($request->route('id'));
        return response()->json(['data' => $product], 200);
    }
    

}