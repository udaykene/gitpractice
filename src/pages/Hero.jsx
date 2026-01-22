import React from 'react'

const Hero = () => {
  return (
    <main className="h-full flex flex-col justify-center items-center w-full bg-[url('https://images.unsplash.com/vector-1746092444052-661ae4de13a4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
        <div className='text-center mb-10 flex flex-col gap-2 font-bold'>
        <h1 className='text-6xl text-white'>Transform Your Homes</h1>
        <h1 className='text-6xl text-[#C49055]'>Peacefull Places</h1>
        </div>
        <div className="btns flex gap-4">
            <button className='bg-blue-500 flex justify-center items-center rounded-xl text-white px-6 py-4 text-lg font-medium'>Get Started <i className="ri-arrow-right-line"></i></button>
            <button className='bg-transparent border-2 rounded-xl flex justify-center items-center text-white text-lg px-6 py-4 font-medium'><i className="ri-play-line text-2xl"></i>Watch Demo</button>
        </div>
    </main>
  )
}

export default Hero
