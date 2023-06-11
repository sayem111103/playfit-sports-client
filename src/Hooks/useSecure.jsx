import { useEffect } from "react";
import useAxios from "./useAxios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
const [baseUrl] = useAxios();
const secure = baseUrl;
const useSecure = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate()
    useEffect(() => {
        secure.interceptors.request.use(function (config) {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config;
        });

        // Add a response interceptor
        secure.interceptors.response.use(response => response,
            async (error) => {
                if(error.response && (error.response.status === 401 || error.response.status === 403)){
                    await logOut()
                    navigate('/login')
                }
                return Promise.reject(error);
            });
    }, [navigate])
    return [secure]
};

export default useSecure;