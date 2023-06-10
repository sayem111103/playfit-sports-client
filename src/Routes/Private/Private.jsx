import { Player } from "@lottiefiles/react-lottie-player";
import useAuth from "../../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
    const { user, loader } = useAuth();
    const location = useLocation();
    if (loader) {
        return <div className="h-[100vh] flex justify-center items-center">
            <Player
                autoplay
                loop
                src="https://assets10.lottiefiles.com/packages/lf20_lz5rbiit.json"
                style={{ height: '200px', width: '200px' }}
            >
            </Player>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default Private;