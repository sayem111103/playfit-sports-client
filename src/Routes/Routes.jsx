import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Allinstructors from "../Pages/Allinstructors/Allinstructors";
import AllClasses from "../Pages/AllClasses/AllClasses";
import DetailPage from "../Pages/DetailPage/DetailPage";
import axios from "axios";
import DashboardLayout from "../Layout/DashboardLayout";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import Private from "./Private/Private";
import AdminRoute from "./AdminRoute/AdminRoute";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            },
            {
                path: 'instructors',
                element: <Allinstructors></Allinstructors>
            },
            {
                path: 'classes',
                element: <AllClasses></AllClasses>
            },
            {
                path: 'detailpage/:id',
                element: <DetailPage></DetailPage>,
                loader: ({ params }) => axios.get(`http://localhost:5000/instructors/${params.id}`)
            }
        ]
    },
    {
        path: '/',
        element: <Private><DashboardLayout></DashboardLayout></Private>,
        children: [
            {
                path: 'dashboard',
                element: <Private><DashboardHome></DashboardHome></Private>
            },
            {
                path: 'manageusers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            }
        ]
    }
]);

export default router;