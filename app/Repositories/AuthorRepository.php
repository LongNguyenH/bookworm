<?php

namespace App\Repositories;

use App\Http\Controllers\Controller;
use App\Models\Author;
use App\Interfaces\AuthorRepositoryInterface;
use Illuminate\Http\Request;

class AuthorRepository implements AuthorRepositoryInterface
{
    private Author $author;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct(Author $author) 
    {
        $this->author = $author;
    }
    public function getAllAuthor()
    {
        return $this->author->orderBy('author_name')->get();
    }
}
