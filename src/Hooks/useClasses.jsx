import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecure from "./useSecure";

const useClasses = () => {
  const { user, loader } = useAuth()
  const [secure] = useSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ['classes', user?.email],
    loader: !loader,
    queryFn: async () => {
      const response = await secure(`/classes/${user?.email}`)
      return response.data;
    },
  })
  return [classes, refetch];
};

export default useClasses;