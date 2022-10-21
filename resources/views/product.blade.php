<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Book store home </title>
    <link rel="stylesheet" href="css/main.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" >
  </head>
  <body>
    <div class="container-fluid row justify-content-center align-items-center g-2">
        <!-- Header -->
        <nav class="navbar fixedtop">
            <div class="container-fluid">
                <div class="col-2 text-uppercase font-weight-bold h-100 text-center">
                    <a class="navbar-brand">
                        <img src="./img/rstore-icon.png" style="height: 30px" alt="" />
                      </a>
                </div>
                <div class="menu-item col-2 text-uppercase font-weight-bold h-100 text-center dropdown">
                    <a class="dropdown-toggles text-black" data-bs-toggle="dropdown">
                        <span class="menu-item-text align-middle">menu 1</span>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">1</a></li>
                        <li><a class="dropdown-item" href="#">2</a></li>
                    </ul>
                </div>
                <div class="menu-item col-2 text-uppercase font-weight-bold h-100 text-center"><span class="menu-item-text align-middle">menu 2</span></div>
                <div class="menu-item col-2 text-uppercase font-weight-bold h-100 text-center"><span class="menu-item-text align-middle">menu 3</span></div>
                <div class="col-4">
                    <form class="d-flex" role="search">
                        <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        />
                        <button
                        class="btn btn-outline-success d-flex align-items-center" id="cart-btn"
                        type="submit">
                            Search
                        </button>

                </div>
            </div>
        </nav>
        
        <!-- Body -->
        <div class="container mt-3">
                <div class=" row justify-content-center  g-2">
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
                            
                        </div>
                    </div>
                </div>
        </div>

    </div>
    <!-- 
    <script src="./js/index.js"></script> -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
  
  </body>
</html>
