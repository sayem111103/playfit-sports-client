import { Link } from "react-router-dom";
import Container from "../../components/Container";
import { useState } from "react";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const navItem = <>
        <li><Link className="text-sm uppercase font-medium" to='/'>Home</Link></li>
        <li><Link className="text-sm uppercase font-medium" to='/instructors'>Instructors</Link></li>
        <li><Link className="text-sm uppercase font-medium" to='/classes'>Classes</Link></li>
        <li><Link className="text-sm uppercase font-medium" to='/dashboard'>Dashboard</Link></li>
    </>
    return (
        <nav>
            <Container>
                <div className="navbar">
                    <div className="navbar-start gap-3">
                        <div className="dropdown">
                            <label onClick={()=> setShow(!show)} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul className={`${show?'block':'hidden'} menu menu-sm absolute z-10 bg-slate-100 mt-3 p-2 shadow rounded-box w-52`}>
                                {navItem}
                            </ul>
                        </div>
                        <Link to='/' className="font-extrabold uppercase text-xl">Playfit Sports Academy</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItem}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link to='/login' className="btn text-white">Login</Link>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;