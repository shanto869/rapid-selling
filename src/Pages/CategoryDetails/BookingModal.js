import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const BookingModal = ({ product }) => {
    const { user } = useContext(AuthContext)
    const { purchase_date, category_id, condition, description, image, location, originalPrice, phone, price, productName, years_of_use, _id } = product;
    // console.log(product)


    const handleBooking = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        // const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;
        // console.log(date, name, slot, email, phone)

        const booking = {
            userName: name,
            email,
            price,
            phone,
            location,
            image,
            productName
        }
        console.log(booking)

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.acknowledged) {
                    form.reset()
                    toast.success('Booking Confirmed')
                }
                else {
                    toast.error(data.message)
                }
            })


    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg my-0">{productName}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-2'>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled className="input input-bordered w-full" />

                        <input name='email' type="text" defaultValue={user?.email} disabled className="input input-bordered w-full" />
                        <input name='price' type="text" defaultValue={`Price: ${price} BDT`} disabled placeholder="Email Address" className="input input-bordered w-full" />
                        <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='location' type="text" placeholder="Your Location" className="input input-bordered w-full" />

                        <button type="submit">
                            <label htmlFor="booking-modal" className='btn btn-outline w-full'>Submit</label>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;