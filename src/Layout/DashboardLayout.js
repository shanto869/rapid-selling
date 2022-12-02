import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className=''>
                <div className="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col md:mx-11">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>

                        <Outlet></Outlet>

                    </div>
                    <div className="drawer-side ">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-[#1e293b] text-[#b2dd4c] nav-font text-xl">
                            {/* <!-- Sidebar content here --> */}
                            <li><Link to='/dashboard/order'>My Order</Link></li>
                            <li><Link to='/dashboard/wishlist'>My Wishlist</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;