import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecure from "./useSecure";

const useCart = () => {
    const { user, loader } = useAuth()
    const [secure] = useSecure();
    const { data: cart = [], refetch } = useQuery({
      queryKey: ['classcart', user?.email],
      loader: !loader,
      queryFn: async () => {
        const response = await secure(`/classcart/${user?.email}`)
        return response.data;
      },
    })
    return [cart, refetch];
};

export default useCart;