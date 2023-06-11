import { Player } from "@lottiefiles/react-lottie-player";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";

const InstructorRoute = ({children}) => {
    const [isInstructor, isInstructorLoading] = useAdmin();
    const {user, loader} = useAuth();
    if (loader || isInstructorLoading) {
        return <div className="h-[100vh] flex justify-center items-center">
            <Player
                autoplay
                loop
                src="https://assets10.lottiefiles.com/packages/lf20_lz5rbiit.json"
                style={{ height: '100px', width: '100px' }}
            >
            </Player>
        </div>
    }
    if (user && isInstructor) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;