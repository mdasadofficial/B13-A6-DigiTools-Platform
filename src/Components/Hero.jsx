import React from 'react';

const Hero = () => {
    return (
        <section className="bg-white w-[80%] mx-auto flex items-center px-8 md:px-20 font-sans py-20px">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Left Content Side */}
                <div className="flex-1 space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 border border-purple-100">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                        </span>
                        <span className="text-sm font-medium">New: AI-Powered Tools Available</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl font-extrabold text-[#2D3142] leading-tight">
                        Supercharge Your <br />
                        Digital Workflow
                    </h1>

                    {/* Subtext */}
                    <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                    </p>

                    {/* Link Text */}
                    <a href="#" className="block text-slate-400 hover:text-purple-600 transition-colors">
                        Explore Products
                    </a>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="px-8 py-3 bg-[#7F2BFF] text-white rounded-full font-semibold hover:bg-[#6a24d6] transition-all shadow-lg shadow-purple-200">
                            Explore Products
                        </button>
                        <button className="flex items-center gap-2 px-8 py-3 bg-white border border-purple-300 text-[#7F2BFF] rounded-full font-semibold hover:bg-purple-50 transition-all">
                            <div className="w-5 h-5 border-2 border-[#7F2BFF] rounded-sm flex items-center justify-center">
                                <span className="text-[10px] ml-0.5">▶</span>
                            </div>
                            Watch Demo
                        </button>
                    </div>
                </div>

                {/* Right Image Side */}
                <div className="flex-1 relative">
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                        {/* Replace this src with your actual image path */}
                        <img
                            src="https://i.ibb.co.com/G1bbwKg/banner.png"
                            alt="Digital Workflow AI"
                            className="w-full h-auto object-cover" />
                    </div>
                    {/* Background Gradient Blur (Optional effect) */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-50 -z-10"></div>
                </div>

            </div>
        </section>
    );
};

export default Hero;