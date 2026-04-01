import React from 'react';
import { toast } from 'react-toastify';

const CartItems = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const checkOut = () => {
    setCarts([]);
    toast.success("Proceeded successfully");
  };

  const onRemove = (item) => {
    const lastItems = carts.filter(removed => removed.id !== item.id);
    setCarts(lastItems);
    toast.warning("Item removed from cart");
  };

  return (
    <div className="px-4 py-8 sm:p-10 bg-transparent text-center w-full lg:w-[85%] mx-auto">
      <h1 className="text-2xl md:text-4xl text-[#7F2BFF] font-extrabold mb-8">Your Cart</h1>

      {carts.length === 0 ? (
        <div className="text-gray-400 flex flex-col items-center py-24 bg-gray-50 rounded-[32px] border-2 border-dashed border-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mb-4 opacity-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <p className="text-xl font-semibold">Your cart is empty</p>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 gap-4">
            {carts.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-white border border-gray-100 rounded-3xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gray-50 rounded-full flex items-center justify-center text-3xl shadow-inner">
                    {item.icon}
                  </div>

                  <div className="text-left">
                    <h4 className="text-lg md:text-xl font-bold text-slate-900">{item.name}</h4>
                    <p className="text-sm md:text-base text-slate-500 font-medium">${item.price}</p>
                  </div>
                </div>

                <button
                  onClick={() => onRemove(item)}
                  className="text-pink-500 text-sm md:text-base font-bold hover:text-pink-700 transition-colors px-3 py-2 hover:bg-pink-50 rounded-xl"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center bg-white shadow-sm font-bold text-[#7F2BFF] p-6 md:p-8 mt-10 rounded-[32px] border border-purple-50">
            <div className="text-gray-700 text-xl md:text-3xl">Total</div>
            <div className="text-3xl md:text-4xl">$ {totalPrice}</div>
          </div>

          <button 
            onClick={checkOut}
            className="w-full mt-10 py-5 bg-[#8B19FF] text-white text-xl md:text-3xl font-bold rounded-full shadow-2xl shadow-purple-200 hover:bg-[#7a16e0] active:scale-[0.97] transition-all"
          >
            Proceed To Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartItems;