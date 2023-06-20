import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Instagram.css";
import { Pagination } from "swiper";
import ig_icon from "../../assets/images/Icon awesome-instagram.svg";
import instagram_photo1 from "../../assets/images/AdobeStock_372350085_Preview@2x.png";
import instagram_photo2 from "../../assets/images/Biom_wipe_6.png";
import instagram_photo3 from "../../assets/images/kitchen_counter_low res.png";
import instagram_photo4 from "../../assets/images/Green-Gold-and-Navy-Living_Kitty-and-B-by-Kat-G.png";
import instagram_photo5 from "../../assets/images/Biom fn .23-1.png";
import instagram_photo6 from "../../assets/images/AdobeStock_334130078_Preview.png";

const Instagram = () => {
  return (
    <div className="my-4">
      <div className="my-5">
        <h3 className="text-green pb-1 text-font-class">#cleanwithbiom</h3>
      </div>
      <div className="mySwiper3-wrapper">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            546: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
            },
          }}
          className="mySwiper3"
        >
          <SwiperSlide>
            <img src={instagram_photo1} className="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={instagram_photo2} className="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={instagram_photo3} className="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={instagram_photo4} className="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={instagram_photo5} className="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={instagram_photo6} className="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container-fluid my-5">
        <div className="d-flex justify-content-center">
          <div className="card card-class-ig">
            <div className="row">
              <div className="col-9 card-text-class">
                <p className="card-text card-text-color">
                  FOLLOW US ON INSTAGRAM
                </p>
              </div>
              <div className="col-3">
                <div className="card-body border text-green-class">
                  <img
                    src={ig_icon}
                    className="text-green-class"
                    alt="Arrow Icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
