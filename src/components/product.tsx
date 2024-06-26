import React from 'react';

const PopularSellingProductsTable: React.FC = () => {
    return (
        <div className="p-10">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-5">Popular Selling Products</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow">
                        <thead>
                            <tr className="w-full bg-slate-50 text-black">
                                <th className="py-3 px-5 text-left">Product</th>
                                <th className="py-3 px-5 text-left">Category</th>
                                <th className="py-3 px-5 text-left">Price</th>
                                <th className="py-3 px-5 text-left">Sales</th>
                                <th className="py-3 px-5 text-left">Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="py-3 px-5">Wireless Headphones</td>
                                <td className="py-3 px-5">Electronics</td>
                                <td className="py-3 px-5">$99.99</td>
                                <td className="py-3 px-5">1500</td>
                                <td className="py-3 px-5">4.5</td>
                            </tr>
                            <tr className="bg-gray-50 border-b">
                                <td className="py-3 px-5">Smart Watch</td>
                                <td className="py-3 px-5">Wearables</td>
                                <td className="py-3 px-5">$199.99</td>
                                <td className="py-3 px-5">1200</td>
                                <td className="py-3 px-5">4.7</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-3 px-5">Running Shoes</td>
                                <td className="py-3 px-5">Sports</td>
                                <td className="py-3 px-5">$79.99</td>
                                <td className="py-3 px-5">800</td>
                                <td className="py-3 px-5">4.3</td>
                            </tr>
                            <tr className="bg-gray-50 border-b">
                                <td className="py-3 px-5">Bluetooth Speaker</td>
                                <td className="py-3 px-5">Electronics</td>
                                <td className="py-3 px-5">$49.99</td>
                                <td className="py-3 px-5">1100</td>
                                <td className="py-3 px-5">4.6</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-3 px-5">Fitness Tracker</td>
                                <td className="py-3 px-5">Wearables</td>
                                <td className="py-3 px-5">$69.99</td>
                                <td className="py-3 px-5">900</td>
                                <td className="py-3 px-5">4.4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PopularSellingProductsTable;
