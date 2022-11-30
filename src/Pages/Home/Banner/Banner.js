import React from 'react';
import useTitle from '../../../Hooks/UseTitle';
import './Banner.css'

const Banner = () => {
    useTitle("Home")


    return (
        <div className='mb-10'>
            <div className="banner-bg text-white">
                <div className='pl-20 pt-24'>
                    <h1 className='text-6xl heading-font'>Wellcome to  <br />
                        Rapid Selling!!
                    </h1>
                    <p className='pt-10 text-xl para-font'>We are selling second hand TV. You can buy and you can sell your Tv by your our website.</p>

                    <div>
                        <button className="btn btn-outline border-white border-2 rounded-3xl hover:bg-white text-white hover:text-black px-8 mt-5 mr-8 btn-font">Know More</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;