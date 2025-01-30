import React from 'react'
import HumanImage from "./Images/phot.png";
import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

function SectionFirst() {
      useEffect(()=>{
        Aos.init();
      }, [])
    
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 py-10">
      {/* Text Content */}
      <div className="text-center lg:text-left max-w-3xl lg:w-[850px] lg:h-[450px] p-10">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text" data-aos="fade-right" data-aos-duration="1500">
          NEXT GEN
        </h1 >
        <h1 className="text-4xl md:text-6xl lg:text-[70px] font-extrabold" data-aos="fade-left" data-aos-duration="2500">
          <span className="text-purple-100" data-aos="fade-right" >VIRTUAL</span> <span >REALITY</span>
        </h1>
        <p className="mt-6 md:mt-10 text-lg md:text-xl leading-relaxed text-gray-300"data-aos="slide-up" data-aos-duration="2200">
          The future of virtual reality is increasingly multisensory, allowing users to
          experience the metaverse with all their senses. The more realistic the virtual
          world, the more immersive the experiences.
        </p>
      </div>
    
      {/* Image */}
      <div className="mt-10 lg:mt-0 lg:ml-10" data-aos="fade-down" data-aos-duration="2000">
        <img src={HumanImage} alt="Virtual Reality Experience" className="h-[20rem] md:h-[28rem] lg:h-[34rem] w-auto" />
      </div>
    </div>
    </div>
  )
}

export default SectionFirst
