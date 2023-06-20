import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Swiper.css";
import { Pagination } from "swiper";
import swiper_photo1 from "../../assets/images/Living Room_1.png";
import swiper_photo2 from "../../assets/images/office.png";
import swiper_photo3 from "../../assets/images/Kitchen Shot_3.png";
import swiper_photo4 from "../../assets/images/bathroom_white on counter.png";

const SwiperComponent = () => {
  return (
    <div className="position-relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={swiper_photo1} className="" />
          <h4 className="swiper-text-class text-white text-font-class">
            living room
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper_photo2} className="" />
          <h4 className="swiper-text-class text-white text-font-class">
            office
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper_photo3} className="" />
          <h4 className="swiper-text-class text-white text-font-class">
            kitchen
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper_photo4} className="" />
          <h4 className="swiper-text-class text-white text-font-class">
            bathroom
          </h4>
        </SwiperSlide>
      </Swiper>
      <div className="text-class text-white centered ">
        <h5>WHERE YOU NEED IT,</h5>
        <h1 className="text-font-class">
          when you <br />
          need it.
        </h1>
      </div>
    </div>
  );
};

export default SwiperComponent;
