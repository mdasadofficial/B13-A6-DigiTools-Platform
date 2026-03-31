import React from 'react';

const Hero = () => {
    return (
        <div className="py-10">
            <section className="bg-white w-[90%] lg:w-[80%] mx-auto flex items-center px-4 sm:px-6 md:px-10 lg:px-20 font-sans py-10 sm:py-14 lg:py-20">
                <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">

                    <div className="flex-1 space-y-5 sm:space-y-6 text-center lg:text-left">

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 border border-purple-100">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                            </span>
                            <span className="text-xs sm:text-sm font-medium">
                                New: AI-Powered Tools Available
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#2D3142] leading-tight">
                            Supercharge Your <br className="hidden sm:block" />
                            Digital Workflow
                        </h1>

                        <p className="text-sm sm:text-base lg:text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.
                        </p>

                        <a href="#" className="block text-sm sm:text-base text-slate-400 hover:text-purple-600 transition">
                            Explore Products
                        </a>

                        <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4 pt-3">

                            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#7F2BFF] text-white rounded-full font-semibold hover:bg-[#6a24d6] transition shadow-lg shadow-purple-200 text-sm sm:text-base">
                                Explore Products
                            </button>

                            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-white border border-purple-300 text-[#7F2BFF] rounded-full font-semibold hover:bg-purple-50 transition text-sm sm:text-base">
                                <div className="w-5 h-5 border-2 border-[#7F2BFF] rounded-sm flex items-center justify-center">
                                    <span className="text-[10px] ml-0.5">▶</span>
                                </div>
                                Watch Demo
                            </button>

                        </div>
                    </div>

                    <div className="flex-1 relative w-full">
                        <div className="relative z-10 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                            <img
                                src="https://i.ibb.co.com/G1bbwKg/banner.png"
                                alt="Digital Workflow AI"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-40 sm:w-56 lg:w-64 h-40 sm:h-56 lg:h-64 bg-purple-100 rounded-full blur-3xl opacity-50 -z-10"></div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Hero;