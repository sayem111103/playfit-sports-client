import { useForm } from "react-hook-form";
import LoginAndRegistrationForm from "../../components/LoginAndRegistrationForm/LoginAndRegistrationForm";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const { emailPassLogin, user } = useAuth();
    const [error, setError] = useState('')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = data => {
        setError('')
        emailPassLogin(data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
                if (errorMessage === 'Firebase: Error (auth/wrong-password).') {
                    return setError('Wrong Password')
                }
                if (errorMessage === 'Firebase: Error (auth/user-not-found).') {
                    return setError('user-not-found')
                }
                setError(errorMessage)
            });
    };

    if (user) {
        navigate('/')
    }

    return (
        <div className="py-20">
            <div>
                <LoginAndRegistrationForm register={register} errors={errors} handleSubmit={handleSubmit} error={error} onSubmit={onSubmit}></LoginAndRegistrationForm>
            </div>
        </div>
    );
};

export default Login;