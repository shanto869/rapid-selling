import React from 'react';
import AdvertiseProducts from './AdvertiseProducts/AdvertiseProducts';
import Banner from './Banner/Banner';
import OurShowrooms from './OurShowrooms/OurShowrooms';
import ProductCategories from './ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
            <AdvertiseProducts></AdvertiseProducts>
            <OurShowrooms></OurShowrooms>
        </div>
    );
};

export default Home;