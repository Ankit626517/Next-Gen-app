import React from 'react'
import image1 from './Images/image1.jpg'
import image2 from './Images/image2.jpg'
import image3 from './Images/image3.jpg'

function SectionSecond() {
    return (
        <div className="sticky w-full mt-20 flex flex-wrap justify-center items-center gap-10 p-5">
            {/* Card 1 */}
            <div 
                className="group relative flex flex-col items-center p-3 rounded-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 transition-transform duration-500 hover:scale-105 shadow-lg hover:shadow-2xl focus-within:ring-4 focus-within:ring-blue-400" 
                data-aos="fade-right" 
                data-aos-duration="1500"
                tabIndex="0"
            >
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 overflow-hidden rounded-3xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                    <img src={image3} alt="not found" className="w-full h-full object-cover rounded-3xl" />
                </div>
                <span className="mt-3 text-center text-sm sm:text-base font-semibold text-white group-hover:text-yellow-200 transition-colors duration-300">Gear VR Headset</span>
            </div>

            {/* Card 2 */}
            <div 
                className="group relative flex flex-col items-center p-3 rounded-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 transition-transform duration-500 hover:scale-105 shadow-lg hover:shadow-2xl focus-within:ring-4 focus-within:ring-blue-400"
                data-aos="zoom-in" 
                data-aos-duration="1000"
                tabIndex="0"
            >
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 overflow-hidden rounded-3xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                    <img src={image1} alt="not found" className="w-full h-full object-cover rounded-3xl" />
                </div>
                <span className="mt-3 text-center text-sm sm:text-base font-semibold text-white group-hover:text-yellow-200 transition-colors duration-300">PS5</span>
            </div>

            {/* Card 3 */}
            <div 
                className="group relative flex flex-col items-center p-3 rounded-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 transition-transform duration-500 hover:scale-105 shadow-lg hover:shadow-2xl focus-within:ring-4 focus-within:ring-blue-400" 
                data-aos="fade-left" 
                data-aos-duration="1500"
                tabIndex="0"
            >
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 overflow-hidden rounded-3xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                    <img src={image2} alt="not found" className="w-full h-full object-cover rounded-3xl" />
                </div>
                <span className="mt-3 text-center text-sm sm:text-base font-semibold text-white group-hover:text-yellow-200 transition-colors duration-300">PlayStation VR</span>
            </div>
        </div>
    )
}

export default SectionSecond
