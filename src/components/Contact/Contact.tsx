import { useState } from "react";
import NavMobile from "../Nav/NavMobile";
import '../../styles/scroll.module.scss'
import People from "../UI/People/People";

const Contact = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <section className="bg-[#EEEEEE] w-full md:w-[400px] h-screen flex flex-col">
      <div className="flex justify-around m-[15px] items-center sm:justify-center">
        <button onClick={toggleMenu} className="cursor-pointer">
          <img src="/img/burger-menu.svg" alt="" className="w-[35px] sm:hidden" />
        </button>

        <div className="relative w-[300px]">
          <input type="text" className="w-full h-[40px] rounded-[10px] shadow-xl pr-10 pl-4 focus:outline-none" placeholder="Search" />
          <img src="/img/search.png" className="cursor-pointer w-[25px] absolute right-3 top-1/2 transform -translate-y-1/2" alt="Search" />
        </div>
      </div>

      <div className="w-[300px] bg-white m-auto mt-[70px] rounded-t-xl pt-5 pl-5 sm:w-[300px] flex-grow">
        <h2 className="text-[22px] mb-[20px]">People</h2>
          <People />
          <People />
          <People />
          <People />
      </div>

      {/* Передаём состояние и функцию закрытия меню */}
      <NavMobile isOpen={isOpen} toggleMenu={toggleMenu} />
    </section>
  );
};

export default Contact;
