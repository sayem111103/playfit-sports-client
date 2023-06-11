import { useQuery } from "@tanstack/react-query";
import useSecure from "./useSecure";
const useUser = () => {
    const [secure] = useSecure();
    const {data: users=[], refetch}=useQuery({
        queryKey: ['users'],
        queryFn: async () => {
          const response = await secure.get('/user')
          return response.data;
        },
      })
    return [users,refetch];
};

export default useUser;