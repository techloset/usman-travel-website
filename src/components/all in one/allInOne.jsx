import React from 'react'
import img1 from '../../images/all in one/1.png'
import img2 from '../../images/all in one/2.png'
import img3 from '../../images/all in one/3.png'
import img4 from '../../images/all in one/4.png'
const AllInOne = () => {
  return (
    <div className=' sm:h-[543px] grid grid-cols-10 bg-cover bg-no-repeat bg-center  sm:pb-0 pb-[75px] ' style={{backgroundImage:`url(${img1})`,gridTemplateRows:'75px'}} >
      <img src={img4} className='hidden lg:block sm:row-start-2 col-start-1 m-auto xl:m-0 xl:col-start-2 col-end-5' alt="" />
      <div className=' row-start-2 col-start-1 lg:col-start-4  col-end-11 '>

      <div className='text-white ml-[20px] sm:ml-[40px] xl:ml-[80px] '>
        <p className='text-[30px] sm:text-[48px] md:leading-[55px] mb-[24px]'>Your all-in-one travel app.</p>
        <p className='w-[95%] xl:w-[80%] 2xl:w-[70%]   sm:text-[24px] leading-[27px] mb-[40px]'> Book flights, hotels, trains & rental cars anywhere in the world in just seconds. Get real-time flight updates, travel info, exclusive deals, and 30% more Trip Coins only on the app!</p>
        <div className='flex gap-4 '>
<div className=''>

<div className='flex flex-col gap-6'>
<div className='flex gap-12'>

        <button className='bg-white bg-opacity-40  rounded-2xl w-[91px] h-[39px]'>Mobile</button>
        <button>Email</button>
</div>
<p className='mr-3'>Enter your phone number to receive a text with a link to download the app.</p>
        </div>
    <div className='flex w-[95%] xl:w-[90%] h-[58px] mt-4      gap-4 rounded-2xl col-start-4 col-end-8 justify-center items-center text-white  bg-opacity-40 bg-white bg- backdrop-filter backdrop-blur-md'>

    <p className=' sm:ml-3' >+91</p>
    <input type="text" 
      className="bg-transparent placeholder:text-white  w-[40%]   focus:outline-none  sm:w-auto  rounded-lg"
      placeholder='Mobile number' name="" id="" />
      <button className="w-[30%] mr-1 sm:w-[188px] h-[42px] rounded-full text-blue-600 col-start-9 sm:col-start-11 col-end-12 sm:m-0 bg-white ">
            Search
          </button>
    </div>
      </div>
      <div className='self-center hidden md:block '>
        or
      </div>
<div className='md:flex justify-center items-center flex-col hidden ' >
    <img src={img2} className='mb-[27px] w-[70%] xl:w-auto' alt="" />
    <img src={img3} alt="" className=' w-[70%] xl:w-auto' />
</div>

      </div>
      </div>
    </div>
      </div>
  )
}

export default AllInOne
