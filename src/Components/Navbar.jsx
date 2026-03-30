import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm justify-between w-[80%] mx-auto">

      {/* Left (Logo) */}
      <div>
        <a className="btn btn-ghost text-xl">DigiTools</a>
      </div>

      {/* Middle (Menu) */}
      <ul className="flex gap-6">
        <li>Products</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Testimonials</li>
        <li>FAQ</li>
      </ul>

      {/* Right (Cart + Avatar) */}
      <div className="flex items-center gap-4">

        {/* Cart */}
        <div className="flex items-center gap-3">

          {/* Cart */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
          </div>

          {/* Login */}
          <h2 className="cursor-pointer font-medium hover:text-primary transition">
            Login
          </h2>

        </div>

        {/* Avatar */}

        <button className="btn rounded-4xl bg-gradient-to-r from-purple-600 to-indigo-700 ">Get Started</button>



      </div>
    </div>
  );
};

export default Navbar;