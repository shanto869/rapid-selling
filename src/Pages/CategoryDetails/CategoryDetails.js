import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const CategoryDetails = () => {
    const products = useLoaderData();
    // console.log(products)

    return (
        <div className='mx-10 my-10'>
            <h2 className='text-4xl my-5 heading-font font-bold text-center'>Welcome This Categories</h2>

            <div className='my-6 grid grid-cols-1 gap-5'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default CategoryDetails;