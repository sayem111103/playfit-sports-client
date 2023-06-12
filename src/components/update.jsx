import React, { useState } from 'react';
import useAuth from '../Hooks/useAuth';
import useSecure from '../Hooks/useSecure';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useClasses from '../Hooks/useClasses';

const Update = () => {
    const [error, setError] = useState('')
    const [, refetch] = useClasses();
    const navigate = useNavigate();
    const { user } = useAuth();
    const data = useLoaderData();
    const [secure] = useSecure();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    // console.log(data);
    const onSubmit = datas => {
        setError('')
        if (parseFloat(datas.totalSeat) < parseFloat(datas.availableSeats)) {
            return setError("Available seat can't be greater than Total seat");
        }
        const classes = datas;
        secure.patch(`/myclasses/${data._id}`, classes)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()                    
                    Swal.fire(
                        'Updated!',
                        'Your Class has been Updated.',
                        'success'
                    )
                    navigate('/myclasses')
                }
            })

    };
    return (
        <div className="w-9/12 mx-auto pt-10">
            <form className='text-black' onSubmit={handleSubmit(onSubmit)}>
                {error ? <p className="text-red-500 text-center py-3">{error}</p> : ''}
                {/* register your input into the hook by invoking the "register" function */}
                <h2 className='text-center mb-6 font-extrabold text-4xl uppercase'>Update Class</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Name*</span>
                    </label>
                    <input type="text" defaultValue={data?.name} className="input bg-white input-bordered bg-transparent"  {...register("name", { required: true })} />
                </div>
                {errors.name && <span className="text-red-500">This field is required*</span>}

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor Name*</span>
                    </label>
                    <input type="text" defaultValue={data?.instructor} className="input bg-white input-bordered bg-transparent"  {...register("instructor", { required: true })} />
                </div>
                {errors.instructor && <span className="text-red-500">This field is required*</span>}

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Seats*</span>
                    </label>
                    <input type="number" defaultValue={data?.availableSeats} className="input bg-white input-bordered bg-transparent"  {...register("availableSeats", { required: true, min: 1, max: 100 })} />
                </div>
                {errors.availableSeats && <span className="text-red-500">This field is required*</span>}
                {errors.availableSeats?.type === 'min' && <span className="text-red-500">Please Provide Valid Number*</span>}
                {errors.availableSeats?.type === 'max' && <span className="text-red-500">Please Provide Valid Number*</span>}

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Total Seats*</span>
                    </label>
                    <input type="number" defaultValue={data?.totalSeat} className="input bg-white input-bordered bg-transparent"  {...register("totalSeat", { required: true, min: 1, max: 100 })} />
                </div>
                {errors.totalSeat && <span className="text-red-500">This field is required*</span>}
                {errors.totalSeat?.type === 'min' && <span className="text-red-500">Please Provide Valid Number*</span>}
                {errors.totalSeat?.type === 'max' && <span className="text-red-500">Please Provide Valid Number*</span>}

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price*</span>
                    </label>
                    <input type="number" defaultValue={data?.price} className="input bg-white input-bordered bg-transparent"  {...register("price", { required: true, min: 1, max: 100 })} />
                </div>
                {errors.price && <span className="text-red-500">This field is required*</span>}
                {errors.price?.type === 'min' && <span className="text-red-500">Please Provide Valid Number*</span>}
                {errors.price?.type === 'max' && <span className="text-red-500">Please Provide Valid Number*</span>}


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor Email*</span>
                    </label>
                    <input type="email" value={user.email} className="input bg-white input-bordered bg-transparent"  {...register("instructorEmail", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
                </div>
                {errors.instructorEmail && <span className="text-red-500">This field is required*</span>}
                {errors.instructorEmail?.type === 'pattern' && <span className="text-red-500">Please type valid email*</span>}

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo*</span>
                    </label>
                    <input type="url" defaultValue={data?.image} className="input bg-white input-bordered bg-transparent"  {...register("image", { required: true })} />
                </div>
                {errors.image && <span className="text-red-500">This field is required*</span>}


                <input className="btn btn-success my-3 text-white mx-auto block" type="submit" value={'Update Class'} />
            </form>
        </div>
    );
};

export default Update;