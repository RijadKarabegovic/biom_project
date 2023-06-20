import React from "react";
import "./ThreeBioms.css";
import arrow_icon from "../../assets/images/Icon ionic-ios-arrow-round-forward.svg";
import biom_photo_1 from "../../assets/images/Green_12x.png";
import biom_photo_2 from "../../assets/images/Biom fn .202x.png";
import biom_photo_3 from "../../assets/images/Black_22x.png";

const ThreeBioms = () => {
  return (
    <div className="container-fluid">
      <div className="row overflow-hidden">
        <div className="col-12 col-xl-3 text-card-positioning align-items-center justify-content-center">
          <h3 className="text-left-class text-font-class py-0 pb-4">
            Read to start <br /> wiping out waste?
          </h3>
          <div className="card card-class">
            <div className="row">
              <div className="col-9 card-text-class">
                <p className="card-text card-text-color">
                  CHOOSE YOUR VESSEL COLOR
                </p>
              </div>
              <div className="col-3">
                <div className="card-body border">
                  <img
                    src={arrow_icon}
                    className="text-black"
                    alt="Arrow Icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-9 bioms-positioning">
          <div className="row">
            <div className="col-12 col-lg-4 position-transition-for-biom-text px-5">
              <h2 className="biom-description-class text-font-class">
                <strong>Biom Dispenser</strong>
              </h2>
              <h2 className="biom-description-class-smaller">
                <strong>OCEAN TEAL</strong>
              </h2>

              <img
                src={biom_photo_1}
                style={{ height: "40vh", width: "40vh" }}
                className="biom-image-class"
                alt="Biom Photo 1"
              />
            </div>
            <div className="col-12 col-lg-4 position-transition-for-biom-text">
              <h2 className="biom-description-class text-font-class">
                <strong>Biom Dispenser</strong>
              </h2>
              <h2 className="biom-description-class-smaller">
                <strong>WHITE</strong>
              </h2>

              <img
                src={biom_photo_2}
                style={{ height: "40vh", width: "40vh" }}
                className="biom-image-class"
                alt="Biom Photo 2"
              />
            </div>
            <div className="col-12 col-lg-4 position-transition-for-biom-text">
              <h2 className="biom-description-class text-font-class">
                <strong>Biom Dispenser</strong>
              </h2>
              <h2 className="biom-description-class-smaller">
                <strong>INK BLACK</strong>
              </h2>

              <img
                src={biom_photo_3}
                style={{ height: "40vh", width: "40vh" }}
                className="biom-image-class"
                alt="Biom Photo 3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeBioms;
