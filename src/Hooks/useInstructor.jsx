import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useInstructor = () => {
    const [baseURL] = useAxios();
    const {data: instructors=[], refetch}=useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
          const response = await baseURL('/instructors')
          return response.data;
        },
      })
    return [instructors,refetch];
};

export default useInstructor;