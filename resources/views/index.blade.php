<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Book store home </title>
    {{-- <link href="{{URL::asset('css/styles.css')}}" rel="stylesheet"> --}}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" >
 
  </head>
  <body class="antialiased">
    <div {{-- class="container-fluid row justify-content-center align-items-center g-2"  --}}id ="root">
        
        
        
        <!-- Banner -->
        <!-- <section class="banner-wrapper">
            <div id="carouselId" class="banner-top carousel slide" data-bs-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active" aria-current="true" aria-label="First slide"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <img src="img/banner1.jpg" class="w-100 d-block " alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img src="img/banner1.jpg" class="w-100 d-block img-thumbnail" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img src="img/banner1.jpg" class="w-100 d-block img-thumbnail" alt="Third slide">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section> -->

        <!-- Body -->
        
        <!--Footer-->
        <!-- <section id="footer" class="container mt-3 p-1">
            <div class="row justify-content-center g-2">
                <div class="col 4">
                    <h3>
                        Lien he
                    </h3>
                </div>
                <div class="col 2">
                    <h3>
                        Danh muc
                    </h3>
                </div>
                <div class="col 2">
                    <h3>
                        San pham
                    </h3>
                </div>
            </div>
        </section> -->
    </div>
    <script src="{{mix('/js/app.js')}}"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    
  </body>
</html>
