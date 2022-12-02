import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const ProductCategories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/productCategories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <section className='mx-5'>
            <div className='text-center'>
                <h2 className='text-4xl my-5 heading-font font-bold'>Choose Your Categories</h2>
                <p className='my-5 text-slate-500 para-font'>We provide 3 Categories for selling and buying TV.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 mx-10 gap-8'>
                {
                    categories.map(category => <Product key={category.id} category={category}></Product>)
                }
            </div>
            {/* <div className='w-full text-center'>
                <Link to='/services'>
                    <button className="btn btn-outline border-black border-2 rounded-3xl hover:bg-slate-700 text-black hover:text-white px-10 mt-6 btn-font">See All</button>
                </Link>
            </div> */}
        </section>
    );
};

export default ProductCategories;