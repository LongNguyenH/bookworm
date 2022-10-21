<?php

namespace App\Providers;

use App\Interfaces\AuthorRepositoryInterface;
use App\Interfaces\BookRepositoryInterface;
use App\Interfaces\ProductRepositoryInterface;
use App\Interfaces\ReviewRepositoryInterface;
use App\Repositories\AuthorRepository;
use App\Repositories\BookRepository;
use App\Repositories\ProductRepository;
use App\Repositories\ReviewRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
        $this->app->bind(
            BookRepositoryInterface::class,
            BookRepository::class
            
        );
        $this->app->bind(
            AuthorRepositoryInterface::class,
            AuthorRepository::class
        );
        $this->app->bind(
                CategoryRepositoryInterface::class,
                CategoryRepository::class
        );
        $this->app->bind(
            ReviewRepositoryInterface::class,
            ReviewRepository::class
        );
        $this->app->bind(
            ProductRepositoryInterface::class,
            ProductRepository::class
        );
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
