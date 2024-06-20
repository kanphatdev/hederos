"use client";
import { Box, CreditCard, FileText, LayoutDashboard, LineChart, Menu, ShoppingBag, UsersRound, X } from 'lucide-react';
import React, { useState } from 'react';
import Nav from './Nav';
interface DrawerProps{
    children: React.ReactNode;
}
const Drawer= ({children}:DrawerProps) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className="relative h-screen ">
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
            <div className={` transition-all duration-300 ${isDrawerOpen ? 'ml-64' : 'ml-0'}`}>
                <Nav>
                <button className="btn btn-ghost" onClick={toggleDrawer}>
                <Menu />
                </button>
                </Nav>
              
                <div className="mt-4 w-screen">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Drawer;
