import { useQuery } from "@tanstack/react-query";
import useSecure from "./useSecure";
import useAuth from "./useAuth";

const useInstructor = () => {
  const { user, loader } = useAuth();
  const [secure] = useSecure();
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ['instructor', user?.email],
    enabled: !loader,
    queryFn: async () => {
      const response = await secure.get(`/user/instructor/${user?.email}`)
      return response.data.instructor;
    },
  })
  return [isInstructor, isInstructorLoading]
};

export default useInstructor;