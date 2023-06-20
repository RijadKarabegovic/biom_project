import React from "react";
import biom_photo_4 from "../../assets/images/Biom_wipe_2.png";
import "./Subscription.css";
import arrow_icon from "../../assets/images/white-arrow.png";

const Subscription = () => {
  return (
    <div className="container-fluid margin-for-subscription">
      <div className="mx-5 background-color-beige sizing">
        <div className="subscription-image mx-4 px-4">
          <div className="row">
            <div className="col-12 col-xl-6 text-start">
              <h3 className="pb-1 pt-2 mt-2 mt-lg-5 text-font-class fw-bold">
                Get the latest news delivered to your inbox.
              </h3>
              <h4 className="pb-4">
                Get access to the exciting stuff — exclusive new deals, product
                launches and more. Plus, get a 10% discount on your next order.
              </h4>

              <div className="card card-class my-4">
                <div className="row">
                  <div className="col-9 card-text-class ">
                    <p className="card-text card-text-color">
                      Enter your email address
                    </p>
                  </div>
                  <div className="col-2 p-1 mx-3">
                    <div className="card-body border green-for-button m-1 border-radius-class justify-content-center">
                      <div className="text-white">
                        <img
                          src={arrow_icon}
                          className="text-white"
                          alt="Arrow Icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6 col-xl-7">
              <form>
                <div className="new-email-bx">
                  <input type="email" placeholder="Email Address" />
                  <button type="submit" className="green-for-button">
                    Submit
                  </button>
                </div>
              </form>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
