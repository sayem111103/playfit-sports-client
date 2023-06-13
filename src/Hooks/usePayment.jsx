import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecure from "./useSecure";

const usePayment = () => {
    const { user, loader } = useAuth()
    const [secure] = useSecure();
    const { data: paidInfo = [], refetch } = useQuery({
      queryKey: ['payment', user?.email],
      loader: !loader,
      queryFn: async () => {
        const response = await secure(`/payment/${user?.email}`)
        return response.data;
      },
    })
    return [paidInfo, refetch];
};

export default usePayment;