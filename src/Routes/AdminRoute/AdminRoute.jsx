import { Player } from "@lottiefiles/react-lottie-player";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const { user, loader,logOut } = useAuth();
    if (loader || isAdminLoading) {
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
    if (user && isAdmin) {
        return children;
    }
    if(!isAdmin){
        logOut()
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
    }
};

export default AdminRoute;