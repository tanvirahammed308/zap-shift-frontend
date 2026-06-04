import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import ReviewsCard from "./ReviewsCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h1>
      <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={reviews?.length > 3}
      coverflowEffect={{
        rotate: 30,
        stretch: "50%",
        depth: 200,
        modifier: 1,
        scale:0.75,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper my-10"
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      
      {reviews?.map((review) => (
        <SwiperSlide key={review._id || review.id}>
          <ReviewsCard review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
    
  );
};

export default Reviews;