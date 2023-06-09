import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useClasses = () => {
    const [baseURL] = useAxios();
    const {data:classes=[], refetch}=useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
          const response = await baseURL('/classes')
          return response.data;
        },
      })
    return [classes,refetch];
};

export default useClasses;