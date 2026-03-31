import React from 'react';

const Workflow = () => {
    return (
        <section className="bg-[#7F2BFF] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 text-center">
            <div className="max-w-4xl mx-auto">

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    Ready To Transform Your Workflow?
                </h2>

                <p className="text-purple-100 text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
                    Join thousands of professionals who are already using Digitools to work smarter.
                    Start your free trial today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">

                    <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-white text-[#7F2BFF] rounded-full font-bold hover:bg-gray-100 transition">
                        Explore Products
                    </button>

                    <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-transparent border border-white text-white rounded-full font-bold hover:bg-white hover:text-[#7F2BFF] transition">
                        View Pricing
                    </button>

                </div>

                <p className="text-purple-200 text-xs sm:text-sm opacity-80">
                    14-day free trial • No credit card required • Cancel anytime
                </p>

            </div>
        </section>
    );
};

export default Workflow;