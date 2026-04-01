import React from 'react';

const Navbar = ({ carts }) => {
  return (
    <div className="text-indigo-800 shadow-sm w-full font-bold">
      <div className="navbar justify-between w-[90%] lg:w-[80%] mx-auto py-3">

        <div className="flex items-center gap-2">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost p-2">
              ☰
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-4 shadow-2xl bg-white rounded-2xl w-64 space-y-3 font-semibold text-gray-700 border border-gray-100 absolute"
            >
              <li className="hover:text-purple-600 transition"><a>Products</a></li>
              <li className="hover:text-purple-600 transition"><a>Features</a></li>
              <li className="hover:text-purple-600 transition"><a>Pricing</a></li>
              <li className="hover:text-purple-600 transition"><a>Testimonials</a></li>
              <li className="hover:text-purple-600 transition"><a>FAQ</a></li>
            </ul>
          </div>

          <a className="btn btn-ghost font-bold text-xl sm:text-2xl lg:text-3xl p-0">
            DigiTools
          </a>
        </div>

        <ul className="hidden lg:flex gap-6 text-base">
          <li className="cursor-pointer hover:text-primary transition">Products</li>
          <li className="cursor-pointer hover:text-primary transition">Features</li>
          <li className="cursor-pointer hover:text-primary transition">Pricing</li>
          <li className="cursor-pointer hover:text-primary transition">Testimonials</li>
          <li className="cursor-pointer hover:text-primary transition">FAQ</li>
        </ul>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle p-2">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="indicator-item badge bg-red-500 text-white border-none w-5 h-5 flex items-center justify-center rounded-full text-[10px] font-bold">
                  {carts.length}
                </span>
              </div>
            </div>
          </div>

          <h2 className="hidden sm:block cursor-pointer font-medium hover:text-primary transition">
            Login
          </h2>

          <button className="btn text-white text-xs sm:text-sm lg:text-base rounded-full bg-gradient-to-r from-purple-600 to-indigo-700 px-3 sm:px-5 py-2">
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;