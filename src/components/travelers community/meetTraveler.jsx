
import Slider from "react-slick";
import img1 from '../../images/traveler/t.png'
import img2 from '../../images/traveler/q.png'


export default ()=> {
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
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              
            }
          },
          {
            breakpoint: 550,
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
      <div className="h-[630px]  overflow-x-hidden ">

        <div className='grid-rows-TwoRows grid   grid-cols-10 ' > 
      <div className=" col-start-2 col-end-11  row-start-2  ">
      <h2 className="  font-bold  text-[18px] sm:text-[25px] lg:text-[32px] leading-[37px] mb-10">Connect with other travelers in our community</h2>
      <div className='w-[100%] sm:w-[110%] mr-5'>

        <Slider {...settings}>
        <div className=' '>

<div className="flex gap-5 flex-col mr-6  sm:p-4 h-auto rounded-2xl" style={{boxShadow:'0px 4px 16px rgba(158, 158, 158, 0.25)'}}>
 <img src={img1} className='rounded-xl w-[100%] h-[200px]' alt="" />
 <div>
     <p className="text-[24px] ">India</p>
     <p className="text-black text-opacity-50 w-[90%] sm:w-auto">Travel community
</p>
     <p className=" text-black text-opacity-50">155,073 travelers</p>

 </div>
</div>
   </div>
        <div className=' '>

<div className="flex gap-5 flex-col mr-6  sm:p-4 h-auto rounded-2xl" style={{boxShadow:'0px 4px 16px rgba(158, 158, 158, 0.25)'}}>
 <img src={img2} className='rounded-xl  w-[100%] h-[200px] ' alt="" />
 <div>
     <p className="text-[24px] ">India</p>
     <p className="text-black text-opacity-50">Travel community
</p>
     <p className=" text-black text-opacity-50">155,073 travelers</p>

 </div>
</div>
   </div>
        <div className=' '>

<div className="flex gap-5 flex-col mr-6  sm:p-4 h-auto rounded-2xl" style={{boxShadow:'0px 4px 16px rgba(158, 158, 158, 0.25)'}}>
 <img src={img1} className='rounded-xl  w-[100%] h-[200px]' alt="" />
 <div>
     <p className="text-[24px] ">India</p>
     <p className="text-black text-opacity-50">Travel community
</p>
     <p className=" text-black text-opacity-50">155,073 travelers</p>

 </div>
</div>
   </div>
        <div className=' '>

<div className="flex gap-5 flex-col mr-6  sm:p-4 h-auto rounded-2xl" style={{boxShadow:'0px 4px 16px rgba(158, 158, 158, 0.25)'}}>
 <img src={img2} className='rounded-xl  w-[100%] h-[200px]' alt="" />
 <div>
     <p className="text-[24px] text-black">India</p>
     <p className="text-black text-opacity-50">Travel community
</p>
     <p className=" text-black text-opacity-50">155,073 travelers</p>

 </div>
</div>
   </div>
        <div className=' '>

<div className="flex gap-5 flex-col mr-6  sm:p-4 h-auto rounded-2xl" style={{boxShadow:'0px 4px 16px rgba(158, 158, 158, 0.25)'}}>
 <img src={img2} className='rounded-xl  w-[100%] h-[200px]' alt="" />
 <div>
     <p className="text-[24px] ">India</p>
     <p className="text-black text-opacity-50">Travel community
</p>
     <p className=" text-black text-opacity-50">155,073 travelers</p>

 </div>
</div>
   </div>
        </Slider>

    </div>
  
      </div>
      </div>
      </div>

    );
}


