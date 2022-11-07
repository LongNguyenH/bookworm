<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\AuthorController;
use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\Reviewcontroller;
use App\Http\Controllers\Api\UserController;
use App\Models\Review;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
/* Route::apiResource('/author',AuthorController::class); */
Route::apiResource('/user',UserController::class);



Route::post('register',[AuthController::class,'createUser']);
Route::post('login', [AuthController::class,'login']);
Route::apiResource('users', UserController::class)->middleware('auth:sanctum');

/* Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/users', [UserController::class,'index']);
}); */
Route::controller(BookController::class)->prefix('books')->group(function()
{
    Route::get('/','index');
    Route::get('/sale','getOnSale');
    Route::get('/rating','getRating');
    Route::get('/recommended','getRecommended');
    Route::get('/popular','getPopular');
    Route::get('/filter','filter');
    /* Route::get('/product/{id}','show'); */
});
Route::controller(AuthorController::class)->prefix('authors')->group(function()
{
    Route::get('/','index');
});
Route::controller(CategoryController::class)->prefix('category')->group(function()
{
    Route::get('/','index');
});
Route::controller(ReviewController::class)->prefix('review')->group(function()
{
    Route::get('/','reviewById');
});
Route::controller(ProductController::class)->prefix('product')->group(function()
{
    Route::get('/{id}','show');
});


