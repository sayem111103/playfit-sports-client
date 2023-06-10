import React from 'react';
import LazyLoad from 'react-lazy-load';

const InstructorCard = ({data,allInstructor}) => {
    return (
        <div className={`${allInstructor?'card':''} w-96 glass`}>
                <figure><LazyLoad className="w-full"><img className="h-[300px] w-full rounded" src={data?.image} alt={data?.image} /></LazyLoad></figure>
                {allInstructor?<div className="card-body">
                    <h2 className="card-title font-bold">{data?.instructor?.name}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Instructor Details</button>
                    </div>
                </div>:''}
            </div>
    );
};

export default InstructorCard;