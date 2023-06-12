import useAdmin from "../../../Hooks/useAdmin";
import useInstructor from "../../../Hooks/useInstructor";
import AdminHome from "../Admin/AdminHome/AdminHome";
import InstructorHome from "../Instructor/InstructorHome/InstructorHome";
import StudentHome from "../Student/StudentHome/StudentHome";

const DashboardHome = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        <div>
            {isAdmin? <AdminHome></AdminHome>:isInstructor?<InstructorHome></InstructorHome>:<StudentHome></StudentHome>}
        </div>
    );
};

export default DashboardHome;