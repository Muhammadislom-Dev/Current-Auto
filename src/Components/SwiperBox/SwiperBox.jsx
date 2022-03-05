import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Description from '../../assets/img/description.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./Swiper.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import Accordion from "../Accordion/Accordion";

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

      <Accordion className={"faq"} faqs={faqArray}/> 
      </div>
    </div>
  );
}


const faqArray = [

{
    question: <div className="accordion_page"><p className="swiperbox-text"><img className="description" src={Description} /> Free Vehicle History Report</p></div>,
    answer: "Do you need quality service on 3D modeling? Our team of different home appliances and items can make you high quality and affordable. After all the payment of the order, you will download the order."
  },
  {
    question: <div className="accordion_page"><p className="swiperbox-text"><img className="description" src={Description} /> Description</p></div>,
    answer: <p className="swiperbox-texts">We make it easy to transition to your first or purchase your next electric vehicle with no-haggle pricing, competitive financing, nationwide shipping, and a transparent trade-in process. Find your EV, buy it online, and have it delivered</p>
  },
  {
    question: <div className="accordion_page"><p className="swiperbox-text"><img className="description" src={Description} /> Details</p></div>,
    answer: <p className="swiperbox-texts">Emergency communication system: OnStar Directions & Connections Heated Front Seat(s)
    Variable Speed Intermittent Wipers
    Steering Wheel Audio Controls
    Engine Immobilizer</p>
  },
  {
    question: <div className="accordion_page"><p className="swiperbox-text"><img className="description" src={Description} />  Interior</p></div>,
    answer: <p className="swiperbox-texts">Remote vehicle starter system, passenger compartment preconditioning <br /> Shopping bag hooks, located on base of driver and front passenger head restraints</p>
  },
  {
    question: <div className="accordion_page"><p className="swiperbox-text"><img className="description" src={Description} />  Exterior</p></div>,
    answer: <p className="swiperbox-texts"> Liftgate trim, chrome
    Rocker molding, body-color, lower
    Moldings, chrome belt-line
    Spoiler, rear with integrated LED center high-mounted stop/brake lamp (CHMSL)</p>
  },

  {
    question: <div className="accordion_page"><p className="swiperbox-text"><img className="description" src={Description} />  Safety</p></div>,
    answer: <p className="swiperbox-texts">Air bags, 10 total (Always use safety belts and child restraints. Children are safer when properly secured in a rear seat in the appropriate child restraint. See the Owner's Manual for more information.)</p>
  },
  {
    question: <div className="accordion_page"><p className="swiperbox-text"><img className="description" src={Description} />  Premium Options</p></div>,
    answer: <p className="swiperbox-texts">Air bags, thorax side-impact seat-mounted, side-front and rear outboard seating positions (Always use safety belts and child restraints. Children are safer when properly secured in a rear seat in the appropriate child restraint. See the Owner's Manual for more information.)</p>
  },

]
