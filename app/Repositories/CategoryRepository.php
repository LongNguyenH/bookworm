<?php
namespace App\Repositories;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Interfaces\CategoryRepositoryInterface;
use Illuminate\Support\Facades\DB;
class CategoryRepository implements CategoryRepositoryInterface
{
    private Category $Category;
    public function __construct(Category $Category) 
    {
        $this->Category = $Category;
    }

    /* get all Category */
    public function getAllCategory(){
        return $this->Category->oderBy('category_name')->get();
    }
}