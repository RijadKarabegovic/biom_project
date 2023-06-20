import React from "react";
import "./MainDashboard.css";
import { Button } from "bootstrap";
import HeroPhoto from "../../assets/images/Kitchen_3@2x.png";

const MainDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="background d-flex align-items-center mx-0 mx-md-4 text-left">
        <div className="row">
          <div
            className="col-lg-5 col-10  mx-5 white-text text-left"
            style={{ textAlign: "left" }}
          >
            <h2 className="heading1 text-font-class">
              So fresh.
              <br /> So green.
            </h2>
            <p className="p-hero-sizing my-4">
              We believe that a more eco-friendly everyday makes a happier you
              and me. We’re on a mission to put sustainability in reach with
              better-for-the-planet wipes that are easy, effective, and
              plastic-free.
            </p>
            <button className="btn btn-lg btn-light green-text px-5 py-3 fw-bolder button-text">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
