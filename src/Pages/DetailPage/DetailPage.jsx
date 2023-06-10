import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailPage = () => {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <div className="hero h-[100vh] bg-center object-contain bg-fixed" style={{ backgroundImage: `url(${data?.image})` }}>
            <div className="hero-overlay bg-opacity-60"></div>            
            <div className="hero-content text-neutral-content">
                <div>
                    <h2 className='text-4xl font-bold text-white mb-8 uppercase'>Instractor Detail</h2>
                <h3 className='font-medium text-lg'>Name : {data?.instructor?.name}</h3>
                <h3 className='font-medium text-lg'>Email : {data?.instructor?.email}</h3>
                <h3 className='font-medium text-lg'>Class : {data?.className}</h3>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;