import React, { useEffect } from 'react'
import logo from '../../public/logo2.jpg'
import { TbCategory } from "react-icons/tb";
import Button1 from '../Feature/Button';
import StaggeredDropDown from '../Feature/Dropdown';
import Bubble from '../Feature/Bubbletext';
import { FiSearch } from 'react-icons/fi';
import { gsap } from "gsap";
import { Link } from 'react-router-dom'; 

const Header = () => {

/*   useEffect(() => {
    gsap.fromTo(
      ".a",
      {
        x: 500,
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
        ease: "elastic.inOut",
      }
    );
  }, []); */
  
  return (
    <div className=''>
    <div className=' flex items-center px-6 justify-between w-full bg-gradient-to-t from-black to-[orange-950] '>
      {/*   logo */}
      <div className=' flex items-center '> 
      <img className='w-24 rounded-full opacity-40' src={logo} alt="" />
      <h1 className='text-3xl font-pacifico font-bold text-stone-300 a' >HUE & Co</h1>
      </div>
      {/* searchbutton */}
      <div className="pt-2 relative mx-auto text-gray-600">
        <input class="border-2 border-none bg-slate-900 h-10 px-7 pr-16 py-7 w-[400px]
        rounded-lg text-sm focus:outline-none text-white"
          type="search" name="search" placeholder="Hoodies, Oversized , Fullsleevs"/>
        <button type="submit" class="absolute right-0 top-2 mt-5 mr-4"><FiSearch className='text-white'/>
        </button>
      </div>


     {/*   login and category */}
      <div className='flex items-center text-stone-300 gap-7'>  
      <div className='flex'>

      <StaggeredDropDown />
{/*       <TbCategory className='text-4xl'/>
      <h1 className='font-pacifico text-2xl text-[#9BA9EC]' >Category</h1> */}
      </div>
      <Link to={`/login/`}> 
      <div >
      <Button1 /> 
       </div>
       </Link>
      </div>
      </div>
      </div>

  )
}

export default Header
