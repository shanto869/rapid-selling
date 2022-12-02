import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
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
        <div className=''>

        </div>
    );
};

export default Dashboard;