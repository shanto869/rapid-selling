import React from 'react';
import { Link } from 'react-router-dom';

const MyWishlist = () => {


    return (
        <div className=''>
            <h4 className='text-2xl my-5'>My Appointment</h4>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* {
                bookings.map((booking, i) => <tr key={booking._id} className="hover">
                    <th>{i + 1}</th>
                    <th>{booking.patient}</th>
                    <td>{booking.treatment}</td>
                    <td>{booking.appointmentDate}</td>
                    <td>{booking.slot}</td>
                </tr>)
            } */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyWishlist;