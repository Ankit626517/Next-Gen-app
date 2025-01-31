import React from 'react'
import image1 from './Images/image1.jpg'
import image3 from './Images/image3.jpg'
import image2 from './Images/image2.jpg'


function SectionSecond() {
    return (
        // <div className="sticky  w-full h-150 border-2 flex justify-center items-center gap-20">
        //     <div>
        //         <div className=' w-65 h-65 rounded-4xl p-1 bg-gradient-to-r  from-blue-600 via-green-500 to-indigo-400'   > <img src={image3} alt='not found image' className='rounded-4xl h-63' /></div>
        //         <span>Gear VR headSet</span>
        //     </div>
        //     <div>
        //     <div className='   w-55 h-55 rounded-4xl p-1 bg-gradient-to-r  from-blue-600 via-green-500 to-indigo-400'><img src={image1} alt='not found image' className='rounded-4xl w-54 h-53' /></div>
        //     <span>PS5</span>
        //     </div>
        //     <div>
        //     <div className=' w-65 h-65 rounded-4xl p-1 bg-gradient-to-r  from-blue-600 via-green-500 to-indigo-400'   > <img src={image2} alt='not found image' className='rounded-4xl h-63' /></div>
        //     <span>Play station VR</span>
        //     </div>
        // </div>
        <div className="sticky  w-full  mt-35 flex flex-wrap justify-center items-center gap-20 p-5 ">
        <div className="flex flex-col items-center"  md:w-70 md:h-90 rounded-3xl p-1 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 flex justify-center items-center data-aos="fade-right"   data-aos-duration="1800">
        {/* data-aos-offset="200" */}
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-70 md:h-90 rounded-3xl p-1 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 flex justify-center items-center">
                <img src={image3} alt="not found image" className="rounded-3xl w-full h-full object-cover" />
            </div>
            <span className="mt-2 text-center text-sm sm:text-base font-semibold">Gear VR Headset</span>
        </div>
        <div className="flex flex-col items-center"  >
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-70 md:h-70 rounded-3xl p-1 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 flex justify-center items-center"  data-aos="zoom-in"   data-aos-duration="1000">
                <img src={image1} alt="not found image" className="rounded-3xl w-full h-full object-cover" />
            </div>
            <span className="mt-2 text-center text-sm sm:text-base font-semibold">PS5</span>
        </div>
        <div className="flex flex-col items-center  " data-aos="slide-left"   data-aos-duration="1000">
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-80 md:h-100 rounded-3xl p-1 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 flex justify-center items-center"  >
                <img src={image2} alt="not found image" className="rounded-3xl w-full h-full object-cover" />
            </div>
            <span className="mt-2 text-center text-sm sm:text-base font-semibold">PlayStation VR</span>
        </div>
    </div>
    )
}

export default SectionSecond
