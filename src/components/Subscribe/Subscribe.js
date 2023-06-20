import React from "react";
import "./Subscribe.css";
import biom_icon1 from "../../assets/images/biodegradable icon@2x.png";
import biom_icon2 from "../../assets/images/plastic free icon@2x.png";
import biom_icon3 from "../../assets/images/plant based icon@2x.png";
import photo1 from "../../assets/images/AdobeStock_377418446_Preview@2x.png";
import photo2 from "../../assets/images/Refill Packaging_Mockup_2.png";

const MeetBiom = () => {
  return (
    <div className="container-fluid my-5">
      <div className="row text-start black-green">
        <div className="col-11 mx-auto">
          <div className="row">
            <div className="col-5">
              <div className="position-relative d-none d-xl-block">
                <img src={photo1} className="img-fluid image1-wrapper" />
                <img src={photo2} className="image2-wrapper" />
              </div>
            </div>
            <div className="d-flex justify-content-end col-xl-7 col-12 align-items-center mx-0 col-xl-0 my-5 mt-lg-5 subscribe-class">
              <div className="col-11 xl-xl-5 mx-1 xl-px-5 px-1">
                <h5 className="black-green pb-1 pt-2 mt-5">BIOM WIPES</h5>
                <h3 className="black-green  pb-1 text-font-class display-5">
                  Better for you, and the planet.
                </h3>
                <h4 className=" pb-5">
                  The experience of clean should feel amazing. In a time when
                  we’re constantly sanitizing, it can be damaging to our hands
                  and skins. We decided to load our wipes with Aloe to take care
                  of you, while you take care of your home.
                </h4>
                <div className="mx-3">
                  <div className="d-flex align-items-center icons_text_padding-class">
                    <img src={biom_icon1} className="icons_padding" />
                    <h4 className="mx-4">100% biodegradable</h4>
                  </div>

                  <div className="d-flex align-items-center icons_text_padding-class">
                    <img src={biom_icon2} className="icons_padding" />
                    <h4 className=" mx-4">Plastic-free</h4>
                  </div>

                  <div className="d-flex align-items-center icons_text_padding-class">
                    <img src={biom_icon3} className="icons_padding" />
                    <h4 className="mx-4">100% plant-based</h4>
                  </div>
                  <div className="icons_text_padding-class">
                    <button
                      href="#"
                      className="btn btn-lg text-white font-weight-class green-for-button px-5 py-3 button-text"
                    >
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetBiom;
