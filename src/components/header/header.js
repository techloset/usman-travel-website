import React from "react";
import logo from "../../images/trxvl.png";
import check from "../../images/Group.png";
import man from "../../images/men.png";
import Vector from "../../images/Vector.png";
import icon from "../../images/icon.png";
import Categories from "../categories/topCategory";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
const header = ({ children, element, bgImg}) => {
  console.log(children);
  return (
    <>
      <div className="h-[1050px] md:h-[1200px] lg:h-[950px] "  >
        <div
        // (180deg,  rgba(255, 255, 255, 0) ,  #FFFFFF 50%, transparent 50%)
          style={{ backgroundImage: ` linear-gradient(to top,#FFFFFF,rgba(255, 255, 255, 0), transparent 25%),url(${bgImg}) `,}}
          className=" h-[500px] md:h-[900px] lg:h-[841px] w-full bg-cover  bg-no-repeat bg-center"
        >
          <nav className="h-[85px] grid grid-cols-12 grid-rows-1   justify-center items-center ">
            <img src={icon} className="col-start-2 sm:hidden " alt="" />
            <Link
              to="/"
              className="col-start-6 col-end-8  m-auto sm:m-0 sm:col-end-auto sm:col-start-2 lg:col-start-1 justify-self-end  "
            >
              <img src={logo} alt="" />
            </Link>

            <ul className=" hidden sm:flex gap-10  text-white justify-center text-opacity-70 col-start-6 lg:col-start-7 xl:col-start-8  col-end-12">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/">
              <li>Stays</li>

              </Link>
              <Link to="/">
              <li>Flights</li>
              </Link>
              <Link to="/">
              <li>Packages</li>
              </Link>
             
              
              <li className="whitespace-nowrap">Sign Up</li>
            </ul>
          </nav>
          <header className="  grid grid-cols-11 sm:grid-cols-10  grid-rows-8 grid-flow-col max-w-full h-full">
            <div className="text-[32px] sm:text-[62px] mb-4 sm:mb-10 self-center  lg:text-[72px]  font-black col-start-2 col-end-10 lg:col-end-8 row-start-1 row-end-3   text-white ">
              <p className="whitespace-nowrap mr-3 flex  sm:leading-[5.125rem]"> The whole world </p>{" "}
              <p className="sm:leading-[5.125rem]">awaits.</p>
            </div>

            <div className={`rounded-2xl row-start-3  col-start-2 col-end-[-1] sm:col-end-10  flex flex-col mr-4 sm:mr-0 lg:grid grid-cols-12 grid-rows-1 lg:justify-center  lg:h-[60px] lg:items-center text-opacity-70  text-white ${window.location.pathname=='/About'?"lg:bg-opacity-10":'lg:bg-opacity-40'}  lg:bg-white lg:bg-backdrop-filter lg:backdrop-blur-md`}>
              <div className="rounded-full col-start-1 col-end-3 py-3 md:py-5 lg:py-0   mb-5 lg:mb-0 lg:ml-8 flex items-center  justify-center lg:justify-start  bg-opacity-40 bg-white bg-backdrop-filter backdrop-blur-md    lg:bg-opacity-0 lg:bg-transparent  lg:backdrop-blur-none ">
                <img src={Vector} className="mr-2" dalt="" />
                <input
                  type="text"
                  name=""
                  placeholder="Search destinations, hotels"
                  className="bg-transparent placeholder:text-white focus:outline-none   rounded-lg"
                  id=""
                />
              </div>
              <div className=" rounded-full col-start-5 flex py-3 md:py-5 lg:py-0   mb-5 lg:mb-0  justify-evenly lg:justify-evenly col-end-9  bg-opacity-40 bg-white bg-backdrop-filter backdrop-blur-md    lg:bg-opacity-0 lg:bg-transparent  lg:backdrop-blur-none">
                <div className="flex   items-center gap-2 ">
                  <img src={check} alt="" />
                  Check In
                </div>
                <div className="border border-l-[1] lg:border-none"></div>
                <div className="flex  items-center gap-2 ">
                  <img src={check} alt="" />
                  Check Out
                </div>
              </div>
              <div className="flex justify-center items-center py-3 md:py-5 lg:py-0  mb-5 lg:mb-0  gap-2 col-start-9   col-end-11 rounded-full bg-opacity-40 bg-white bg-backdrop-filter backdrop-blur-md    lg:bg-opacity-0 lg:bg-transparent  lg:backdrop-blur-none">
                <img src={man} alt="" />
                <p className="whitespace-nowrap">1 room, 2 adults</p>
              </div>
              <button className=" sm:w-full lg:w-[100px] xl:w-[147px] lg:h-[42px] rounded-full py-3 md:py-5 lg:py-0 lg:text-blue-600 lg:col-start-11 lg:col-end-13 col-start-2 col-end-10  lg:m-auto bg-blue-600 text-white lg:bg-white ">
                Search
              </button>
            </div>
            <div className="mt-10   lg:mt-0  row-start-6 md:row-start-5 col-start-2 col-end-[-1] sm:col-end-10  ">
              <Categories></Categories>
            </div>

            <div className="mt-10 lg:mb-0  row-start-7 col-start-2 col-end-12 ">
              {element}
            </div>
          </header>
        </div>
      </div>
      {children}
      <Footer></Footer>
    </>
  );
};

export default header;
