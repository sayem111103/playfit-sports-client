import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecure from "./useSecure";

const useManageClasses = () => {
  const { loader } = useAuth()
  const [secure] = useSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ['classes'],
    loader: !loader,
    queryFn: async () => {
      const response = await secure(`/classes`)
      return response.data;
    },
  })
  return [classes, refetch];
};

export default useManageClasses;