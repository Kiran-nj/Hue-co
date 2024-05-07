import React, { useEffect, useRef } from 'react'
import Tcard from '../Feature/TiltCard'
import StaggeredDropDown from './../Feature/Dropdown';
import Filter from '../Feature/FilterButton';
import Pricefilter from '../Feature/PriceFilterButton';
import gsap from "gsap/gsap-core";
import {  ScrollTrigger } from 'gsap/all';
import Color from './../Feature/Colour';


gsap.registerPlugin(ScrollTrigger)
const Cards = () => {

    useEffect(() => {

/*             gsap.to(['#heading'], {
                x: 25,
                y: -25,
                opacity: 1,
                delay: 0.5,
                scrollTrigger: {
                  trigger: '#heading',
                  toggleActions: 'restart restart restart restart ',
                },
              }); */

              gsap.fromTo(
                ".filter",
                {
                  x: 300,
                  borderRadius: "0%",
                  yoyo: false,
                  rotation: 0,
                  opacity:0,
                },
                {
                  x: 0,
                  repeat: 0,
                  yoyo: false,
                  rotation: 0,
                  borderRadius: "100%",
                  duration: .7,
                  ease: "none",
                  stagger: .5,
                  opacity:1,
                  scrollTrigger: {
                    trigger: '.cards',
                    toggleActions: 'restart none none none ',
                  },
                }
              );
           
              gsap.fromTo(
                "#kard",
                {
                  y: 700,
                  borderRadius: "0%",
                  yoyo: false,
                  rotation: 0,
                  opacity:0,
                },
                {
                  x: 0,
                  y:0,
                  repeat: 0,
                  yoyo: false,
                  rotation: 0,
                  borderRadius: "100%",
                  duration: .7,
                  ease: "none",
                  stagger: .5,
                  opacity:1,
                  scrollTrigger: {
                    trigger: '.cards',
                    toggleActions: 'restart none none none ',
                  },
                }
              );

    }, [])
    


  return (
    <div>
        <div className='p-20  ' >
            <div className='flex items-center justify-between cards'>

            <h1 id='heading' className=' text-3xl py-10  translate-x- opacity- '>Find what suits you</h1>
            
            <div className='flex gap-8 '>  

            <div className='filter z-50' > <Color />  </div>        
            <div className='filter z-50' > <Filter/>  </div>
            <div className='filter z-50' > <Pricefilter />  </div>
         
            
            </div>


            </div>

      
      <div class="grid grid-cols-4 grid-rows-2 gap-y-20">
  {Array(16).fill(0).map((_, index) => (
    
    <div id='kard' className=''>
        <Tcard key={index} />
        <div className=' mt-10 ml-5 '>Title</div>
        <div className='flex  '>
        <h1 className='ml-5 text-red-600 line-through ' >$100</h1> 
        <h1 className='ml-32 text-lime-500'>$80</h1>
        </div>
    </div>
 
  ))}
</div>

      </div>
    </div>
  )
}

export default Cards
