
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
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            
          }
        },
        {
          breakpoint: 900,
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
        <div className=' grid   grid-cols-10 mt-14 ' > 
      <div className=" col-start-2 col-end-11 !overflow-hidden  ">
        <h2 className="   font-bold text-[32px] leading-[37px] ">Offers</h2>
<div className="w-[100%] sm:w-[105%] !mr-20 ">

        <Slider {...settings}>
            <div className='my-5  '>

       <div className="flex flex-col xl:flex-row w-fit gap-5 xl:items-center   ml-3 mr-5 py-6 px-4 rounded-2xl " style={{boxShadow:'0px 4px 16px rgba(158, 158, 158, 0.25)'}}>

        <img src={img1} className='rounded-xl   ' alt="" />
        <div className="flex flex-col ">
            <p className="text-black text-opacity-50">Domestic Flights</p>
            <p className="text-[24px] leading-[30px] font-medium ">Huge savings on flight with trxvl.</p>
            <p className=" text-black text-opacity-50">Book domestic flights starting @ just ₹1459</p>
            <button className="w-[140px] mt-5 h-[52px] bg-[#2659C3] rounded-full text-white ">
                Book Now
            </button>
        </div>
       </div>
          </div>
            <div className=' my-5 '>

       <div className="flex gap-5 ml-3 mr-5 flex-col xl:flex-row w-fit  xl:items-center  py-6 px-4  rounded-2xl" style={{boxShadow:'0px 4px 16px rgba(158, 158, 158, 0.25)'}}>
        <img src={img2} className='rounded-xl h-full  ' alt="" />
        <div className="flex flex-col ">
            <p className="text-black text-opacity-50">Domestic Flights</p>
            <p className="text-[24px] leading-[30px] font-medium ">Huge savings on flight with trxvl.</p>
            <p className=" text-black text-opacity-50">Book domestic flights starting @ just ₹1459</p>
            <button className="w-[140px] mt-5 h-[52px] bg-[#2659C3] rounded-full text-white ">
                Book Now
            </button>
        </div>
       </div>
          </div>
            <div className='my-5  '>

       <div className="flex gap-5 flex-col xl:flex-row w-fit  xl:items-center   ml-3 mr-5 py-6 px-4  rounded-2xl" style={{boxShadow:'0px 4px 16px rgba(158, 158, 158, 0.25)'}}>
        <img src={img2} className='rounded-xl h-full   ' alt="" />
        <div className="flex flex-col ml-[3%] sm:ml-[4%] xl:ml-0">
            <p className="text-black text-opacity-50">Domestic Flights</p>
            <p className="text-[24px] leading-[30px] font-medium ">Huge savings on flight with trxvl.</p>
            <p className=" text-black text-opacity-50">Book domestic flights starting @ just ₹1459</p>
            <button className="w-[140px] mt-5 h-[52px] bg-[#2659C3] rounded-full text-white ">
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


