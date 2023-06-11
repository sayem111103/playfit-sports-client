import { Link, Outlet } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { MdPeopleAlt } from 'react-icons/md';
import { ImBooks } from 'react-icons/im';
import { MdLibraryBooks } from 'react-icons/md';
import useAdmin from "../Hooks/useAdmin";

const DashboardLayout = () => {
    const [isAdmin] = useAdmin();
    const isInstructor = false
    const dashboardItem = <>
    <Link to='/' className="font-extrabold uppercase py-3 text-xl">Playfit Sports Academy</Link>
    {isAdmin ? <><li><Link to='dashboard' className="text-black"><FaHome className="text-black"></FaHome>Admin Home</Link></li>
        <li><Link to='manageusers' className="text-black"><MdPeopleAlt className='text-black'></MdPeopleAlt>Manage Users</Link></li>
        <li><Link to='manageclasses' className="text-black"><ImBooks className='text-black'></ImBooks>Manage Classes</Link></li>
        </>
        :
        <>{isInstructor ? <>
            <li><Link to='dashboard' className="text-black"><FaHome className="text-black"></FaHome>Instructor Home</Link></li>
            <li><Link to='addaclass' className="text-black"><MdLibraryBooks className='text-black'></MdLibraryBooks>Add a Class</Link></li>
            <li><Link to='myclasses' className="text-black"><MdLibraryBooks className='text-black'></MdLibraryBooks>My Classes</Link></li>
            </>
            :
            <>
            <li><Link to='dashboard' className="text-black"><FaHome className="text-black"></FaHome>Student Home</Link></li>
            <li><Link to='myselectedclasses' className="text-black"><MdPeopleAlt className='text-black'></MdPeopleAlt>My Selected Classes</Link></li>
            <li><Link to='myenrolledclasses' className="text-black"><ImBooks className='text-black'></ImBooks>My Enrolled Classes</Link></li>
            <li><Link to='payment' className="text-black"><MdLibraryBooks className='text-black'></MdLibraryBooks>Payment</Link></li>
            </>}
        </>}
    </>
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Main Menu</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-slate-100 text-base-content">
                        {/* Sidebar content here */}
                        {dashboardItem}
                    </ul>

                </div>
            </div>
        </>
    );
};

export default DashboardLayout;