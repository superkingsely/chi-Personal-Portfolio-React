import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/api.jpg";
import Ecommerce from "../../img/hackathon.jpg";
// import HOC from "../../img/hoc.png";
import MusicApp from "../../img/closeup-shot-black-car-parking-lot-with-blurred-background.jpg";
import { themeContext } from "../../Context";
// import Slider from "../project-slider/Slider";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span className="text-9xl">Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide className="proj-d">
          <a href="https://github.com/superkingsely/stocks-web-api/tree/master">
          <img src={Sidebar} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="proj-d">
          <a href="https://housing-spa.firebaseapp.com/">

          <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide className="proj-d">
          <a href="https://first-drivelink.vercel.app">

          <img src={MusicApp} alt="" />
          </a>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide> */}
        <div className="proj-m">
          <a href="https://github.com/superkingsely/stocks-web-api/tree/master">

          <img src={Sidebar} alt="" />
          </a>
        </div>
        <div className="proj-m">
          <a href="https://housing-spa.firebaseapp.com/">

          <img src={Ecommerce} alt="" />
          </a>
        </div>
        <div className="proj-m">
          <a href="https://first-drivelink.vercel.app">

          <img src={MusicApp} alt="" />
          </a>
        </div>
      </Swiper>

      
    </div>
  );
};

export default Portfolio;
