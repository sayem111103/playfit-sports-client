import useAdmin from "../../../Hooks/useAdmin";
import AdminHome from "../Admin/AdminHome/AdminHome";
import InstructorHome from "../Instructor/InstructorHome/InstructorHome";
import StudentHome from "../Student/StudentHome/StudentHome";

const DashboardHome = () => {
    const [isAdmin] = useAdmin();
    const isInstructor = false
    return (
        <div>
            {isAdmin? <AdminHome></AdminHome>:isInstructor?<InstructorHome></InstructorHome>:<StudentHome></StudentHome>}
        </div>
    );
};

export default DashboardHome;