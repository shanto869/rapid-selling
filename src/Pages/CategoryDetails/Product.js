import React from 'react';

const Product = ({ product }) => {
    console.log(product)
    const { purchase_date, category_id, condition, description, image, location, originalPrice, phone, price, productName, years_of_use, _id } = product;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} className='rounded-lg' alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{productName}</h2>
                <div>
                    <p className='nav-font font-bold text-lg'>Resell Price: {price}</p>
                    <p className='nav-font font-bold text-lg'>Orginal Price:
                        <span class="line-through text-red-400"> ${originalPrice}</span>
                    </p>
                    <p className='nav-font font-bold text-lg'>Location: {location}</p>
                    <p className='nav-font font-bold text-lg'>Condition: {condition}</p>
                    <p className='nav-font font-bold text-lg'>Use of Time: {years_of_use}</p>
                    <p className='nav-font font-bold text-lg'>Seller Name: Shanto Biswas</p>
                    <p className='nav-font font-bold text-lg'>Phone: {phone}</p>
                    <p className='nav-font font-bold text-lg'>Posted Date: 2022/11/30 09:48:12</p>
                    <div className='flex items-center nav-font font-bold text-lg'>
                        <div class="w-5 h-5 bg-green-500 rounded-full"></div>
                        <p class="ml-3 text-green-500 font-bold">:Verified</p>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline border-black border-2 rounded-3xl hover:bg-slate-700 text-black hover:text-white px-10 mt-6 btn-font">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;