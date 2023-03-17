
import Slider from "react-slick";
import { useRef } from "react";
import img1 from '../../images/offers/1.png'
import img2 from '../../images/offers/2.png'
export default ()=> {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "200px",
      slidesToShow: 2,
      swipeToSlide: true,
      dots: false,

      responsive: [
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
        <div className=' grid   grid-cols-10 ' > 
      <div className=" col-start-2 col-end-11 !overflow-hidden  ">
        <h2 className="   font-bold text-[32px] leading-[37px] mb-5">Offers</h2>
<div className="w-[100%] sm:w-[105%] !mr-20">

        <Slider {...settings}>
            <div className=' '>

       <div className="flex flex-col md:flex-row gap-5 justify-center items-center mr-5 p-6 rounded-2xl " style={{boxShadow:'0px 4px 16px rgba(158, 158, 158, 0.25)'}}>
        <img src={img1} className='rounded-xl w-[100%] md:w-[50%]' alt="" />
        <div className="flex flex-col ">
            <p className="text-black text-opacity-50">Domestic Flights</p>
            <p className="text-[24px] font-medium ">Huge savings on flight with trxvl.</p>
            <p className=" text-black text-opacity-50">Book domestic flights starting @ just ₹1459</p>
            <button className="w-[140px] mt-8 h-[52px] bg-blue-600 rounded-full text-white ">
                Book Now
            </button>
        </div>
       </div>
          </div>
            <div className=' '>

       <div className="flex gap-5 mr-5 flex-col md:flex-row  justify-center items-center p-6  rounded-2xl" style={{boxShadow:'0px 4px 16px rgba(158, 158, 158, 0.25)'}}>
        <img src={img2} className='rounded-xl w-[100%] md:w-[50%]' alt="" />
        <div className="flex flex-col ">
            <p className="text-black text-opacity-50">Domestic Flights</p>
            <p className="text-[24px] font-medium ">Huge savings on flight with trxvl.</p>
            <p className=" text-black text-opacity-50">Book domestic flights starting @ just ₹1459</p>
            <button className="w-[140px] mt-8 h-[52px] bg-blue-600 rounded-full text-white ">
                Book Now
            </button>
        </div>
       </div>
          </div>
            <div className=' '>

       <div className="flex gap-5 flex-col md:flex-row  justify-center items-center mr-5 p-6  rounded-2xl" style={{boxShadow:'0px 4px 16px rgba(158, 158, 158, 0.25)'}}>
        <img src={img2} className='rounded-xl w-[100%] md:w-[50%]' alt="" />
        <div className="flex flex-col ">
            <p className="text-black text-opacity-50">Domestic Flights</p>
            <p className="text-[24px] font-medium ">Huge savings on flight with trxvl.</p>
            <p className=" text-black text-opacity-50">Book domestic flights starting @ just ₹1459</p>
            <button className="w-[140px] mt-8 h-[52px] bg-blue-600 rounded-full text-white ">
                Book Now
            </button>
        </div>
       </div>
          </div>
         

        </Slider>
        </div>

      </div>
      </div>

    );
}


