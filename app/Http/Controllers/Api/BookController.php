<?php

namespace App\Http\Controllers\Api;
use DB;
use App\Http\Controllers\Controller;
use App\Interfaces\BookRepositoryInterface;
use App\Models\Book;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Null_;

class BookController extends Controller
{
    public function __construct(BookRepositoryInterface $bookRepository) 
    {
        $this->bookRepository = $bookRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     
    public function index(Request $request)
    {
        //
        $books= $this->bookRepository->getAllBooks($request);
        return $books;
       /*  return view('index',compact('books')); */
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function show(/* Book $book */Request $request)
    {
        //
        return $book = $this->bookRepository->getBookById($request->route('id'));

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function edit(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Book $book)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function destroy(Book $book)
    {
        //
    }
    public function filter(Request $request)
    {
        return $book = $this->bookRepository->filter($request);
        
    }
    public function getOnSale()
    {
        return $book = $this->bookRepository->getOnSale();
    }
    public function getRecommended() 
    {
        return $book = $this->bookRepository->getRecommended();
    }
    public function getPopular()
    {
        return $book = $this->bookRepository->getPopular();
    }
    public function getRating()
    {
        return $book = $this->bookRepository->getRating();
    }
        
}
