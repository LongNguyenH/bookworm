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
        return response()->json(['data' => $books], 200);
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
        /* $book = $this->bookRepository->getBookById($request->route('id'));
        return response()->json(['data' => $book], 200); */
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
    public function getOnSale()
    {
        $book= $this->bookRepository->getOnSale();
        return response()->json(['data' => $book], 200);
    }
    public function getRecommended() 
    {
        $book= $this->bookRepository->getRecommended();
        return response()->json(['data' => $book], 200);
    }
    public function getPopular()
    {
        $book= $this->bookRepository->getPopular();
        return response()->json(['data' => $book], 200);
    }
    public function getRating()
    {
        $book= $this->bookRepository->getRating();
        return response()->json(['data' => $book], 200);
    }
        
}
