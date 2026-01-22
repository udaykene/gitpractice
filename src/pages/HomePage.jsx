import React from 'react'
import Navbar from './../components/Navbar';
import Hero from './Hero';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className='h-screen w-full bg-gray-800'>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default HomePage
