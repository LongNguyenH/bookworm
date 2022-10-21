<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Book store home </title>
    {{-- <link href="{{URL::asset('css/styles.css')}}" rel="stylesheet"> --}}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" >
  </head>
  <body>
    <div class="container-fluid row justify-content-center align-items-center g-2">
        <!-- Header -->
        <nav id="header" class="navbar fixedtop">
            <div class="container-fluid">
                <div class="col-2 text-uppercase font-weight-bold h-100 text-center">
                    <a class="navbar-brand">
                        <img src="{{url('./assets/bookworm_icon.svg')}}" style="" alt="" />
                      </a>
                </div>
                <div class="menu-item col-2 text-uppercase font-weight-bold h-100 text-center dropdown">
                    <a class="dropdown-toggles text-black" data-bs-toggle="dropdown">
                        <span class="menu-item-text align-middle">Home</span>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">1</a></li>
                        <li><a class="dropdown-item" href="#">2</a></li>
                    </ul>
                </div>
                <div class="menu-item col-2 text-uppercase font-weight-bold h-100 text-center"><span class="menu-item-text align-middle">Shop</span></div>
                <div class="menu-item col-2 text-uppercase font-weight-bold h-100 text-center"><span class="menu-item-text align-middle">About</span></div>
                <div class="menu-item col-2 text-uppercase font-weight-bold h-100 text-center"><span class="menu-item-text align-middle">Cart</span></div>
                <div class="menu-item col-2 text-uppercase font-weight-bold h-100 text-center"><span class="menu-item-text align-middle">Sign in</span></div>
            </div>
        </nav>
        
        
        <!-- Banner -->
        <section class="banner-wrapper">
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
        </section>

        <!-- Body -->
        <section class="container mt-3">
                <div class=" row justify-content-center g-2">
                    <div class="col-4 col-md-2">
                        <h5>Filter By Price</h5>
                        <hr/>
                        <form>
                          <div class="mb-3">
                            <label for="txt-min-price" class="form-label">Min Price</label>
                            <input
                              type="number"
                              class="form-control"
                              id="txt-min-price"
                              placeholder="Example min price"
                            />
                          </div>
                          <div class="mb-3">
                            <label for="txt-max-price" class="form-label">Max Price</label>
                            <input
                              type="number"
                              class="form-control"
                              id="txt-max-price"
                              placeholder="Enter max price"
                            />
                          </div>
                          <button class="btn btn-primary submit-btn">Submit</button>
                        </form>
                        <h5>Category</h5>
                        <hr />
                        <table class="table table-hover table-bordered table-responsive">
                            <thead>
                                <tr class="table-dark">
                                    <th scope="col">Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="">
                                    <td scope="row">1</td>
                                </tr>
                                <tr class="">
                                    <td scope="row">2</td>
                                </tr>
                                <tr class="">
                                    <td scope="row">3</td>
                                </tr>
                                <tr class="">
                                    <td scope="row">4</td>
                                </tr>
                                <tr class="">
                                    <td scope="row">5</td>
                                </tr>
                            
                            </tbody>
                        </table>
                    </div>
                    <div class="col-8 col-md-10">
                        <!-- Items row 1 -->
                        <h3>Book 1</h3>
                        <div id="item-row-1" class="row">
                            @foreach ($books as $books)
                                <p>{{ $books->id }}</p>
                            @endforeach
                        </div>
                        <!-- Items row 2 -->
                        <h3>Book 2</h3>
                        <div id="item-row-2" class="row">
                            
                        </div>
                    </div>
                </div>
        </section>
        <!--Footer-->
        <section id="footer" class="container mt-3 p-1">
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
        </section>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  
  </body>
</html>
