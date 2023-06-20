import React from "react";
import ig_icon from "../../assets/images/Icon ionic-logo-instagram.svg";
import fb_icon from "../../assets/images/Icon awesome-facebook-f.svg";
import "./Footer.css";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <>
      <footer class="footer green-for-button text-white opacity-72">
        <div class="container-fluid">
          <div className="container my-4">
            <div class="row">
              <div class="col-md-4 d-flex flex-wrap">
                <h5 class="col-8 col-lg-4">
                  <strong>SHOP</strong>
                </h5>
                <h5 class="col-8 col-lg-4">
                  <strong>WHY BIOM</strong>
                </h5>
                <h5 class="col-8 col-lg-4">
                  <strong>SCENTS</strong>
                </h5>
              </div>
              <div class="col-md-4 justify-content-center">
                <img src={logo} className="position-absolute logo" />
              </div>
              <div class="col-md-4 d-flex flex-wrap">
                <h5 class="col-8 col-lg-4   ">
                  <strong>FAQ</strong>
                </h5>
                <h5 class="col-8 col-lg-4   ">
                  <strong>ACCOUNT</strong>
                </h5>
                <h5 class="col-8 col-lg-4   ">
                  <strong>HELP</strong>
                </h5>
              </div>
            </div>
          </div>
          <div className="mx-5 my-3">
            <hr />
            <div class="text-center d-flex justify-content-between my-4">
              <div className="my-3">
                <h4>
                  © 2021 biom. All rights reserved • Privacy Policy • Terms of
                  Service
                </h4>
              </div>
              <div className="d-flex my-3">
                <div className="circle mx-3">
                  <img src={ig_icon} className="icons_paddings" />
                </div>
                <div className="circle">
                  <img src={fb_icon} className="icons_paddings" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
