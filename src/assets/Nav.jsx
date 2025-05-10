import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Games', href: '#games' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'bg-[#0a0c14] shadow-lg py-2 backdrop-blur-sm bg-opacity-90' 
          : 'bg-[#0f111a] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo with hover animation */}
        <div 
          className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-green-400 to-indigo-500 text-transparent bg-clip-text 
                    hover:scale-105 transition-transform duration-300 hover:animate-pulse cursor-pointer" 
          data-aos="fade-right"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          VR World 🌐
        </div>

        {/* Desktop Links with enhanced hover effects */}
        <ul className="hidden md:flex space-x-8 text-white font-medium text-lg">
          {navItems.map((item, index) => (
            <li 
              key={index}
              className="relative group"
              data-aos="fade-down"
              data-aos-delay={index * 100}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <a 
                href={item.href}
                className={`relative py-2 px-1 transition-all duration-300 ${
                  hoveredItem === item.name 
                    ? 'text-green-400 scale-110' 
                    : 'hover:text-green-300'
                }`}
              >
                {item.name}
                {/* Animated underline */}
                <span className={`
                  absolute left-0 -bottom-1 h-0.5 bg-green-400 
                  transition-all duration-500 ease-in-out 
                  ${hoveredItem === item.name ? 'w-full' : 'w-0'}
                `}></span>
              </a>
              
              {/* Dropdown indicator animation */}
              {item.dropdown && (
                <ChevronDown 
                  size={16} 
                  className={`
                    absolute -right-5 top-1/2 transform -translate-y-1/2 
                    transition-transform duration-300 
                    ${hoveredItem === item.name ? 'rotate-180 text-green-400' : 'text-gray-300'}
                  `} 
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button with bounce animation */}
        <div 
          className="md:hidden text-white cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <X size={28} className="animate-spin-in" />
          ) : (
            <Menu size={28} className="hover:animate-bounce" />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu with slide animation */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-[#1a1c29] text-white py-4 space-y-4 font-medium text-lg">
          {navItems.map((item, index) => (
            <li 
              key={index} 
              className="w-full text-center"
            >
              <a 
                href={item.href} 
                onClick={() => setIsOpen(false)}
                className={`
                  block py-2 px-4 rounded-lg transition-all duration-300
                  hover:bg-[#252838] hover:text-green-400 hover:scale-105
                  active:bg-[#303342] active:scale-95
                  ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;