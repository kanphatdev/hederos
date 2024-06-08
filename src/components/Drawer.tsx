"use client";
import { Box, CreditCard, FileText, LayoutDashboard, LineChart, ShoppingBag, UsersRound, X } from 'lucide-react';
import React, { useState } from 'react';

const Drawer: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className="relative h-screen bg-purple-100">
            {/* Drawer */}
            <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transition-transform transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} z-40`}>
                <div className="p-4 flex justify-end">
                    <button className="mt-4 px-4 py-2 bg-transparent text-white rounded" onClick={toggleDrawer}>
                        <X className='text-black' />
                    </button>
                </div>
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4 text-center capitalize text-purple-500">hederos</h2>
                    <div className="border-t border-gray-300 my-4"></div> 
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className=" px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-500 flex items-center gap-3 capitalize">
                            dashboard     <LayoutDashboard /> 
                            </a>
                        </li>
                        <li>
                            <a href="#" className=" px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-500 flex items-center gap-3 capitalize">analytic <LineChart /></a>
                        </li>
                        <li>
                            <a href="#" className=" px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-500 flex items-center gap-3 capitalize">
                                product <Box />
                                
                            </a>
                        </li>
                        <li>
                            <a href="#" className=" px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-500 flex items-center  gap-3 capitalize">
                                customers <UsersRound />
                            </a>
                        </li>
                        <li>
                            <a href="#" className=" px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-500 flex items-center gap-3 capitalize">
                                payment <CreditCard />
                            </a>
                        </li>
                        <li>
                            <a href="#" className=" px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-500 flex items-center gap-3 capitalize">
                                order <ShoppingBag />
                            </a>
                        </li>
                        <li>
                            <a href="#" className=" px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-500 flex items-center gap-3 capitalize">
                                campaigns <FileText />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Main content */}
            <div className={`p-4 transition-all duration-300 ${isDrawerOpen ? 'ml-64' : 'ml-0'}`}>
                <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={toggleDrawer}>
                    Open Drawer
                </button>
                <p className="mt-4">Main content goes here.</p>
            </div>
        </div>
    );
};

export default Drawer;
