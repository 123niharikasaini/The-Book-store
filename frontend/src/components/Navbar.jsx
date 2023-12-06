import React, { useState,useEffect,  } from 'react'
import { BsFillBookFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import {RxCross2} from "react-icons/rx"
import { Link } from 'react-router-dom';
// import { AuthContext } from '../contacts/authProvider';

const Navbar = () => {
  const [isMenuOpen,setIsMenuOpen]=useState(false);
  const [isSticky,setIsSticky]=useState(false);

  

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>100){
        setIsSticky(true);
      }
      else{
        setIsSticky(false);
      }
    };
    return window.addEventListener("scroll",handleScroll);
  },[]);

  const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen);
  }

  // navItems
  const navItem=[
    {link:"Home",path:"/"},
    {link:"About",path:"/about"},
    {link:"Shop",path:"/shop"},
    {link:"Sell Your Books",path:"/admin/dashboard"},
    // {link:"Blog",path:"/blog"}
  ]

  return (
    <>
    <header className='w-full p-2 bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
      <nav className={`m-0 p-2 ${isSticky?"bg-green-100":""}`}>
        <div className='flex justify-between items-center'>
        {/* logo */}
        <Link to="/" className='text-2xl text-green-600 font-bold flex gap-2 items-center'>
          <BsFillBookFill className='inline-block'/>The Book Store</Link>

        {/* menu for md devices and above */}
        <div className='md:flex space-x-10 items-center text-xl hidden'>
          {navItem.map(({link,path})=><Link to={path} key={path} className='hover:text-green-500'>
          {link}
          </Link>)}
          
        </div>

        <div className='md:hidden'>
          <button onClick={toggleMenu} className='flex items-center'>
            {isMenuOpen?<RxCross2 className='text-2xl hover:text-green-500'/>:<AiOutlineMenu className='text-2xl hover:text-green-500'/>}
          </button>   
        </div>
        </div>

        <div className={`md:hidden bg-gradient-to-r from-green-400 to-green-100 flex-col z-50 p-2 m-2 rounded ${isMenuOpen?"block":"hidden"}`}>
          {navItem.map(({link,path})=><Link to={path} key={path} className='block p-2 hover:text-white'>
          {link}
          </Link>)}
          
        </div>

        

      </nav>
    </header>
    </>
  )
}

export default Navbar