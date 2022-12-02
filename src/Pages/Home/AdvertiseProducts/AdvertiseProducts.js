import React, { useEffect, useState } from 'react';

const AdvertiseProducts = () => {
    const [advertiseProducts, setAdvertiseProducts] = useState([])
    console.log(advertiseProducts)

    useEffect(() => {
        fetch(`https://rapid-reselling-server.vercel.app/advertise_products`)
            .then(res => res.json())
            .then(data => setAdvertiseProducts(data))
    }, [])

    return (
        <section className='py-10 mx-5'>
            <h3 className='text-4xl my-5 heading-font font-bold text-center'>Advertise Products</h3>

            <div className='grid grid-cols-1 md:grid-cols-3 mx-10 gap-8'>
                {
                    advertiseProducts.map(product => <>
                        <div className='shadow-md rounded-lg my-5'>
                            <div className='p-2'>
                                <img src={product.categoryImage} className='rounded-lg cursor-pointer ' alt="" />

                                <div className='py-4 mx-4'>
                                    <h3 className='heading-font text-xl font-bold'>{product.name}</h3>

                                    <span className='flex justify-between mt-2'>
                                        <strong className='title-font font-bold'>Price: {product.price} BDT</strong>
                                    </span>
                                    <hr />
                                    <h4 className='text-2xl text-right para-font text-[#282664] font-bold'>Advertised</h4>
                                </div>
                            </div>
                        </div>

                    </>)
                }
            </div>
        </section>
    );
};

export default AdvertiseProducts;