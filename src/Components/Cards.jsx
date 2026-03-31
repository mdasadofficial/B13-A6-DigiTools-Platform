import React, { use } from 'react';

const Cards = ({ dataPromise }) => {
    const cards = use(dataPromise);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-10 py-10 bg-gray-50">
            {cards.map((card) => (
                <div key={card.id} className="w-full bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow font-sans">

                    <div className="flex justify-between items-start mb-4 sm:mb-6">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-50 rounded-full flex items-center justify-center border border-gray-50">
                            <span className="text-2xl sm:text-3xl">{card.icon}</span>
                        </div>
                        <span className="bg-orange-50 text-orange-400 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
                            {card.tag}
                        </span>
                    </div>

                    <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 mb-3 sm:mb-4">
                        {card.name}
                    </h2>

                    <p className="text-slate-500 text-sm sm:text-[17px] leading-relaxed mb-4 sm:mb-6">
                        {card.description}
                    </p>

                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-3xl sm:text-4xl font-bold text-slate-900">
                            ${card.price}
                        </span>
                        <span className="text-sm sm:text-lg text-slate-400">
                            {card.period === "monthly" ? "/Mo" : ""}
                        </span>
                    </div>

                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-10">
                        {card.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 sm:gap-3 text-slate-600 text-sm sm:text-[17px]">
                                <span className="text-green-500 font-bold text-lg sm:text-xl">✓</span>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <button className="w-full py-3 sm:py-4 bg-[#8B19FF] text-white rounded-full text-base sm:text-lg font-bold hover:bg-[#7a16e0] transition-colors shadow-lg shadow-purple-100">
                        Buy Now
                    </button>

                </div>
            ))}
        </div>
    );
};

export default Cards;