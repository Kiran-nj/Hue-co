import { useState } from 'react'
import Header from './Components/Header'
import Slider from './Components/Slider'
import LocomotiveScroll from "locomotive-scroll";
import Cards from './Components/Cards';
import Hove from './Components/Hove';
import { HoverImageLinks } from './Feature/SecondFooter';
import { Footer } from './Components/Footer';

function App() {

    const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
     <Header/>
     <Slider/>
     <Cards />
     <HoverImageLinks/>
     <Footer />
     

    </>
  )
}

export default App
