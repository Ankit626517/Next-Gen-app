import React from 'react'
import Box2Image from './Images/Untitled.png'

function SectionThird() {
  return (
    <>
    <div className="relative flex flex-wrap justify-center items-center gap-10 p-6 rounded-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 shadow-xl overflow-hidden">
      
      {/* Optional background overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0 rounded-3xl"></div>
  
      {/* Image Section */}
      <div
        className="w-[300px] md:w-[400px] lg:w-[450px] transition-transform duration-500 hover:scale-105 z-10"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <img
          src={Box2Image}
          alt="image not found"
          className="rounded-[6rem] w-full h-auto shadow-lg"
        />
      </div>
  
      {/* Text Section */}
      <div
        className="max-w-xl text-white z-10"
        data-aos="fade-left"
        data-aos-duration="1200"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Get together, from wherever
        </h1>
        <p className="mt-6 text-lg md:text-xl leading-relaxed text-white drop-shadow">
          Feel like you're in the same room with friends as you team up for games,
          challenges, or creative sessions. Whether it's gaming, learning, or
          just hanging out—distance doesn’t matter anymore.
        </p>
        <p className="mt-4 text-lg md:text-xl leading-relaxed text-white drop-shadow">
          🔹 Use up to <span className="font-bold">six virtual screens</span> to stay productive and
          connected. <br />
          🔹 Enjoy seamless access to your <span className="font-bold">favorite apps</span> in a shared virtual space. <br />
          🔹 Experience immersive collaboration like never before.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-100 transition duration-300">
          Explore More
        </button>
      </div>
    </div>
    <div className="relative flex flex-wrap justify-center items-center gap-10 p-6 rounded-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 shadow-xl overflow-hidden mb-10">
    <div className="absolute inset-0 bg-black bg-opacity-40 z-0 rounded-3xl"></div>
    <div
      className="w-[300px] md:w-[400px] lg:w-[450px] transition-transform duration-500 hover:scale-105 z-10"
      data-aos="fade-right"
      data-aos-duration="1200"
    >
      <img
        src={Box2Image}
        alt="image not found"
        className="rounded-[6rem] w-full h-auto shadow-lg"
      />
    </div>
    {/* <div className="max-w-xl text-white z-10" data-aos="fade-left" data-aos-duration="1200">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
        Get together, from wherever
      </h1>
      <p className="mt-6 text-lg md:text-xl leading-relaxed text-white drop-shadow">
        Feel like you're in the same room with friends as you team up for games,
        challenges, or creative sessions. Whether it's gaming, learning, or just hanging out—distance doesn’t matter anymore.
      </p>
      <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-100 transition duration-300">
        Explore More
      </button>
    </div>*/}
  </div> 

  {/* Section 2 – Collaboration Features */}
  <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 p-10 rounded-3xl shadow-xl text-white mb-10">
    <div data-aos="fade-up" data-aos-duration="1200">
      <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
        Collaborate Seamlessly
      </h2>
      <p className="text-lg md:text-xl leading-relaxed drop-shadow">
        🚀 Real-time document editing, shared whiteboards, and synchronized audio give your team a sense of presence—no matter where they are.
      </p>
      <ul className="mt-4 space-y-2 text-lg md:text-xl">
        <li>✅ Brainstorm together with interactive tools</li>
        <li>✅ Comment, tag, and assign tasks live</li>
        <li>✅ Maintain your creative flow without disruption</li>
      </ul>
    </div>
  </div>

  {/* Section 3 – Personalization */}
  <div className="bg-gradient-to-r from-yellow-500 via-orange-400 to-rose-400 p-10 rounded-3xl shadow-xl text-white mb-10">
    <div data-aos="fade-up" data-aos-duration="1200">
      <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
        Personalize Your Space
      </h2>
      <p className="text-lg md:text-xl leading-relaxed drop-shadow">
        🎨 Customize your virtual environment with widgets, layouts, and background themes. Make your workspace reflect your personality or mood.
      </p>
      <ul className="mt-4 space-y-2 text-lg md:text-xl">
        <li>🎯 Drag-and-drop layout editing</li>
        <li>🌈 Choose from dynamic themes and lighting</li>
        <li>🔔 Add reminders, calendars, and more</li>
      </ul>
      <button className="mt-6 px-6 py-3 bg-white text-orange-600 font-bold rounded-full hover:bg-orange-100 transition duration-300">
        Start Customizing
      </button>
    </div>
  </div>
  </>
  
  
    
        
 
  )
}

export default SectionThird
