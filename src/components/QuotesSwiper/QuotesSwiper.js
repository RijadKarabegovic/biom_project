import "./QuotesSwiper.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const QuotesSwiper = () => {
  return (
    <div className="background-color-beige">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper2"
      >
        <SwiperSlide className="">
          <div className="container">
            <div className="row">
              <div className="col-11 col-md-9 col-lg-8 col-xl-10 my-5 mx-auto">
                <p className="pb-3 pt-2 mt-1">WHAT PEOPLE ARE SAYING</p>
                <h3 className="text-font-class mb-5 line-height-class">
                  “Cleaning and sanitizing are now more important than ever and
                  these wipes make it so easy. They’re great because they don’t
                  dry my skin out and I love knowing that buying their products
                  are better for the environment.”
                </h3>
                <p className="my-5">-RACHEL H.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-transparent">
          <div className="container">
            <div className="row">
              <div className="col-11 col-md-9 col-lg-8 col-xl-10 my-5 mx-auto">
                <p className="pb-3 pt-2 mt-1">WHAT PEOPLE ARE SAYING</p>
                <h3 className="text-font-class mb-5 line-height-class">
                  “Cleaning and sanitizing are now more important than ever and
                  these wipes make it so easy. They’re great because they don’t
                  dry my skin out and I love knowing that buying their products
                  are better for the environment.”
                </h3>
                <p className="my-5">-RACHEL H.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-transparent">
          <div className="container">
            <div className="row">
              <div className="col-11 col-md-9 col-lg-8 col-xl-10 my-5 mx-auto">
                <p className="pb-3 pt-2 mt-1">WHAT PEOPLE ARE SAYING</p>
                <h3 className="text-font-class mb-5 line-height-class">
                  “Cleaning and sanitizing are now more important than ever and
                  these wipes make it so easy. They’re great because they don’t
                  dry my skin out and I love knowing that buying their products
                  are better for the environment.”
                </h3>
                <p className="my-5">-RACHEL H.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-transparent">
          <div className="container">
            <div className="row">
              <div className="col-11 col-md-9 col-lg-8 col-xl-10 my-5 mx-auto">
                <p className="pb-3 pt-2 mt-1">WHAT PEOPLE ARE SAYING</p>
                <h3 className="text-font-class mb-5 line-height-class">
                  “Cleaning and sanitizing are now more important than ever and
                  these wipes make it so easy. They’re great because they don’t
                  dry my skin out and I love knowing that buying their products
                  are better for the environment.”
                </h3>
                <p className="my-5">-RACHEL H.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default QuotesSwiper;
