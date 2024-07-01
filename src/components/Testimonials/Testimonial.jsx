import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/zikko (2).jpg";
import profilePic2 from "../../img/neyo (2).jpg";
// import profilePic3 from "../../img/profile3.jpg";
// import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      contact:'0903-402-9095',
      img: profilePic1,
      review:
        "I am thoroughly impressed with the work CHIJOKE did for us. His attention to detail and expertise not only met but exceeded our expectations. The project was completed promptly and flawlessly",
    },
    {
      contact:'0704-810-8375',
      img: profilePic2,
      review:
        "Working with CHIJIOKE was a game-changer to my project. his innovative approach and dedication resulted in a solution that surpassed my expectations.",
    },
    // {
    //   img: profilePic3,
    //   review:
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    // },
    // {
    //   img: profilePic4,
    //   review:
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    // },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>

              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
                <h2>To hear my  review better</h2><h3 style={{marginTop:'-5px'}}>Contact me:</h3>
                <p style={{marginTop:'-5px'}}>{client.contact}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
