import React from "react";
import bgImg from "../../images/h.png";
// import bgImg1 from "../../images/bgImg.png";
import "./dest.css";
import Slider from "react-slick";
import { useRef } from "react";

export default () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 5,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className=" row-start-6 col-start-2 col-end-11">
      <div className="  text-white !overflow-hidden  ">
        <h2 className="  font-bold  text-[22px] md:text-[32px] leading-[37pxx]  mb-10 text-black lg:text-white">
          Top Vacation Destinations
        </h2>
        <div className="mr-6 w-[100%] sm:w-[118%] md:w-[108%]">
          <Slider {...settings}>
            <div className="  ">
           
              <img src={bgImg} className='pr-6 ' alt="" />
                <p className="mb-2 mt-[-40px] z-10 ml-2 font-medium  md:text-[24px]">
                  Bali, Indonesia
                </p>
            </div>
            <div className="   ">
           
              <img src={bgImg} className='pr-6  ' alt="" />
                <p className="mb-2 mt-[-40px] z-10 ml-2 font-medium  md:text-[24px]">
                  Bali, Indonesia
                </p>
            </div>
            <div className="   ">
            
              <img src={bgImg} className='pr-6 ' alt="" />
                <p className="mb-2 mt-[-40px] z-10 ml-2 font-medium  md:text-[24px]">
                  Bali, Indonesia
                </p>
         
            </div>
            <div className="  ">
            
              <img src={bgImg} className='pr-6 ' alt="" />
                <p className="mb-2 mt-[-40px] z-10 ml-2 font-medium  md:text-[24px]">
                  Bali, Indonesia
                </p>
         
            </div>
            <div className="   ">
            
              <img src={bgImg} className='pr-6 ' alt="" />
                <p className="mb-2 mt-[-40px] z-10 ml-2 font-medium  md:text-[24px]">
                  Bali, Indonesia
                </p>
         
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
