import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0B1120] text-white py-12 px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">

                    <div className="sm:col-span-2">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">DigiTools</h2>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm">
                            Premium digital tools for creators, professionals, and businesses.
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 sm:mb-6">Product</h3>
                        <ul className="space-y-2 sm:space-y-4 text-gray-400 text-sm sm:text-base">
                            <li className="hover:text-white cursor-pointer transition">Features</li>
                            <li className="hover:text-white cursor-pointer transition">Pricing</li>
                            <li className="hover:text-white cursor-pointer transition">Templates</li>
                            <li className="hover:text-white cursor-pointer transition">Integrations</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 sm:mb-6">Company</h3>
                        <ul className="space-y-2 sm:space-y-4 text-gray-400 text-sm sm:text-base">
                            <li className="hover:text-white cursor-pointer transition">About</li>
                            <li className="hover:text-white cursor-pointer transition">Blog</li>
                            <li className="hover:text-white cursor-pointer transition">Careers</li>
                            <li className="hover:text-white cursor-pointer transition">Press</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 sm:mb-6">Resources</h3>
                        <ul className="space-y-2 sm:space-y-4 text-gray-400 text-sm sm:text-base">
                            <li className="hover:text-white cursor-pointer transition">Documentation</li>
                            <li className="hover:text-white cursor-pointer transition">Help Center</li>
                            <li className="hover:text-white cursor-pointer transition">Community</li>
                            <li className="hover:text-white cursor-pointer transition">Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Social Links</h3>
                        <div className="flex gap-3 sm:gap-4">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-purple-400 transition cursor-pointer">
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-purple-400 transition cursor-pointer">
                               <i class="fa-brands fa-facebook"></i>
                            </div>
                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-purple-400 transition cursor-pointer">
                               <i class="fa-brands fa-square-x-twitter"></i>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-3 text-gray-500 text-xs sm:text-sm text-center md:text-left">
                    <p>© 2026 DigiTools. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6">
                        <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer">Terms of Service</span>
                        <span className="hover:text-white cursor-pointer">Cookies</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;



