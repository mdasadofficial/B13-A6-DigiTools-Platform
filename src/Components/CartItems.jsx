import React from 'react';

const CartItems = ({ carts }) => {
  console.log(carts);

  return (
    <div className="p-10 bg-blue-500 text-center">
      <h1 className='text-2xl font-bold'>Your Carts</h1>
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
  );
};

export default CartItems;  