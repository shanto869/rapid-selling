import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ category }) => {
    console.log(category)
    const { categoryImage, price, name, ratings, description, _id } = category;

    return (
        <div className='shadow-md rounded-lg my-5'>
            <div className='p-2'>
                <img src={categoryImage} className='rounded-lg cursor-pointer ' alt="" />
                {/* <PhotoProvider>
                    <PhotoView src={picture} className='w-full' style={{ objectFit: 'cover' }}>
                        <img src={picture} className='rounded-lg cursor-pointer ' alt="" />
                    </PhotoView>
                </PhotoProvider> */}

                <div className='py-4 mx-4'>
                    <h3 className='heading-font text-xl font-bold'>{name}</h3>
                    <p className='para-font'>{description?.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                    <Link to={`/service/${_id}`}>
                        <button className='btn w-full border-2 bg-white text-black border-[black]
                 hover:bg-slate-700 hover:text-white btn-font my-3'>View All Products</button>
                    </Link>
                    <hr />
                    <span className='flex justify-between mt-2'>
                        <strong className='title-font font-bold'>Price: ${price}</strong>
                        {/* <small>
                            {
                                ratings?.map(rating => <FaStar key={rating} className='inline mx-0.5 text-warning'></FaStar>)
                            }
                        </small> */}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Product;