import { useForm } from "react-hook-form";
import LoginAndRegistrationForm from "../../components/LoginAndRegistrationForm/LoginAndRegistrationForm";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
    const {emailPassLogin} = useAuth();
    const [error, setError] = useState('')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setError('')
        emailPassLogin(data.email,data.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
          });
    };
    return (
        <div className="py-20">
            <div>
                <LoginAndRegistrationForm register={register} errors={errors} handleSubmit={handleSubmit} error={error} onSubmit={onSubmit}></LoginAndRegistrationForm>               
            </div>
        </div>
    );
};

export default Login;