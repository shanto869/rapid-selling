import React, { useEffect, useState } from 'react';

const MyOrder = () => {
    const [orders, setOrders] = useState([])
    console.log(orders)

    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div className=''>
            <h4 className='text-2xl my-5 text-center'>My Orders</h4>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders?.map((order, i) => <tr key={order?._id} className="hover">
                                <th>{i + 1}</th>
                                <th>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={order?.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </th>
                                <td className='para-font'>{order?.productName}</td>
                                <td className='heading-font'>{order?.price}</td>
                                <td>
                                    <button className="btn btn-xs btn-outline">Pay</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;