import React from 'react';

const CounterSection = () => {
    return (
        <section className="bg-[#7F2BFF] py-14 sm:py-16 px-4 sm:px-6 lg:px-10 w-full">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-evenly gap-8 sm:gap-0">

                <div className="text-center text-white flex-1">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-1 sm:mb-2">50K+</h2>
                    <p className="text-purple-100 text-base sm:text-lg opacity-90">Active Users</p>
                </div>

                <div className="hidden sm:block h-16 w-[1px] bg-white opacity-30"></div>

                <div className="text-center text-white flex-1">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-1 sm:mb-2">200+</h2>
                    <p className="text-purple-100 text-base sm:text-lg opacity-90">Premium Tools</p>
                </div>

                <div className="hidden sm:block h-16 w-[1px] bg-white opacity-30"></div>

                <div className="text-center text-white flex-1">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-1 sm:mb-2">4.9</h2>
                    <p className="text-purple-100 text-base sm:text-lg opacity-90">Rating</p>
                </div>

            </div>
        </section>
    );
};

export default CounterSection;