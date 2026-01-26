import { useState } from 'react';

import logo from '/logo.svg';

import { CiSearch, CiBellOn } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";

import avatar from '@/assets/images/navbar/SmallAvatar.png'


function Navbar() {
  const [ isClicked, setIsClicked ] = useState(false)

  const toggleVisibility = () => {
    setIsClicked(!isClicked)
  }

  return(
    <nav className='flex justify-between items-center p-10'>
      <div className='flex items-center gap-10 cursor-pointer'>
        <img src={ logo } alt='logo' />
        <div className='hidden xl:flex items-center gap-7'>
          <a href='/'>Home</a>
          <a>TV Shows</a>
          <a>Movies</a>
          <a>New & Popular</a>
          <a>My List</a>
          <a>Browse by Languages</a>
        </div>
      </div>
      <div className='relative flex items-center gap-5'>
        <CiSearch className='hidden xl:block w-7 h-7 cursor-pointer' />
        <CiBellOn className='hidden xl:block w-7 h-7 cursor-pointer' />
        <div className='flex items-center gap-1' onClick={ toggleVisibility }>
          <img src={ avatar } className='w-8 h-8' />
          <MdArrowDropDown className='w-7 h-7' />
        </div>
        <div 
          className={`absolute top-10 bg-grey-500 rounded-sm w-40 h-16 p-5 ${ isClicked ? 'block' : 'hidden' }`}
        >
          <p className='text-sm font-semibold text-grey-10'>Sign Out</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar