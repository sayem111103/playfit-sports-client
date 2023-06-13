import axios from "axios";

const baseUrl = axios.create({
    baseURL: 'https://playfit-sports-server-sayem111103.vercel.app/'
})
const useAxios = () => {
    return [baseUrl];
};

export default useAxios;