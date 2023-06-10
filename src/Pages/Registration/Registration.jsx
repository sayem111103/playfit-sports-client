import { useState } from "react";
import LoginAndRegistrationForm from "../../components/LoginAndRegistrationForm/LoginAndRegistrationForm";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const Registration = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const { emailPassRegistration, user } = useAuth()
    const [error, setError] = useState('')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        setError('')
        if (data.password !== data.Cpassword) {
            return setError("Password Doesn't Matched")
        }

        emailPassRegistration(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
                if (errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
                    return setError('email-already-in-use')
                }
                setError(errorMessage)
            });

    };

    if (user) {
        navigate('/')
    }

    return (
        <div className="py-20">
            <LoginAndRegistrationForm registration={true} register={register} errors={errors} handleSubmit={handleSubmit} error={error} onSubmit={onSubmit}></LoginAndRegistrationForm>
        </div>
    );
};

export default Registration;