import { Link } from "react-router-dom";
import Container from "../../components/Container";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const navItem = <>
        <li><Link className="text-sm uppercase font-medium" to='/'>Home</Link></li>
        <li><Link className="text-sm uppercase font-medium" to='/instructors'>Instructors</Link></li>
        <li><Link className="text-sm uppercase font-medium" to='/classes'>Classes</Link></li>
        {user ? <li><Link className="text-sm uppercase font-medium" to='/dashboard'>Dashboard</Link></li> : ''}
    </>
    return (
        <>
            <Container>
                <nav className="navbar justify-between">
                    <div className="navbar-start gap-3">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className='menu z-30 menu-sm dropdown-content mt-3 p-2 shadow bg-slate-100 rounded-box w-52'>
                                {navItem}
                            </ul>
                        </div>
                        <Link to='/' className="font-extrabold uppercase text-xs sm:text-xl">Playfit Sports Academy</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItem}
                        </ul>
                    </div>
                    <div className="navbar-end w-[unset]">
                        {user ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu z-30 menu-sm dropdown-content mt-3 p-2 shadow bg-slate-100 rounded-box w-52">
                               <li onClick={logOut}><a>Logout</a></li>
                            </ul>
                        </div> : <Link to='/login' className="btn text-white">Login</Link>}
                    </div>
                </nav>
            </Container>
        </>
    );
};

export default Navbar;