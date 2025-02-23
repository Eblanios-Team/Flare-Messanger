import { useState } from "react";
import Nav from "../Nav/Nav.tsx";

const Contact = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <div className="bg-[#EEEEEE] h-auto w-full md:w-[400px]">
            <div className="flex justify-around m-[15px] items-center sm:justify-center">
                <button onClick={toggleMenu} className="cursor-pointer"><img src="../../../public//img/burger-menu.svg" alt="" className="w-[35px] sm:hidden" /></button>
                <input type="text" className="w-[300px] h-[40px] rounded-[10px] shadow-xl" placeholder="Search" />
            </div>

            <div className="w-[300px] bg-white m-auto mt-[70px]">
                <h2 className="text-[25px]">People</h2>
            </div>
            {isOpen && (
                <Nav />
            )}
        </div>

    );
};

export default Contact;