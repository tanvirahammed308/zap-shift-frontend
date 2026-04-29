import React from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from 'swiper/modules';
import brand1 from '../../../assets/brands/amazon_vector.png'
import brand2 from '../../../assets/brands/amazon.png'
import brand3 from '../../../assets/brands/casio.png'
import brand4 from '../../../assets/brands/moonstar.png'
import brand5 from '../../../assets/brands/randstad.png'
import brand6 from '../../../assets/brands/star.png'
import brand7 from '../../../assets/brands/start_people.png'


const Brands = () => {
    const logos=[brand1,brand2,brand3,brand4,brand5,brand6,brand7]
  return (
    <Swiper
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={40}
          grabCursor={true}
      loop={true}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination,Autoplay]}
      className="mySwiper my-5"
      >
          {
              logos.map((logo, index) => (<SwiperSlide key={index}>{
              <img src={logo} alt="" />
              
              }</SwiperSlide>))
          }
      
      
    </Swiper>
  );
};

export default Brands;
