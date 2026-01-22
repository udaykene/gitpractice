import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`z-50 w-full flex fixed top-0 justify-between items-center px-12 py-4 ${isScrolled ? 'bg-transparent' : 'bg-amber-50'}`}>
      <div className="flex justify-center gap-2 items-end">
        <div className="text-4xl">
          <i class="ri-building-2-fill"></i>
        </div>
        <h1 className="text-2xl font-bold flex gap-2">ParthBuilders</h1>
      </div>

      <div className="flex items-center gap-4">
        <ul className="flex gap-6 text-xl">
          <a href="" className="hover:underline decoration-black underline-offset-4">
            <li>About Us</li>
          </a>
          <a href="" className="hover:underline decoration-black underline-offset-4">
            <li>Project</li>
          </a>
          <a href="" className="hover:underline decoration-black underline-offset-4">
            <li>Services</li>
          </a>
          <a href="" className="hover:underline decoration-black underline-offset-4">
            <li>Contact</li>
          </a>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
