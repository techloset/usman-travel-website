import React from 'react'
import img1 from '../../images/subsection/img1.png'
import img2 from '../../images/subsection/img1.png'
import img3 from '../../images/subsection/img2.png'
import img4 from '../../images/subsection/1.png'
import img5 from '../../images/subsection/2.png'
import img6 from '../../images/subsection/3.png'
import img7 from '../../images/subsection/4.png'
import vector from '../../images/subsection/Vector.png'
import heart from '../../images/Vector.svg'

import Slider from "react-slick";

const beachDestination = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "200px",
        slidesToShow: 4,
        swipeToSlide: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                
              }
            },
          
          ]
       
      };
  return (

<div className="  mt-10  ">
<h2 className="  font-bold  text-[18px] sm:text-[25px] lg:text-[32px] leading-[37px] mb-10 text-black lg:text-white">Popular Beach Destinations</h2>
<div className='w-[100%] sm:w-[115%] sm:mr-5 overflow-x-hidden bg-transparent'>

<Slider {...settings}>

<div className='  mb-5 '>
<div className="relative flex gap-5 bg-white justify-center items-center flex-col mr-6 ml-2  p-4 h-auto rounded-2xl" style={{boxShadow:'0px 4px 16px rgba(158, 158, 158, 0.25)'}}>
<img src={heart} alt="" className='absolute right-[7%] top-[5%]' />
<img src={img1} className='rounded-xl w-[100%] h-[200px]' alt="" />
<div className='flex justify-between w-full'>
<p className='text-[24px] leading-[30px]
'>Val di Funes</p>
<div className='flex justify-center items-center gap-3'>
<img src={vector} alt="" />
<p className='text-[24px] leading-[30px]'>4.7</p>
</div>
</div>
<div className='flex justify-between w-full text-black text-opacity-50'>
<div className='flex flex-col items-center justify-center'>
<img src={img4} alt="" />
<p className='text-[12px]'>2 Flights</p>
</div>
<div className='flex flex-col items-center justify-center'>
<img src={img5} alt="" />
<p className='text-[12px]'>2 Flights</p>
</div>
<div className='flex flex-col items-center justify-center'>
<img src={img6} alt="" />
<p className='text-[12px]'>2 Flights</p>
</div>
<div className='flex flex-col items-center justify-center'>
<img src={img7} alt="" />
<p className='text-[12px]'>2 Flights</p>
</div>
</div>
<ul className='text-black text-[15px] self-start text-opacity-50 list-disc flex flex-col pl-4 '>
<li className=''>
Tour combo with return airport transfer
</li>
<li>
City Tour
</li>
<li>
Curious Corner
</li>

</ul>
<div className='self-start relative'>
<del className='absolute mt-1'>₹88,952</del>
<span className='text-[24px] ml-20 mr-[2px] font-bold'>₹88,952</span>
<sub className='text-[12px]  text-black text-opacity-50'>Per person</sub>
</div>
</div>
</div> 

<div className='   '>

<div className="flex gap-5 bg-white relative justify-center items-center flex-col mr-6 ml-2  p-4 h-auto rounded-2xl" style={{boxShadow:'0px 4px 16px rgba(158, 158, 158, 0.25)'}}>
<img src={img2} className='rounded-xl w-[100%] h-[200px]' alt="" />
<img src={heart} alt="" className='absolute right-[7%] top-[5%]' />

<div className='flex justify-between w-full'>
<p className='text-[24px] leading-[30px]
'>Val di Funes</p>
<div className='flex justify-center items-center gap-3'>
<img src={vector} alt="" />
<p className='text-[24px] leading-[30px]'>4.7</p>
</div>
</div>
<div className='flex justify-between w-full text-black text-opacity-50'>
<div className='flex flex-col items-center justify-center'>
<img src={img4} alt="" />
<p className='text-[12px]'>2 Flights</p>
</div>
<div className='flex flex-col items-center justify-center'>
<img src={img4} alt="" />
<p className='text-[12px]'>2 Flights</p>
</div>
<div className='flex flex-col items-center justify-center'>
<img src={img5} alt="" />
<p className='text-[12px]'>2 Flights</p>
</div>
<div className='flex flex-col items-center justify-center'>
<img src={img6} alt="" />
<p className='text-[12px]'>2 Flights</p>
</div>
</div>
<ul className='text-black text-[15px] self-start text-opacity-50 list-disc flex flex-col pl-4 '>
<li className=''>
Tour combo with return airport transfer
</li>
<li>
City Tour
</li>
<li>
Curious Corner
</li>

</ul>
<div className='self-start relative'>
<del className='absolute mt-1'>₹88,952</del>
<span className='text-[24px] ml-20 mr-[2px] font-bold'>₹88,952</span>
<sub className='text-[12px]  text-black text-opacity-50'>Per person</sub>
</div>
</div>
</div>
<div className='   '>

<div className="flex gap-5 bg-white  justify-center items-center flex-col mr-6 ml-2  p-4 h-auto rounded-2xl" style={{boxShadow:'0px 4px 16px rgba(158, 158, 158, 0.25)'}}>
<img src={img3} className='rounded-xl w-[100%] h-[200px]' alt="" />
<div className='flex justify-between w-full'>
<p className='text-[24px] leading-[30px]
'>Val di Funes</p>
<div className='flex justify-center items-center gap-3'>
<img src={vector} alt="" />
<p className='text-[24px] leading-[30px]'>4.7</p>
</div>
</div>
<div className='flex justify-between w-full text-black text-opacity-50'>
<div className='flex flex-col items-center justify-center'>
<img src={img4} alt="" />
<p className='text-[12px]'>2 Flights</p>
</div>
<div className='flex flex-col items-center justify-center'>
<img src={img4} alt="" />
<p className='text-[12px]'>2 Flights</p>
</div>
<div className='flex flex-col items-center justify-center'>
<img src={img4} alt="" />
<p className='text-[12px]'>2 Flights</p>
</div>
<div className='flex flex-col items-center justify-center'>
<img src={img4} alt="" />
<p className='text-[12px]'>2 Flights</p>
</div>
</div>
<ul className='text-black text-[15px] self-start text-opacity-50 list-disc flex flex-col pl-4 '>
<li className=''>
Tour combo with return airport transfer
</li>
<li>
City Tour
</li>
<li>
Curious Corner
</li>

</ul>
<div className='self-start relative'>
<del className='absolute mt-1'>₹88,952</del>
<span className='text-[24px] ml-20 mr-[2px] font-bold'>₹88,952</span>
<sub className='text-[12px]  text-black text-opacity-50'>Per person</sub>
</div>
</div>
</div>
<div className='   '>

<div className="flex gap-5 justify-center bg-white items-center flex-col mr-6 ml-2  p-4 h-auto rounded-2xl" style={{boxShadow:'0px 4px 16px rgba(158, 158, 158, 0.25)'}}>
<img src={img1} className='rounded-xl w-[100%] h-[200px]' alt="" />
<div className='flex justify-between w-full'>
<p className='text-[24px] leading-[30px]
'>Val di Funes</p>
<div className='flex justify-center items-center gap-3'>
<img src={vector} alt="" />
<p className='text-[24px] leading-[30px]'>4.7</p>
</div>
</div>
<div className='flex justify-between w-full text-black text-opacity-50'>
<div className='flex flex-col items-center justify-center'>
<img src={img4} alt="" />
<p className='text-[12px]'>2 Flights</p>
</div>
<div className='flex flex-col items-center justify-center'>
<img src={img4} alt="" />
<p className='text-[12px]'>2 Flights</p>
</div>
<div className='flex flex-col items-center justify-center'>
<img src={img4} alt="" />
<p className='text-[12px]'>2 Flights</p>
</div>
<div className='flex flex-col items-center justify-center'>
<img src={img4} alt="" />
<p className='text-[12px]'>2 Flights</p>
</div>
</div>
<ul className='text-black  text-[15px] self-start text-opacity-50 list-disc flex flex-col pl-4 '>
<li className=''>
Tour combo with return airport transfer
</li>
<li>
City Tour
</li>
<li>
Curious Corner
</li>

</ul>
<div className='self-start relative'>
<del className='absolute mt-1'>₹88,952</del>
<span className='text-[24px] ml-20 mr-[2px] font-bold'>₹88,952</span>
<sub className='text-[12px]  text-black text-opacity-50'>Per person</sub>
</div>
</div>
</div>
<div className='   '>

<div className="flex gap-5 justify-center bg-white items-center flex-col mr-6 ml-2  p-4 h-auto rounded-2xl" style={{boxShadow:'0px 4px 16px rgba(158, 158, 158, 0.25)'}}>
<img src={img1} className='rounded-xl w-[100%] h-[200px]' alt="" />
<div className='flex justify-between w-full'>
<p className='text-[24px] leading-[30px]
'>Val di Funes</p>
<div className='flex justify-center items-center gap-3'>
<img src={vector} alt="" />
<p className='text-[24px] leading-[30px]'>4.7</p>
</div>
</div>
<div className='flex justify-between w-full text-black text-opacity-50'>
<div className='flex flex-col items-center justify-center'>
<img src={img4} alt="" />
<p className='text-[12px]'>2 Flights</p>
</div>
<div className='flex flex-col items-center justify-center'>
<img src={img4} alt="" />
<p className='text-[12px]'>2 Flights</p>
</div>
<div className='flex flex-col items-center justify-center'>
<img src={img4} alt="" />
<p className='text-[12px]'>2 Flights</p>
</div>
<div className='flex flex-col items-center justify-center'>
<img src={img4} alt="" />
<p className='text-[12px]'>2 Flights</p>
</div>
</div>
<ul className='text-black  self-start text-[15px] text-opacity-50 list-disc flex flex-col pl-4 '>
<li className=''>
Tour combo with return airport transfer
</li>
<li>
City Tour
</li>
<li>
Curious Corner
</li>

</ul>
<div className='self-start relative'>
<del className='absolute mt-1'>₹88,952</del>
<span className='text-[24px] ml-20 mr-[2px] font-bold'>₹88,952</span>
<sub className='text-[12px]  text-black text-opacity-50'>Per person</sub>
</div>
</div>
</div>
<div className='   '>

<div className="flex gap-5 justify-center bg-white items-center flex-col mr-6 ml-2  p-4 h-auto rounded-2xl" style={{boxShadow:'0px 4px 16px rgba(158, 158, 158, 0.25)'}}>
<img src={img1} className='rounded-xl w-[100%] h-[200px]' alt="" />
<div className='flex justify-between w-full'>
<p className='text-[24px] leading-[30px]
'>Val di Funes</p>
<div className='flex justify-center items-center gap-3'>
<img src={vector} alt="" />
<p className='text-[24px] leading-[30px]'>4.7</p>
</div>
</div>
<div className='flex justify-between w-full text-black text-opacity-50'>
<div className='flex flex-col items-center justify-center'>
<img src={img4} alt="" />
<p className='text-[12px]'>2 Flights</p>
</div>
<div className='flex flex-col items-center justify-center'>
<img src={img4} alt="" />
<p className='text-[12px]'>2 Flights</p>
</div>
<div className='flex flex-col items-center justify-center'>
<img src={img4} alt="" />
<p className='text-[12px]'>2 Flights</p>
</div>
<div className='flex flex-col items-center justify-center'>
<img src={img4} alt="" />
<p className='text-[12px]'>2 Flights</p>
</div>
</div>
<ul className='text-black text-[15px] self-start text-opacity-50 list-disc flex flex-col pl-4 '>
<li className=''>
Tour combo with return airport transfer
</li>
<li>
City Tour
</li>
<li>
Curious Corner
</li>

</ul>
<div className='self-start relative'>
<del className='absolute mt-1'>₹88,952</del>
<span className='text-[24px] ml-20 mr-[2px] font-bold'>₹88,952</span>
<sub className='text-[12px]  text-black text-opacity-50'>Per person</sub>
</div>
</div>
</div>

</Slider>


</div>
</div>
  )
}

export default beachDestination
