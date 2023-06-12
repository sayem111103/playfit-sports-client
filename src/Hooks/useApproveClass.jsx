import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const useApproveClass = () => {
    const [baseUrl] = useAxios();
    const [classes,setClasses] = useState([]);
    useEffect(()=>{
        baseUrl.get('/classes')
        .then(res=> {
            const filter = res.data.filter(cd => cd?.status === 'approved')
            setClasses(filter)
        })
    },[])
    return [classes]
};

export default useApproveClass;