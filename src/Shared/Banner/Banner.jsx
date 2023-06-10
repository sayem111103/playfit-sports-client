import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({img,name}) => {
    return (
        <section className="hero h-[450px] bg-top" style={{backgroundImage: `url(${img})`}}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div>
                <h3 className='text-white font-extrabold text-4xl uppercase'>{name}</h3>
                <p className='text-xl'><Link className='hover:underline' to='/'>Home</Link> {'>'} {name} </p>
                </div>
            </div>
        </section>
    );
};

export default Banner;