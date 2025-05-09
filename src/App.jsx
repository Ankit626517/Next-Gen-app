
import './App.css'
import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
// import Navbar from './assets/Navbar'
import Nav from './assets/Nav'
import SectionFirst from './assets/SectionFirst'
import SectionSecond from './assets/SectionSecond';
import SectionThird from './assets/SectionThird';
import SectionFour from './assets/SectionFour';

function App() {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <div id='header-box'  >

        <Nav />
        <SectionFirst />
        <SectionSecond  />
        <SectionThird/>
        <SectionFour/>
      </div>
    </>
  )
}

export default App
