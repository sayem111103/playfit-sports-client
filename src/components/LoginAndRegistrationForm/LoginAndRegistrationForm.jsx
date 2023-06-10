import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { BsGoogle } from 'react-icons/bs';
import { Link } from "react-router-dom";

const LoginAndRegistrationForm = ({ registration, onSubmit, error,register, handleSubmit, errors }) => {
    const [show, setShow] = useState(false) 

    return (
        <div className="w-[40%] mx-auto bg-slate-200 p-6 rounded-md">
            {registration ?
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-2xl font-extrabold text-center py-3">Please Registration Here!!</h2>
                    {/* register your input into the hook by invoking the "register" function */}
                    <p className="text-red-500 text-center">{error}</p>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name*</span>
                        </label>
                        <input type="text" placeholder="Your Name" className="input bg-white input-bordered bg-transparent"  {...register("name", { required: true })} />
                    </div>
                    {errors.name && <span className="text-red-500">This field is required*</span>}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email*</span>
                        </label>
                        <input type="email" placeholder="email" className="input bg-white input-bordered bg-transparent"  {...register("email", { required: true, pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
                    </div>
                    {errors.email && <span className="text-red-500">This field is required*</span>}
                    {errors.email?.type === 'pattern' && <span className="text-red-500">Please type valid email*</span>}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password*</span>
                        </label>
                        <div className="relative">
                            <input type={`${show ? 'text' : 'password'}`} placeholder="password" className="input bg-white w-full input-bordered bg-transparent"  {...register("password", { 
                                required: true,
                                minLength:6,
                                pattern: /^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).*$/
                                 })} />
                            <div onClick={() => setShow(!show)} className="absolute cursor-pointer top-[50%] translate-y-[-50%] right-2">
                                {show ? <AiFillEye className="text-xl" />
                                    :
                                    <AiFillEyeInvisible className="text-xl" />}
                            </div>
                        </div>
                    </div>
                    {errors.password && <span className="text-red-500">This field is required*</span>}
                    {errors.password?.type === 'minLength' && <span className="text-red-500">Password Should Be Minimum 6 Characters*</span>}
                    {errors.password?.type === 'pattern' && <span className="text-red-500">Password Should Be atleast one special character, one uppercase, one lowercase.*</span>}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password*</span>
                        </label>
                        <div className="relative">
                            <input type='password' placeholder="confirm password" className="input bg-white w-full input-bordered bg-transparent"  {...register("Cpassword", { required: true })} />
                        </div>
                    </div>
                    {errors.Cpassword && <span className="text-red-500">This field is required*</span>}                   

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo*</span>
                        </label>
                        <input type="url" placeholder="Photo url" className="input bg-white input-bordered bg-transparent"  {...register("img", { required: true })} />
                    </div>
                    {errors.img && <span className="text-red-500">This field is required*</span>}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Gender*</span>
                        </label>
                        <select className="bg-transparent input-bordered input bg-white" {...register("gender")}>
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    {errors.img && <span className="text-red-500">This field is required*</span>}


                    <input className="btn btn-success my-3 text-white mx-auto block" type="submit" value={'Registration'} />
                </form>
                :
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-2xl font-extrabold text-center py-3">Please Login!!</h2>
                    
                    {/* register your input into the hook by invoking the "register" function */}
                    <p className="text-red-500 text-center">{error}</p>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email*</span>
                        </label>
                        <input type="text" placeholder="email" className="input bg-white input-bordered bg-transparent"  {...register("email", { required: true })} />
                    </div>
                    {errors.email && <span className="text-red-500">This field is required*</span>}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password*</span>
                        </label>
                        <div className="relative">
                            <input type={`${show ? 'text' : 'password'}`} placeholder="password" className="input bg-white w-full input-bordered bg-transparent"  {...register("password", { required: true })} />
                            <div onClick={() => setShow(!show)} className="absolute cursor-pointer top-[50%] translate-y-[-50%] right-2">
                                {show ? <AiFillEye className="text-xl" />
                                    :
                                    <AiFillEyeInvisible className="text-xl" />}
                            </div>
                        </div>
                    </div>
                    {errors.password && <span className="text-red-500">This field is required*</span>}

                    <input className="btn btn-success my-3 text-white mx-auto block" type="submit" value={'Login'} />
                </form>}
                <div>
                    <p className="text-center">New Here? <Link className="underline text-primary" to={`${registration? '/login': '/registration'}`}>{`${registration?'Click Here To Login':'Click Here To Registration'}`}</Link></p>
                    <div className="divider">OR</div>
                    <div className="flex justify-center">
                        <div className="bg-black py-3 px-3 rounded-[50%] cursor-pointer"><BsGoogle className="text-2xl text-white"></BsGoogle></div>
                    </div>
                </div>
        </div>
    );
};

export default LoginAndRegistrationForm;