import React, { useEffect, useState } from 'react';

const Cards = ({ dataPromise }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        dataPromise.then(data => setCards(data));
    }, [dataPromise]);
  
        const [activeTab, setActiveTab] = useState('products');
        return (
            <section className="bg-white py-20 px-6">
                <div className="max-w-7xl mx-auto text-center">

                    <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
                        Premium Digital Tools
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        Choose from our curated collection of premium digital products designed
                        to boost your productivity and creativity.
                    </p>

                    <div className="inline-flex bg-gray-50 p-2 rounded-full border border-gray-100 mb-16">
                        <button
                            onClick={() => setActiveTab('products')}
                            className={`px-8 py-3 rounded-full font-bold shadow-lg transition-all ${activeTab === 'products'
                                    ? 'bg-[#7F2BFF] text-white shadow-purple-200'
                                    : 'bg-transparent text-gray-500 hover:text-[#7F2BFF]'
                                }`}
                        >
                            Products
                        </button>

                        <button
                            onClick={() => setActiveTab('cart')}
                            className={`px-8 py-3 rounded-full font-bold shadow-lg transition-all ${activeTab === 'cart'
                                    ? 'bg-[#7F2BFF] text-white shadow-purple-200'
                                    : 'bg-transparent text-gray-500 hover:text-[#7F2BFF]'
                                }`}
                        >
                            Cart (0)
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-10 py-10 bg-gray-50">
                    {cards.map((card) => (
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

                            <button className="w-full py-3 bg-[#8B19FF] text-white rounded-full font-bold hover:bg-[#7a16e0] transition">
                                Buy Now
                            </button>

                        </div>
                    ))}
                </div>
            </section>
        );
    };

    export default Cards;