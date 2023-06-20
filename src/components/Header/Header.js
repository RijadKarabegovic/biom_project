import React from "react";
import logo from "../../assets/images/logo.png";
import "./Header.css";
import cart from "../../assets/images/cart.svg";

const Header = () => {
  return (
    <nav className="fixed-top navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid mx-4">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-2">
            <li className="nav-item mx-0 mx-lg-2">
              <a className="nav-link navbar-font" href="#">
                SHOP
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-2">
              <a className="nav-link navbar-font" href="#">
                WHY BIOM
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-2">
              <a className="nav-link navbar-font" href="#">
                SCENT
              </a>
            </li>
          </ul>
        </div>

        <button
          className="navbar-toggler translate-end"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <img src={logo} className="position-absolute logo" />

        <div
          className="position-absolute end-0 collapse navbar-collapse"
          id="navbarTogglerDemo03"
        >
          <ul className="navbar-nav mr-auto mt-2 mt-lg-2">
            <li className="nav-item mx-0 mx-lg-2 ">
              <a className="nav-link navbar-font" href="#">
                SIGN IN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-0 mx-lg-2 navbar-font" href="#">
                CART <img src={cart} className="cart-icon " />
                <span class="top-0 start-100 translate-middle badge rounded-circle bg-warning w-30 h-30">
                  0
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
