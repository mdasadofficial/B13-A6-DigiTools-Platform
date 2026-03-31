import React from 'react';

const Pricing = () => {
    return (
        <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 font-sans">

            <div className="text-center mb-10 sm:mb-14 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-3 sm:mb-4">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">

                <div className="bg-[#d2b7ff] p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Starter</h3>
                    <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">Perfect for getting started</p>
                    <div className="mb-6 sm:mb-8">
                        <span className="text-3xl sm:text-4xl font-bold">$0</span>
                        <span className=" text-gray-500 text-sm sm:text-base">/Month</span>
                    </div>
                    <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-grow">
                        <li className="flex items-center gap-2 sm:gap-3 text-gray-600 text-xs sm:text-sm italic">
                            <span className="text-green-500">✓</span> Access to 10 free tools
                        </li>
                        <li className="flex items-center gap-2 sm:gap-3 text-gray-600 text-xs sm:text-sm italic">
                            <span className="text-green-500">✓</span> Basic templates
                        </li>
                        <li className="flex items-center gap-2 sm:gap-3 text-gray-600 text-xs sm:text-sm italic">
                            <span className="text-green-500">✓</span> Community support
                        </li>
                        <li className="flex items-center gap-2 sm:gap-3 text-gray-600 text-xs sm:text-sm italic">
                            <span className="text-green-500">✓</span> 1 project per month
                        </li>
                    </ul>
                    <button className="w-full py-2.5 sm:py-3 text-sm sm:text-base bg-[#7F2BFF] text-white rounded-full font-semibold hover:bg-[#6a24d6] transition">
                        Get Started Free
                    </button>
                </div>

                <div className="relative bg-[#7F2BFF] p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-xl flex flex-col h-full sm:col-span-2 lg:col-span-1 lg:scale-105 z-10">
                    <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-orange-100 text-orange-600 text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 rounded-full border border-orange-200">
                        Most Popular
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Pro</h3>
                    <p className="text-purple-100 text-xs sm:text-sm mb-4 sm:mb-6 opacity-80">Best for professionals</p>
                    <div className="mb-6 sm:mb-8 text-white">
                        <span className="text-3xl sm:text-4xl font-bold">$29</span>
                        <span className="text-purple-200 text-sm sm:text-base opacity-70">/Month</span>
                    </div>
                    <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-grow">
                        <li className="flex items-center gap-2 sm:gap-3 text-white text-xs sm:text-sm">
                            <span className="opacity-80">✓</span> Access to all premium tools
                        </li>
                        <li className="flex items-center gap-2 sm:gap-3 text-white text-xs sm:text-sm">
                            <span className="opacity-80">✓</span> Unlimited templates
                        </li>
                        <li className="flex items-center gap-2 sm:gap-3 text-white text-xs sm:text-sm">
                            <span className="opacity-80">✓</span> Priority support
                        </li>
                        <li className="flex items-center gap-2 sm:gap-3 text-white text-xs sm:text-sm">
                            <span className="opacity-80">✓</span> Unlimited projects
                        </li>
                        <li className="flex items-center gap-2 sm:gap-3 text-white text-xs sm:text-sm">
                            <span className="opacity-80">✓</span> Cloud sync
                        </li>
                        <li className="flex items-center gap-2 sm:gap-3 text-white text-xs sm:text-sm">
                            <span className="opacity-80">✓</span> Advanced analytics
                        </li>
                    </ul>
                    <button className="w-full py-2.5 sm:py-3 text-sm sm:text-base bg-white text-[#7F2BFF] rounded-full font-bold hover:bg-gray-100 transition">
                        Start Pro Trial
                    </button>
                </div>

                <div className=" bg-[#d2b7ff] p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Enterprise</h3>
                    <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">For teams and businesses</p>
                    <div className="mb-6 sm:mb-8">
                        <span className="text-3xl sm:text-4xl font-bold">$99</span>
                        <span className="text-gray-500 text-sm sm:text-base">/Month</span>
                    </div>
                    <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-grow">
                        <li className="flex items-center gap-2 sm:gap-3 text-gray-600 text-xs sm:text-sm italic">
                            <span className="text-green-500">✓</span> Everything in Pro
                        </li>
                        <li className="flex items-center gap-2 sm:gap-3 text-gray-600 text-xs sm:text-sm italic">
                            <span className="text-green-500">✓</span> Team collaboration
                        </li>
                        <li className="flex items-center gap-2 sm:gap-3 text-gray-600 text-xs sm:text-sm italic">
                            <span className="text-green-500">✓</span> Custom integrations
                        </li>
                        <li className="flex items-center gap-2 sm:gap-3 text-gray-600 text-xs sm:text-sm italic">
                            <span className="text-green-500">✓</span> Dedicated support
                        </li>
                        <li className="flex items-center gap-2 sm:gap-3 text-gray-600 text-xs sm:text-sm italic">
                            <span className="text-green-500">✓</span> SLA guarantee
                        </li>
                        <li className="flex items-center gap-2 sm:gap-3 text-gray-600 text-xs sm:text-sm italic">
                            <span className="text-green-500">✓</span> Custom branding
                        </li>
                    </ul>
                    <button className="w-full py-2.5 sm:py-3 text-sm sm:text-base bg-[#7F2BFF] text-white rounded-full font-semibold hover:bg-[#6a24d6] transition">
                        Contact Sales
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Pricing;