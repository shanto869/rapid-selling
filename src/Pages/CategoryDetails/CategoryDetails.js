import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryDetails = () => {
    const products = useLoaderData()
    console.log(products)

    return (
        <div>
            categories
        </div>
    );
};

export default CategoryDetails;