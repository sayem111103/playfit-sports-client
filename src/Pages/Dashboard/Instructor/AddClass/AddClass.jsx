import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";
import useSecure from "../../../../Hooks/useSecure";
import Swal from "sweetalert2";

const AddClass = () => {
    const {user} = useAuth();
    const [secure] = useSecure();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();


    const onSubmit = data => {
       data.status = 'pending'
       const classes = data;
       secure.post('/classes', classes)
       .then(res => {
        if(res.data.insertedId){
            Swal.fire(
                'Added!',
                'Your Class has been Added For Review.',
                'success'
            )
        }
       })

    };
    return (
        <div className="w-9/12 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-2xl font-extrabold text-center py-3">Add a Class</h2>
                    {/* register your input into the hook by invoking the "register" function */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Name*</span>
                        </label>
                        <input type="text" placeholder="Your Name" className="input bg-white input-bordered bg-transparent"  {...register("name", { required: true })} />
                    </div>
                    {errors.name && <span className="text-red-500">This field is required*</span>}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Name*</span>
                        </label>
                        <input type="text" defaultValue={user?.name || 'N/A'} className="input bg-white input-bordered bg-transparent"  {...register("instructor", { required: true })} />
                    </div>
                    {errors.instructor && <span className="text-red-500">This field is required*</span>}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Seats*</span>
                        </label>
                        <input type="number" placeholder="0" className="input bg-white input-bordered bg-transparent"  {...register("availableSeats", { required: true, min:1, max:100 })} />
                    </div>
                    {errors.availableSeats && <span className="text-red-500">This field is required*</span>}
                    {errors.availableSeats?.type === 'min' && <span className="text-red-500">Please Provide Valid Number*</span>}
                    {errors.availableSeats?.type === 'max' && <span className="text-red-500">Please Provide Valid Number*</span>}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Total Seats*</span>
                        </label>
                        <input type="number" placeholder="0" className="input bg-white input-bordered bg-transparent"  {...register("totalSeat", { required: true, min:1, max:100 })} />
                    </div>
                    {errors.totalSeat && <span className="text-red-500">This field is required*</span>}
                    {errors.totalSeat?.type === 'min' && <span className="text-red-500">Please Provide Valid Number*</span>}
                    {errors.totalSeat?.type === 'max' && <span className="text-red-500">Please Provide Valid Number*</span>}

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
                        <input type="url" placeholder="Photo url" className="input bg-white input-bordered bg-transparent"  {...register("image", { required: true })} />
                    </div>
                    {errors.image && <span className="text-red-500">This field is required*</span>}


                    <input className="btn btn-success my-3 text-white mx-auto block" type="submit" value={'Add a Class'} />
                </form>
        </div>
    );
};

export default AddClass;