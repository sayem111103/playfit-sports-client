import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Allinstructors from "../Pages/Allinstructors/Allinstructors";
import AllClasses from "../Pages/AllClasses/AllClasses";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'registration',
                element:<Registration></Registration>
            },
            {
                path:'instructors',
                element:<Allinstructors></Allinstructors>
            },
            {
                path:'classes',
                element:<AllClasses></AllClasses>
            }
        ]
    }
]);

export default router;