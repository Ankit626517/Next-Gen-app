import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import HumanImage from './Images/phot.png';

function SectionFirst() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#0e0f1a] text-white py-16 px-6 lg:px-16">
      {/* Floating Blurs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full opacity-20 blur-3xl animate-pulse -z-10"></div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 z-10 relative">
        {/* Text */}
        <div className="text-center lg:text-left max-w-3xl lg:w-[850px] lg:h-[450px] p-10" data-aos="fade-right">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
            NEXT GEN
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-[70px] font-extrabold mt-2" data-aos="fade-left">
            <span className="text-purple-100">VIRTUAL </span>
            <span className="text-white">REALITY</span>
          </h2>
          <p className="mt-6 md:mt-10 text-lg md:text-xl leading-relaxed text-gray-300" data-aos="slide-up">
            The future of virtual reality is increasingly multisensory, allowing users to
            experience the metaverse with all their senses. The more realistic the virtual
            world, the more immersive the experiences.
          </p>

          <button className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 via-green-400 to-indigo-500 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
            Explore Now 🚀
          </button>
        </div>

        {/* Image */}
        <div className="mt-10 lg:mt-0 lg:ml-10" data-aos="fade-up">
          <img
            src={HumanImage}
            alt="Virtual Reality Experience"
            className="h-[20rem] md:h-[28rem] lg:h-[34rem] w-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-20 grid md:grid-cols-3 gap-8 text-center" data-aos="fade-up">
        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300">
          <h3 className="text-xl font-bold text-indigo-300">Immersive Gaming</h3>
          <p className="mt-2 text-gray-300 text-sm">
            Dive into action-packed worlds with full-body tracking and real-time physics.
          </p>
        </div>
        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300">
          <h3 className="text-xl font-bold text-green-300">Social VR Spaces</h3>
          <p className="mt-2 text-gray-300 text-sm">
            Connect with friends across the globe as avatars in shared digital spaces.
          </p>
        </div>
        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300">
          <h3 className="text-xl font-bold text-pink-300">Training & Education</h3>
          <p className="mt-2 text-gray-300 text-sm">
            Learn by doing – from medical surgery to spacewalk simulations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionFirst;
