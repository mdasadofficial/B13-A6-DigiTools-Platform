import React from 'react';

const CartItems = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
  const checkOut = () => {
    setCarts([])
  }

  return (
    <div className="p-10 bg-transparent text-center w-[80%] mx-auto ">
      <h1 className='text-2xl text-blue-600 font-bold py-4 px-4'>Your Carts</h1>
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
                  onClick={() => onRemove(item.id)}
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

    </div>
  );
};

export default CartItems;  