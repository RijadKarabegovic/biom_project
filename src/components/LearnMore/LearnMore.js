import React from "react";
import "./LearnMore.css";
import ocean from "../../assets/videos/ocean.mp4";

const LearnMore = () => {
  return (
    <div className="container-fluid position-relative">
      <div className="video-wrapper mx-1 mx-lg-4">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video-class"
        >
          <source src={ocean} type="video/mp4"></source>
        </video>
      </div>

      <div className="centered position-absolute top-50 start-50 translate-middle">
        <text className="white-text learnmore-h5 pb-1 pt-2 mt-2 mt-lg-5">
          CLEANING OUR OCEANS WITH EVERY WIPE
        </text>
        <br />
        <text className="white-text learnmore-h3 pb-1 text-font-class fw-bold">
          <strong>Wipes have plastic in them. We don’t.</strong>
        </text>
        <br />
        <text className="white-text learnmore-h4 pb-2 pb-md-4">
          We reinvented wipes to cut out all the bad stuff —like single-use
          plastic that hurts the environment, and toxic chemicals that don’t
          belong in our oceans (or in our homes).
        </text>
        <br />
        <button
          href="#"
          className="btn btn-lg btn-light green-text font-weight-class my-1 px-4 my-md-4 px-sm-5 py-2 py-sm-3 button-text-learnmore"
        >
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default LearnMore;
