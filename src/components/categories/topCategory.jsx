

import img1 from '../../images/1.svg'
import img2 from '../../images/2.svg'
import img3 from '../../images/3.svg'
import img4 from '../../images/4.svg'
import img5 from '../../images/5.svg'
import img6 from '../../images/6.svg'
import img7 from '../../images/7.svg'
import img8 from '../../images/8.svg'
import img9 from '../../images/9.svg'
import img10 from '../../images/10.svg'
import img11 from '../../images/11.svg'
import img12 from '../../images/12.svg'
import img13 from '../../images/13.svg'
import img14 from '../../images/14.svg'
import img15 from '../../images/15.svg'
import img16 from '../../images/16.svg'
import Slider from "react-slick";
import { useRef,useState } from "react";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
export default ()=> {
  const [active,setActive]=useState(3)
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
      <div className="text-black  md:text-white mt-12 md:mt-5 lg:mt-12 w-[100%]  lg:mb-0 !overflow-hidden ">
        <h2 className="  font-bold text-[24px] md:text-[32px] leading-[37pxx] md:mb-10  ">Top categories</h2>
        <div className="!w-[110%] ml-1 lg:text-opacity-70 "    >

        <Slider {...settings}>
          
          <div  className=" !flex flex-col justify-center items-center !w-[50%]">
           <img src={img1} alt="" className='md:block hidden' />
           <img src={img12} alt="" className='md:!hidden   ' />
           <Link to='/About' onClick={()=>setActive(1)}>

           <p className={`text-[14px] ${active==1?'border-b-2 border-[#FFFFFF] pb-[2px]':''}`}>Beaches</p>
           </Link>
          </div>
          <div  className="!flex flex-col justify-center items-center !w-[50%] "> 
          <img src={img2} alt="" className='md:block hidden' />
          <img src={img13} alt="" className=' md:!hidden' />

          <Link to='/About' onClick={()=>setActive(2)}>

          <p className={`text-[14px] ${active==2?'border-b-2 border-[#FFFFFF] pb-[2px]':''}`}>Deserts</p>
           </Link >
          
          </div>
          <div  className="!flex flex-col justify-center items-center !w-[50%] ">
          <img src={img3} alt="" className='md:block hidden' />
          <img src={img14} alt="" className=' md:!hidden' />

          <Link to='/About' onClick={()=>setActive(3)}>

<p className={`text-[14px] ${active==3  && window.location.pathname=='/About'?'border-b-2 border-[#FFFFFF] pb-[2px]':''}`}>Mountains</p>
</Link>
          </div>
          <div  className=" !flex flex-col justify-center items-center !w-[50%]">
          <img src={img4} alt="" className='md:block hidden' />
          <img src={img15} alt="" className=' md:!hidden' />

          <Link to='/About' onClick={()=>setActive(4)}>
          <p  className={`whitespace-nowrap !mx-4 text-[14px] ${active==4?'border-b-2 border-[#FFFFFF] pb-[2px]':''}`}>Iconic Cities</p>
          </Link>

          </div>
          <div  className=" !flex flex-col justify-center items-center !w-[50%]">
          <img src={img5} alt="" className='md:block hidden' />
          <img src={img16} alt="" className=' md:!hidden' />
          <Link to='/About' onClick={()=>setActive(5)}>
 
 <p className={`text-[14px] ${active==5?'border-b-2 border-[#FFFFFF] pb-[2px]':''}`}>Houseboats</p>
</Link>

          </div>
          <div  className=" !flex flex-col justify-center items-center !w-[50%]">
           <img src={img6} alt="" className='md:block hidden' />
          <img src={img12} alt="" className=' md:!hidden' />

           <Link to='/About' onClick={()=>setActive(6)}>
           <p className={`text-[14px] ${active==6?'border-b-2 border-[#FFFFFF] pb-[2px]':''}`}>Beaches</p>
</Link>
          </div>
          <div  className=" !flex flex-col justify-center items-center !w-[50%]">
          <img src={img7} alt="" className='md:block hidden'/>
          <img src={img13} alt="" className=' md:!hidden' />

          <Link to='/About' onClick={()=>setActive(7)}>

<p className={`text-[14px] ${active==7?'border-b-2 border-[#FFFFFF] pb-[2px]':''}`}>Countryside</p>
</Link>
          </div>
          <div  className=" !flex flex-col justify-center items-center !w-[50%]">
          <img src={img8} alt="" className='md:block hidden'/>
          <img src={img14} alt="" className=' md:!hidden' />

          <Link to='/About' onClick={()=>setActive(8)}>

<p className={`text-[14px] ${active==8?'border-b-2 border-[#FFFFFF] pb-[2px]':''}`}>Camping</p>
</Link>
          </div>
          <div  className=" !flex flex-col justify-center items-center !w-[50%]">
          <img src={img9} alt=""  className='md:block hidden'/>
          <img src={img15} alt="" className=' md:!hidden' />

          <Link to='/About' onClick={()=>setActive(9)}>

<p className={`text-[14px] ${active==9?'border-b-2 border-[#FFFFFF] pb-[2px]':''}`}>Castles</p>
</Link>
          </div>
          <div  className=" !flex flex-col justify-center items-center !w-[50%]">
          <img src={img10} alt="" className='md:block hidden'/>
          <img src={img16} alt="" className=' md:!hidden' />

          <Link to='/About' onClick={()=>setActive(10)}>

<p className={`text-[14px] ${active==10?'border-b-2 border-[#FFFFFF] pb-[2px]':''}`}>Skiing</p>
</Link>
          </div>
          <div  className=" !flex flex-col justify-center items-center !w-[50%]">
          <img src={img11} alt="" className='md:block hidden' />
          <img src={img12} alt="" className=' md:!hidden' />

          <Link to='/About' onClick={()=>setActive(11)}>

<p className={`text-[14px] ${active==11?'border-b-2 border-[#FFFFFF] pb-[2px]':''}`}>Tropical</p>
</Link>
          </div>
        </Slider>
        </div>

      </div>
    );
}
