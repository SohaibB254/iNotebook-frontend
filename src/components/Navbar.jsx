import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
  let navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem('Token');
    navigate('/login');
  }
  let location = useLocation();

  const toggleNav = ()=>{
    setNavOpen(prev => !prev)
  }
  return (
    <nav className="flex md:flex-row flex-col border-b border-gray-300 md:border-0 relative  md:items-center gap-8 bg-gray-100 sm:px-8 px-4 py-4">
      <div className='flex items-center justify-between'>
      <Link className="text-2xl font-bold text-green-700  " to="/">iNoteBook</Link>
      {
        navOpen ?
           <X onClick={toggleNav} className='text-black md:hidden block ' size={18}/>
           :
      <Menu onClick={toggleNav} className='text-black md:hidden block ' size={18}/>
      }

        </div>
      <div className={`${navOpen?'translate-x-0':'-translate-x-full'} flex md:static absolute md:translate-x-0 left-0 px-4 sm:px-8 md:px-0 py-2 top-14 transition bg-gray-100 md:flex-row flex-col gap-2 justify-between w-full md:items-center`} >
        <ul className="flex md:flex-row flex-col gap-2 md:items-center ">
          <li className="nav-item">
            <Link onClick={toggleNav} className={` ${location.pathname==='/'?'font-medium':''}`} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link onClick={toggleNav} className={` ${location.pathname==='/about'?'font-medium':''}`} to="/about">About</Link>
          </li>
        </ul>
        {!localStorage.getItem('Token')?<form className="d-flex" role="search">
        <Link onClick={toggleNav} className={` rounded bg-green-400 px-2 p-1  text-white ${location.pathname==='/login'?'bg-green-700':''} mx-1`} to='/login'  role="button" aria-disabled="true">Login</Link>
        <Link onClick={toggleNav} className={` rounded bg-green-400 px-2 p-1  text-white ${location.pathname==='/signup'?'bg-green-700':''} mx-1`} to='/signup'  role="button" aria-disabled="true">Sign Up</Link>
        </form>:<button className=' rounded px-2 p-1 w-fit cursor-pointer hover:bg-red-500 text-white  transition font-medium bg-red-400' onClick={()=>{handleLogout(),toggleNav()}}>Logout</button>}
      </div>
    </nav>

  )
}
