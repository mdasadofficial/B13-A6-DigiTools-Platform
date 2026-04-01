import React from 'react';

const CartItems = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
  const checkOut = () => {
    setCarts([])
  };


  const onRemove = (item) =>{
    const lastItems = carts.filter(removed => removed.id !== item.id )
    setCarts(lastItems)
  }

  return (
    <div className="p-10 bg-transparent text-center w-[80%] mx-auto ">
      <h1 className='text-2xl text-blue-600 font-bold py-4 px-4'>Your Carts</h1>

      {
        carts.length === 0 ?
          <div className='text-gray-400 flex flex-col items-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="text-xl font-medium">Your cart is empty</p>
          </div> :
          <>
            <div>
              {
                carts.map(item =>
                  <div key={item.id}>

                    <div className="flex items-center justify-between bg-gray-50/50 border border-gray-100 rounded-2xl p-4 mb-4 transition-all hover:shadow-sm">
                      <div className="flex items-center gap-4">

                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm">
                          {item.icon}
                        </div>


                        <div className="text-left">
                          <h4 className="text-lg font-bold text-slate-900">{item.name}</h4>
                          <p className="text-slate-500 font-medium">${item.price} /monthly</p>
                        </div>
                      </div>


                      <button
                        onClick={() => onRemove(item)}
                        className="text-pink-500 font-semibold hover:text-pink-600 transition-colors px-4 py-2"
                      >
                        Remove
                      </button>
                    </div>

                  </div>
                )
              }
            </div>

            <div className='flex justify-between bg-white shadow-sm font-bold text-blue-500 p-5 mt-5 rounded-lg text-3xl '>
              <div>Total</div>
              <div>$ {totalPrice}</div>
            </div>

            <button onClick={checkOut}
              className="w-full mt-10 py-4 bg-[#8B19FF] text-white text-3xl font-bold rounded-full shadow-lg shadow-purple-100 hover:bg-[#7a16e0] active:scale-[0.98] transition-all">
              Proceed To Checkout
            </button>
          </>
      }



    </div>
  );
  };

  export default CartItems;  