import React, {Component} from 'react';
import '../css/styles.css';

class Index extends Component {
    render() {
        return (
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
                        {/* Items row 1 */}
                        <h3>Book 1</h3>
                        <div id="item-row-1" class="row">
                            {/* @foreach ($books as $books)
                                <p>{{ $books->id }}</p>
                            @endforeach */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Index;
