import React from 'react';

const CreatingAccounts = () => {
    return (
        <div>
            <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 w-[90%] lg:w-[80%] mx-auto font-sans">

                <div className="text-center mb-10 sm:mb-14 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-3 sm:mb-4">
                        Get Started In 3 Steps
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base lg:text-lg max-w-xl mx-auto">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

                    <div className="relative bg-white p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition">
                        <span className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#7F2BFF] text-white text-[10px] sm:text-xs font-bold w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full">
                            01
                        </span>
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-50 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                            <img
                                src="https://i.ibb.co.com/8gxZdz2w/user.png"
                                alt="user"
                                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                            />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#1a1a1a] mb-2 sm:mb-3">
                            Create Account
                        </h3>
                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                            Sign up for free in seconds. No credit card required to get started.
                        </p>
                    </div>

                    <div className="relative bg-white p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition">
                        <span className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#7F2BFF] text-white text-[10px] sm:text-xs font-bold w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full">
                            02
                        </span>
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-50 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                            <img
                                src="https://i.ibb.co.com/cpy4J5T/package.png"
                                alt="Products"
                                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                            />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#1a1a1a] mb-2 sm:mb-3">
                            Choose Products
                        </h3>
                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                            Browse our catalog and select the tools that fit your needs.
                        </p>
                    </div>

                    <div className="relative bg-white p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition">
                        <span className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#7F2BFF] text-white text-[10px] sm:text-xs font-bold w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full">
                            03
                        </span>
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-50 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                            <img
                                src="https://i.ibb.co.com/0RnXX7bc/rocket.png"
                                alt="rocket"
                                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                            />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#1a1a1a] mb-2 sm:mb-3">
                            Start Creating
                        </h3>
                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                            Download and start using your premium tools immediately.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default CreatingAccounts;