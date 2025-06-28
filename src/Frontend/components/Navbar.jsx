import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-between px-6 py-4 bg-[#1e140c] text-white z-50">
      <div className="text-2xl font-bold text-white">SWITO<span className="text-orange-400">.</span></div>
      <div className="hidden md:flex gap-8 text-sm">
        <a href="/" className="hover:text-orange-400">Home</a>
        <a href="/order" className="hover:text-orange-400">Order</a>
        <a href="/contact" className="hover:text-orange-400">Contact</a>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-orange-400">🛒</span>
        <span>Hi, Arjun</span>
        <a href="/account" className="text-sm underline">My Account</a>
      </div>
    </nav>
  );
};

export default Navbar;
