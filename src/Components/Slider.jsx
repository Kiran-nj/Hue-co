import React, { useEffect } from 'react'
import Sliders from './../Feature/Caurosel';
import { gsap } from "gsap";

const Slider = () => {
  useEffect(() => {
    gsap.fromTo(
      ".secondtitle",
      {
        x: 0,
        borderRadius: "0%",
        rotation: 0,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        rotation: 0,
        borderRadius: "100%",
        duration: 1.5,
        ease: "none",
      }
    );
  }, []);
  return (
    <div className=''>
     <div className='pl-12 text-4xl mt-10 text-stone-300  secondtitle'>Top Sellers </div>
      <Sliders/>
    </div>
  )
}

export default Slider
