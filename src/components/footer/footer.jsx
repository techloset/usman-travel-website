import logo from "../../images/trxvl.png";
import social from "../../images/footer/Social.png";
const footer = () => {
  return (
      <footer className=" flex flex-wrap  !w-full justify-center px-5  py-10 text-[13px] text-gray-500 bg-black ">
        <div className="flex flex-col sm:flex-row   sm:gap-20 lg:gap-[125px] sm:mr-[53px]">
          <div className=" sm:h-[60%] flex flex-col sm:ml-[8.7%] ">
            <div className="text-center sm:text-start ">
              <p className="text-[32px] font-bold  text-white">Trxvl.</p>
              <img
                src={social}
                alt=""
                className="mt-8 mx-auto sm:mt-14  sm:hidden block"
              />
            </div>
          </div>

          <ul className=" flex flex-col gap-4   ">
            <li className=" hidden sm:block">Seslendirme ve Alt Jazz</li>
            <li className=" hidden sm:block">Media Market</li>
            <li className=" hidden sm:block">Gillie</li>
            <li className=" hidden sm:block">Size Last</li>
            <li className="mx-auto mt-8 sm:m-0 ">
              <button className="border    border-gray-500 border-solid p-4 bg-black">
                Helmet KOD
              </button>
            </li>
            <li className="text-center sm:whitespace-nowrap mb-5">&copy; 1997-2021 Netflix, Inc. i-062d573a0ee099242</li>
          </ul>
        </div>
        <div className="flex flex-row gap-10 lg:gap-[110px] ">
          <ul className="hidden  lg:flex flex-col gap-4 mr-[70px]">
            <li> Self Betimes</li>
            <li>Yatırımcı İlişkileri</li>
            <li>Basal Himmler</li>
          </ul>
          <ul className=" hidden md:flex flex-col gap-4 ">
            <li>Yard Market</li>
            <li>Is İmkanları</li>
            <li>Car Tercihleri</li>
          </ul>
          <ul className="flex flex-col gap-4 text-justify ">
            <li className="self-center ml-7 hidden sm:block">Hedge Karla</li>
            <li className="self-center ml-[52px] hidden sm:block">
              Mullein Koşulları
            </li>
            <li className="self-end  hidden sm:block">Autumnal Bulgier</li>
            <li>
              <img src={social} alt="" className="mt-14 hidden sm:block" />
            </li>
          </ul>
        </div>
      </footer>
  );
};

export default footer;
