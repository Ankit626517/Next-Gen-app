import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // For the hamburger menu icon
import Aos from 'aos'
import 'aos/dist/aos.css'
import VrImage from "./Images/vrImage.png";
// import HumanImage from "./Images/phot.png";
import "../App.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    Aos.init();
  }, [])

  return (
    <>
    <div id="header-box">    
    <nav className=" text-white sticky top-0 z-20 w-full shadow-md">
      <div className="container mx-auto flex items-center p-4 justify-center">
        {/* Logo */}
        {/* <a href="#" className="text-2xl font-bold">
          Brand
        </a> */}

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-2xl font-semibold ">
          <li data-aos="fade-right" data-aos-duration="1200" ><a href="#" className="hover:text-sky-400 transition" >Home</a></li>
          <li data-aos="fade-right" data-aos-duration="900"><a href="#" className="hover:text-sky-400 transition" >Products</a></li>
          <li>
            <a href="#">
              <img src={VrImage} alt="VR Experience" className="h-8 w-8" />
            </a>
          </li>
          <li data-aos="fade-left" data-aos-duration="700"><a href="#" className="hover:text-sky-400 transition" >Service</a></li>
          <li  data-aos="fade-left" data-aos-duration="800"><a href="#" className="hover:text-sky-400 transition">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lg font-semibold">
            <li><a href="#" className="hover:text-sky-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-sky-400 transition">Products</a></li>
            <li>
              <a href="#">
                <img src={VrImage} alt="VR Experience" className="h-8 w-8" />
              </a>
            </li>
            <li><a href="#" className="hover:text-sky-400 transition">Service</a></li>
            <li><a href="#" className="hover:text-sky-400 transition">Contact</a></li>
          </ul>
        </div>

      )}
    </nav>
      
    </div>
    </>

  );
};

export default Nav;
