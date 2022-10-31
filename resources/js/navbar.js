import React, {Component} from 'react';
import '../css/styles.css';

class Navbar extends Component {
    render() {
        return (
            /* Header */
        <nav id="header" class="navbar fixedtop">
            <div class="container-fluid">
                <div class="col-2 text-uppercase font-weight-bold h-100 text-center">
                    <a class="navbar-brand">
                        <img src="{{url('./assets/bookworm_icon.svg')}}" style="" alt="" />
                      </a>
                </div>
                <div class="menu-item col-2 text-uppercase font-weight-bold h-100 text-center"><span class="menu-item-text align-middle">Home</span></div>
                <div class="menu-item col-2 text-uppercase font-weight-bold h-100 text-center"><span class="menu-item-text align-middle">Shop</span></div>
                <div class="menu-item col-2 text-uppercase font-weight-bold h-100 text-center"><span class="menu-item-text align-middle">About</span></div>
                <div class="menu-item col-2 text-uppercase font-weight-bold h-100 text-center"><span class="menu-item-text align-middle">Cart</span></div>
                <div class="menu-item col-2 text-uppercase font-weight-bold h-100 text-center"><span class="menu-item-text align-middle">Sign in</span></div>
            </div>
        </nav>
        );
    }
}

export default Navbar;
