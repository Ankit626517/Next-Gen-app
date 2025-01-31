import React from 'react'
import Box2Image from './Images/Untitled.png'

function SectionThird() {
  return (
    <> 
      <div className="flex  items-center justify-center flex-wrap gap-5 "  md:w-70 md:h-90 rounded-3xl p-1 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 flex justify-center items-center   >

    <div data-aos="fade-right" data-aos-duration="1200">

<img  src={Box2Image} alt='image not found' className='rounded-[6rem]' />
     </div>
     {/* Get together, from wherever
     Feel like you're in the same room with friends as you team up for games and challenges. 
     
     Surround yourself with your favorite apps
Do more than ever with up to six virtual screens you can anchor, all while keeping your space in sight.*/}
     <div className=' text-1xl border-2 w-[100hw] '>
     <h1 className='text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text'>Get together, from wherever</h1>
     <br/>
     <pre className='text-sky-100 flex flex-wrap'>Feel like you're in the same room with 
        friends as you team up <br/> for games and challenges.Surround 
        yourself with your favorite apps <br/> 
     Do more than ever with up to six virtual screens you can anchor, <br/> 
     all while keeping your space in sight. </pre>
     </div>
    </div>
    
        </>
 
  )
}

export default SectionThird
