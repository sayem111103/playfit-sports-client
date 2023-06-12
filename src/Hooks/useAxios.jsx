import axios from "axios";

const baseUrl = axios.create({
    baseURL: 'https://playfit-sports-server.vercel.app/'
})
const useAxios = () => {
    return [baseUrl];
};

export default useAxios;