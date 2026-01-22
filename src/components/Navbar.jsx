import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-12 py-4 bg-amber-50'>
      <h1 className='text-2xl font-bold'>Suntouch</h1>
      <div className='flex items-center gap-4'>
        <ul className='flex gap-6 text-xl'>
          <a href=""><li>About Us</li></a>
          <a href=""><li>Project</li></a>
          <a href=""><li>Services</li></a>
          <a href=""><li>Contact</li></a>
        </ul>
      <button className='px-4 py-2 bg-blue-500 rounded-xl text-white font-bold'>SignUp</button>
      </div>
    </nav>
  )
}

export default Navbar
