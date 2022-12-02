import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Dashboard = () => {
    // const { user } = useContext(AuthContext)

    // const url = `http://localhost:5000/booking?email=${user?.email}`

    // const { data: bookings = [] } = useQuery({
    //     queryKey: ['booking', user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(url, {
    //             headers: {
    //                 authorization: `bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         })
    //         const data = await res.json()
    //         return data;
    //     }
    // })

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <h4>page content here</h4>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><a>My Order</a></li>
                        <li><a>My Wishlist</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;