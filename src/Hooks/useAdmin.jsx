import { useQuery } from "@tanstack/react-query";
import useSecure from "./useSecure";
import { useContext } from "react";
import { authContext } from "../Auth/Auth";

const useAdmin = () => {
    const {user} = useContext(authContext);
    const [secure] = useSecure();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['admin', user.email],
        queryFn: async () => {
          const response = await secure.get(`/user/admin/${user.email}`)
          return response.data.admin;
        },
      })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;