

import img1 from '../../images/123.png'
// import img2 from '../../images/2.png'
// import img3 from '../../images/3.png'
// import img4 from '../../images/4.png'
// import img5 from '../../images/5.png'
// import img6 from '../../images/6.png'
// import img7 from '../../images/7.png'
// import img8 from '../../images/8.png'
// import img9 from '../../images/9.png'
// import img10 from '../../images/10.png'
import Slider from "react-slick";
import { useRef } from "react";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
export default ()=> {
    const settings = {
      className: "center",
      infinite: true,
     
      slidesToShow: 10,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 3,
            infinite: true,
            dots: false,

          }
        },
      
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            
          }
        },
      ]
     
    };
    return (
      <div className="text-black  md:text-white  w-[100%]  !overflow-hidden lg:text-opacity-70 ">
        <h2 className="  font-bold text-[24px] md:text-[32px] leading-[37pxx] mb-10">Top categories</h2>
        <div className="!w-[110%] ml-1"    >

        <Slider {...settings}>
          
          <div  className=" !flex flex-col justify-center items-center !w-[50%]">
           <img src={img1} alt="" />
           <Link to='/About'>

           <p className="text-[14px]">Beaches</p>
           </Link>
          </div>
          <div  className="!flex flex-col justify-center items-center !w-[50%] "> 
          <img src={img1} alt="" />
          <Link to='/About'>

          <p className="text-[14px]">Deserts</p>
           </Link >
          
          </div>
          <div  className="!flex flex-col justify-center items-center !w-[50%] ">
          <img src={img1} alt="" />
          <Link to='/About'>

<p className="text-[14px]">Mountains</p>
</Link>
          </div>
          <div  className=" !flex flex-col justify-center items-center !w-[50%]">
          <img src={img1} alt="" /> 
          <Link to='/About'>
          <p  className="whitespace-nowrap !mx-4 text-[14px]">Iconic Cities</p>
          </Link>

          </div>
          <div  className=" !flex flex-col justify-center items-center !w-[50%]">
          <img src={img1} alt="" />
          <Link to='/About'>
 
 <p className="text-[14px]">Houseboats</p>
</Link>

          </div>
          <div  className=" !flex flex-col justify-center items-center !w-[50%]">
           <img src={img1} alt="" />
           <Link to='/About'>
           <p className="text-[14px]">Beaches</p>
</Link>
          </div>
          <div  className=" !flex flex-col justify-center items-center !w-[50%]">
          <img src={img1} alt="" />
          <Link to='/About'>

<p className="text-[14px]">Countryside</p>
</Link>
          </div>
          <div  className=" !flex flex-col justify-center items-center !w-[50%]">
          <img src={img1} alt="" />
          <Link to='/About'>

<p className="text-[14px]">Camping</p>
</Link>
          </div>
          <div  className=" !flex flex-col justify-center items-center !w-[50%]">
          <img src={img1} alt="" />
          <Link to='/About'>

<p className="text-[14px]">Castles</p>
</Link>
          </div>
          <div  className=" !flex flex-col justify-center items-center !w-[50%]">
          <img src={img1} alt="" />
          <Link to='/About'>

<p className="text-[14px]">Skiing</p>
</Link>
          </div>
          <div  className=" !flex flex-col justify-center items-center !w-[50%]">
          <img src={img1} alt="" />
          <Link to='/About'>

<p className="text-[14px]">Tropical</p>
</Link>
          </div>
        </Slider>
        </div>

      </div>
    );
}
