
import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Logo from "../src/assets/Logo.jpeg"
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
        <a href='/' aria-label="Home">
        <img src={Logo} className='mx-2' width={50} height={33} alt='Logo'/>
         </a>
 </div>
 <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
    <a href='https://www.linkedin.com/in/harsh-tripathi-055a69304'
    target='_blank'
    rel='noopener noreferrer'
    aria-label='LinkedIn'
    >
    <FaLinkedin />
        
    </a>
    <a href='https://github.com/AnonymousTripathi'
    target='_blank'
    rel='noopener noreferrer'
    aria-label='Github'
    >
    <FaGithub />
        
    </a>
    
 </div>
    </nav>
  )
}

export default Navbar

