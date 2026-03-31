import React, { useState } from 'react';

const Pricing = () => {
    const [active, setActive] = useState(2);

    return (
        <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 font-sans">

            <div className="text-center mb-10 sm:mb-14 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-3 sm:mb-4">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
                    Choose the plan that fits your needs.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

                <div
                    onClick={() => setActive(1)}
                    className={`relative p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl flex flex-col h-full cursor-pointer transition-all duration-300 ${
                        active === 1
                            ? "bg-[#7F2BFF] text-white shadow-xl lg:scale-105"
                            : "bg-[#d2b7ff] border border-gray-100 shadow-sm"
                    }`}
                >
                    {active === 1 && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-100 text-orange-600 text-xs font-bold px-4 py-1 rounded-full border border-orange-200">
                            Selected
                        </div>
                    )}

                    <h3 className="text-lg sm:text-xl font-bold">Starter</h3>
                    <p className={`${active === 1 ? "text-purple-100" : "text-gray-500"} text-sm mb-6`}>
                        Perfect for getting started
                    </p>

                    <div className="mb-8">
                        <span className="text-3xl font-bold">$0</span>
                        <span className={`${active === 1 ? "text-purple-200" : "text-gray-500"}`}>/Month</span>
                    </div>

                    <ul className="space-y-3 mb-10 flex-grow">
                        <li className={`${active === 1 ? "text-white" : "text-gray-600 italic"}`}>✓ Access to 10 free tools</li>
                        <li className={`${active === 1 ? "text-white" : "text-gray-600 italic"}`}>✓ Basic templates</li>
                        <li className={`${active === 1 ? "text-white" : "text-gray-600 italic"}`}>✓ Community support</li>
                        <li className={`${active === 1 ? "text-white" : "text-gray-600 italic"}`}>✓ 1 project per month</li>
                    </ul>

                    <button className={`w-full py-3 rounded-full font-semibold ${
                        active === 1 ? "bg-white text-[#7F2BFF]" : "bg-[#7F2BFF] text-white"
                    }`}>
                        Get Started Free
                    </button>
                </div>

                <div
                    onClick={() => setActive(2)}
                    className={`relative p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl flex flex-col h-full cursor-pointer transition-all duration-300 ${
                        active === 2
                            ? "bg-[#7F2BFF] text-white shadow-xl lg:scale-105"
                            : "bg-[#d2b7ff] border border-gray-100 shadow-sm"
                    }`}
                >
                    {active === 2 && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-100 text-orange-600 text-xs font-bold px-4 py-1 rounded-full border border-orange-200">
                            Selected
                        </div>
                    )}

                    <h3 className="text-lg sm:text-xl font-bold">Pro</h3>
                    <p className={`${active === 2 ? "text-purple-100" : "text-gray-500"} text-sm mb-6`}>
                        Best for professionals
                    </p>

                    <div className="mb-8">
                        <span className="text-3xl font-bold">$29</span>
                        <span className={`${active === 2 ? "text-purple-200" : "text-gray-500"}`}>/Month</span>
                    </div>

                    <ul className="space-y-3 mb-10 flex-grow">
                        <li className={`${active === 2 ? "text-white" : "text-gray-600 italic"}`}>✓ Access to all premium tools</li>
                        <li className={`${active === 2 ? "text-white" : "text-gray-600 italic"}`}>✓ Unlimited templates</li>
                        <li className={`${active === 2 ? "text-white" : "text-gray-600 italic"}`}>✓ Priority support</li>
                        <li className={`${active === 2 ? "text-white" : "text-gray-600 italic"}`}>✓ Unlimited projects</li>
                        <li className={`${active === 2 ? "text-white" : "text-gray-600 italic"}`}>✓ Cloud sync</li>
                        <li className={`${active === 2 ? "text-white" : "text-gray-600 italic"}`}>✓ Advanced analytics</li>
                    </ul>

                    <button className={`w-full py-3 rounded-full font-semibold ${
                        active === 2 ? "bg-white text-[#7F2BFF]" : "bg-[#7F2BFF] text-white"
                    }`}>
                        Start Pro Trial
                    </button>
                </div>

                <div
                    onClick={() => setActive(3)}
                    className={`relative p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl flex flex-col h-full cursor-pointer transition-all duration-300 ${
                        active === 3
                            ? "bg-[#7F2BFF] text-white shadow-xl lg:scale-105"
                            : "bg-[#d2b7ff] border border-gray-100 shadow-sm"
                    }`}
                >
                    {active === 3 && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-100 text-orange-600 text-xs font-bold px-4 py-1 rounded-full border border-orange-200">
                            Selected
                        </div>
                    )}

                    <h3 className="text-lg sm:text-xl font-bold">Enterprise</h3>
                    <p className={`${active === 3 ? "text-purple-100" : "text-gray-500"} text-sm mb-6`}>
                        For teams and businesses
                    </p>

                    <div className="mb-8">
                        <span className="text-3xl font-bold">$99</span>
                        <span className={`${active === 3 ? "text-purple-200" : "text-gray-500"}`}>/Month</span>
                    </div>

                    <ul className="space-y-3 mb-10 flex-grow">
                        <li className={`${active === 3 ? "text-white" : "text-gray-600 italic"}`}>✓ Everything in Pro</li>
                        <li className={`${active === 3 ? "text-white" : "text-gray-600 italic"}`}>✓ Team collaboration</li>
                        <li className={`${active === 3 ? "text-white" : "text-gray-600 italic"}`}>✓ Custom integrations</li>
                        <li className={`${active === 3 ? "text-white" : "text-gray-600 italic"}`}>✓ Dedicated support</li>
                        <li className={`${active === 3 ? "text-white" : "text-gray-600 italic"}`}>✓ SLA guarantee</li>
                        <li className={`${active === 3 ? "text-white" : "text-gray-600 italic"}`}>✓ Custom branding</li>
                    </ul>

                    <button className={`w-full py-3 rounded-full font-semibold ${
                        active === 3 ? "bg-white text-[#7F2BFF]" : "bg-[#7F2BFF] text-white"
                    }`}>
                        Contact Sales
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Pricing;