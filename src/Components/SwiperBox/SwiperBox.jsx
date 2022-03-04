import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./Swiper.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function SwiperBox() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="swiper-box">
      <div className="container">
        <h3 className="swiper-name">Pre-Owned 2014 Chevrolet Spark EV 2LT | 82 mile range</h3>
        <div className="swiper-page">
        <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/KL8CL6S06EC435219/e1ca1c101770f9485b7b75a958bc6bd8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/KL8CL6S06EC435219/e1ca1c101770f9485b7b75a958bc6bd8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/KL8CL6S06EC435219/7318a4f69b9e2314b9a3c217f4623ee6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/KL8CL6S06EC435219/ce599d046e9f058337a5dd38ae5cfbae.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/KL8CL6S06EC435219/c4e07f248d01f7fd6b3e0b46841a24f1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/KL8CL6S06EC435219/a3b54b3873c0c79b6e64f451dce4c9dc.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/KL8CL6S06EC435219/c3cf0492e62a2128839a60f5e2a089ff.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/KL8CL6S06EC435219/021e777a10bf994e95b4a0ab373c006c.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/KL8CL6S06EC435219/5ab01e0686c43a2259716017ecf4d835.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/KL8CL6S06EC435219/9d35fa738eaed6f62963f9ff99914d11.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/KL8CL6S06EC435219/e1ca1c101770f9485b7b75a958bc6bd8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/KL8CL6S06EC435219/e1ca1c101770f9485b7b75a958bc6bd8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/KL8CL6S06EC435219/7318a4f69b9e2314b9a3c217f4623ee6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/KL8CL6S06EC435219/ce599d046e9f058337a5dd38ae5cfbae.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/KL8CL6S06EC435219/c4e07f248d01f7fd6b3e0b46841a24f1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/KL8CL6S06EC435219/a3b54b3873c0c79b6e64f451dce4c9dc.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/KL8CL6S06EC435219/c3cf0492e62a2128839a60f5e2a089ff.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/KL8CL6S06EC435219/021e777a10bf994e95b4a0ab373c006c.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/KL8CL6S06EC435219/5ab01e0686c43a2259716017ecf4d835.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002667/KL8CL6S06EC435219/9d35fa738eaed6f62963f9ff99914d11.jpg" />
        </SwiperSlide>
      </Swiper>
      </div>
      </div>
    </div>
  );
}
