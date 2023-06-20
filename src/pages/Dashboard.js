import React from "react";
import Header from "../components/Header/Header";
import MainDashboard from "../components/MainDashboard/MainDashboard";
import MeetBiom from "../components/MeetBiom/MeetBiom";
import SwiperComponent from "../components/Swiper/SwiperComponent";
import ThreeBioms from "../components/ThreeBioms/ThreeBioms";
import QuotesSwiper from "../components/QuotesSwiper/QuotesSwiper";
import Subscribe from "../components/Subscribe/Subscribe";
import LearnMore from "../components/LearnMore/LearnMore";
import Instagram from "../components/Instagram/Instagram";
import Subscription from "../components/Subscription/Subscription";
import Footer from "../components/Footer/Footer";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <MainDashboard />
      <MeetBiom />
      <SwiperComponent />
      <ThreeBioms />
      <QuotesSwiper />
      <Subscribe />
      <LearnMore />
      <Instagram />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Dashboard;
