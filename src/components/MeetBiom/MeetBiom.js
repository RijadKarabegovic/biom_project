import React from "react";
import "./MeetBiom.css";
import biom_icon1 from "../../assets/images/beautiful design icon@2x.png";
import biom_icon2 from "../../assets/images/durable stainless icon@2x.png";
import biom_icon3 from "../../assets/images/non toxic icon@2x.png";

const MeetBiom = () => {
  return (
    <div>
      <div className="meetbiom-class container-fluid my-0 mb-5">
        <div className="row text-start black-text">
          <div className="col-lg-6 col-4">
            <div className="moving-text-div ">
              <h1 className="moving-text-class">meet biom</h1>
            </div>
          </div>
          <div className="col-lg-5 col-8 align-items-center mx-0 my-0 mt-lg-5 mt-3">
            <h5 className="black-text pb-1 pt-2 mt-2 mt-lg-5">
              THE BIOM DISPENSER
            </h5>
            <h3 className="black-text pb-1 text-font-class fw-bold">
              <strong> Redefine your experience of clean.</strong>
            </h3>
            <h4 className="pb-4">
              A quality engineered wipes dispenser that looks beautiful in your
              home, making better habits for your home and planet always within
              reach.
            </h4>
            <div className="d-flex align-items-center icons_text_padding">
              <img src={biom_icon1} className="icons_padding" />
              <h4 className="mx-4">Beautiful design, fit for your home</h4>
            </div>

            <div className="d-flex align-items-center icons_text_padding">
              <img src={biom_icon2} className="icons_padding" />
              <h4 className=" mx-4">Durable stainless steel exterior</h4>
            </div>

            <div className="d-flex align-items-center icons_text_padding">
              <img src={biom_icon3} className="icons_padding" />
              <h4 className="mx-4">Non-toxic, BPA free</h4>
            </div>

            <button
              href="#"
              className="btn btn-lg text-white font-weight-class green-for-button px-4 px-sm-5 py-2 py-sm-3 button-text"
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetBiom;
