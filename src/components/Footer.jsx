import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
     <div className='flex text-sm sm:px-8 px-2 gap-2 mt-10 py-2  border-t border-gray-300 w-full justify-between'>
        <h2 className='text-gray-500'>@iNoteBook All rights reserved</h2>
        <ul className='flex list-none flex-wrap gap-2 '>
            <Link to={'/'}>Account</Link>
            <Link to={'/policy'}>Policy</Link>
            <Link to={'/about'}>About</Link>
        </ul>
    </div>
  )
}

export default Footer
