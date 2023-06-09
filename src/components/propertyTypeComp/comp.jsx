
import Slider from "react-slick";
import { useRef } from "react";
import img1 from '../../images/browseByProperty/h.png'
import img2 from '../../images/browseByProperty/v.png'
import img4 from '../../images/browseByProperty/w.png'
import camera from '../../images/browseByProperty/camera.png'

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
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            
          }
        },
        {
          breakpoint: 724,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            
          }
        },
      
      ]
    };
    return (
        <div className='grid mt-10  grid-cols-10 ' > 
      <div className=" col-start-2 col-end-11 !overflow-hidden  ">
      <h2 className="  font-bold text-[20px] sm:text-[32px] leading-[37px] mb-10">Browse by property type</h2>
      <div className=' text-white sm:w-[110%]'>

        <Slider {...settings}>
            <div >

        <div className='bg-center mr-5 bg-cover   h-[200px] rounded-xl flex justify-start items-end bg-no-repeat' 
      style={{ backgroundImage: `url(${img1})` }}
      >
      <p className='mb-6 ml-6 font-medium text-[20px] md:text-[24px]'>

      Hotels
  </p>
    </div>
          </div>
          <div>

<div className='bg-center mr-5    h-[200px] bg-cover  rounded-xl flex justify-start items-end bg-no-repeat' 
style={{ backgroundImage: `url(${img2})` }}
>
<p className='mb-6 ml-6 font-medium text-[20px] md:text-[24px]'>

Apartments
  </p>
</div>
  </div>
  <div className='  '>

<div className='bg-center  mr-5   h-[200px]  bg-cover  rounded-xl  flex justify-start items-end bg-no-repeat' 
style={{ backgroundImage: `url(${img2})` }}
>
 <p className='mb-6 ml-6 font-medium text-[20px] md:text-[24px]'>

 Resorts
  </p>
</div>
  </div>  <div className='  '>

<div className='bg-center mr-5    h-[200px] bg-cover  rounded-xl flex justify-start items-end bg-no-repeat' 
style={{ backgroundImage: `url(${img4})` }}
>
 <p className='mb-6 ml-6 font-medium text-[20px] md:text-[24px]'>

 Villas
  </p>
</div>
  </div>
    <div className='  '>

<div className='bg-center mr-5    h-[200px] bg-cover   rounded-xl flex justify-start items-end bg-no-repeat' 
style={{ backgroundImage: `url(${img4})` }}
>
 <p className='mb-6 ml-6 font-medium text-[20px] md:text-[24px]'>

 Villas
  </p>
</div>
</div>
        </Slider>

    </div>
    <div  className="mt-20 rounded-2xl bg-center bg-cover pl-5 pr-5 sm:pl-10 lg:pl-[80px] text-[#FFFFFF] bg-no-repeat h-[395px] w-[90.5%] " style={{backgroundImage:`url(${camera})`}}>
        <p className="text-[30px] md:text-[40px] lg:text-[56px]  pt-[80px] self-end   font-bold ">
        Plan your trip with travel  expert

        </p>
        <p className="text-[22px] lg:text-[32px]  self-start mt-10 leading-[40px]">
        Our professional advisors can craft your perfect itinerary
        </p>
    </div>
      </div>
      </div>

    );
}


