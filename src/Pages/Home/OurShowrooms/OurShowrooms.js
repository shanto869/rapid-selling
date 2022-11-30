import React from 'react';

const OurShowrooms = () => {


    return (
        <section className='mx-10 my-10'>
            <div className='text-center mb-4'>
                <h2 className='text-4xl my-5 heading-font font-bold'>Our Showrooms</h2>
                <p className='my-5 text-slate-500 para-font'>In Bangladesh there are our there showrooms. You can buy secondhand smart TV face to face in our showrooms.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='text-center pb-10 bg-slate-800 text-white rounded-lg'>
                    <img src="https://i.pinimg.com/originals/38/5d/f0/385df0c8bc714194635450c93a03e970.jpg" className='rounded-lg cursor-pointer ' alt="" />

                    <h4 className='text-xl text-[#b2dd4c] font-bold my-5'>Cumilla Showroom</h4>
                    <h2 className='mx-2'>12/15 notun Bazar, Gulshan 2, Bharidara, Cumilla 1212</h2>
                </div>
                <div className='text-center pb-10 bg-slate-800 text-white rounded-lg'>
                    <img src="https://www.gizmochina.com/wp-content/uploads/2022/07/Chinese-televisions-in-Russia.jpg" className='rounded-lg cursor-pointer ' alt="" />
                    <h4 className='text-xl text-[#b2dd4c] font-bold my-5'>Chittagong Showroom</h4>
                    <h2 className='mx-2'>11/45 baitul Mukkrarrom Mosque, Chittagong 1225</h2>
                </div>
                <div className='text-center pb-10 bg-slate-800 text-white rounded-lg'>

                    <img src="https://i.ytimg.com/vi/kQ_wYxrc2_o/maxresdefault.jpg" className='rounded-lg cursor-pointer ' alt="" />
                    <h4 className='text-xl text-[#b2dd4c] font-bold my-5'>Uttora Showroom</h4>
                    <h2 className='mx-2'>25/13 Jhoshim Uddin road, behind the Airport, Uttora, Dhaka 1325</h2>
                </div>
            </div>

        </section>
    );
};

export default OurShowrooms;