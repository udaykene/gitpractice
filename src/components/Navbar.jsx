import React from "react";

const Navbar = () => {
  return (
    <nav className="z-50 w-full flex fixed top-0  justify-between items-center px-12 py-4 bg-amber-50">
      <div className="flex justify-center gap-2 items-end">
        <div className="text-4xl">
          <i class="ri-building-2-fill"></i>
        </div>
        <h1 className="text-2xl font-bold flex gap-2">ParthBuilders</h1>
      </div>

      <div className="flex items-center gap-4">
        <ul className="flex gap-6 text-xl">
          <a href="">
            <li>About Us</li>
          </a>
          <a href="">
            <li>Project</li>
          </a>
          <a href="">
            <li>Services</li>
          </a>
          <a href="">
            <li>Contact</li>
          </a>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
