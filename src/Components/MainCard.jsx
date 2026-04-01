import React from 'react';
import { toast } from 'react-toastify';

const MainCard = ({ card, carts, setCarts }) => {
   

    const isExist = carts.find( item => item.id === card.id)
    const handelBuyNow = () => {
        
        if (isExist){
            toast.error("item already added ")
            return;
        }
        setCarts([...carts, card])
        toast("Item added to Cart")
    }

    return (

        <div key={card.id} className="w-full bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-md transition">

            <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                    <span className="text-3xl">{card.icon}</span>
                </div>
                <span className="bg-orange-50 text-orange-400 text-sm font-semibold px-3 py-1 rounded-full">
                    {card.tag}
                </span>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {card.name}
            </h2>

            <p className="text-slate-500 text-sm mb-6">
                {card.description}
            </p>

            <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-slate-900">
                    ${card.price}
                </span>
                <span className="text-lg text-slate-400">
                    {card.period === "monthly" ? "/Mo" : ""}
                </span>
            </div>

            <ul className="space-y-3 mb-10">
                {card.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                        <span className="text-green-500 text-lg">✓</span>
                        {feature}
                    </li>
                ))}
            </ul>

            <button onClick={handelBuyNow} className="w-full py-3 bg-[#8B19FF] text-white rounded-full font-bold hover:bg-[#420e8a] transition">
                {isExist ? "Already Added To cart" : "Buy Now"}
            </button>

        </div>

    );
};

export default MainCard;