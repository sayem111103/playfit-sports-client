import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const InstructorCard = ({data,allInstructor}) => {
    return (
        <div className={`${allInstructor?'card':''} w-96 glass`}>
                <figure><LazyLoad className="w-full"><img className="h-[300px] w-full rounded" src={data?.image} alt={data?.image} /></LazyLoad></figure>
                {allInstructor?<div className="card-body">
                    <h2 className="card-title font-bold">{data?.instructor?.name}</h2>
                    <div className="card-actions justify-end">
                        <Link to={`/detailpage/${data._id}`}><button className="btn btn-primary">Instructor Details</button></Link>
                    </div>
                </div>:''}
            </div>
    );
};

export default InstructorCard;