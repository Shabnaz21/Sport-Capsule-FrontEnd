import { IoLocationSharp } from "react-icons/io5"
import { BsTelephone } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Hook/AuthProvider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const menus = <>
        <li><NavLink to='/'>Home</NavLink> </li>
        <li><NavLink to='/add-products'>Add Products</NavLink> </li>
        <li><NavLink to='/contact'>Contact</NavLink> </li>
        <li><NavLink to='/register'>Register</NavLink></li>
    </>
    const cart = <>
        <NavLink to='/shopping'><p className="text-md">My cart</p></NavLink>
    </>
    return (
        <div >
            <div className="hidden lg:block">
                <div className="navbar container mx-auto">
                    <div className="flex-1">
                        <div className="flex items-center gap-3">
                            <IoLocationSharp className="text-lg"></IoLocationSharp>
                            <p className="md:text-md">123 Main Street Chicago, IL 60601 USA</p>
                        </div>
                    </div>
                    <div className="flex-none ml-3">
                        {cart}
                    </div>
                </div>
           </div>
            <hr />
            {/* 2nd part */}
            <div className="navbar container mx-auto">
                <div className="form-control hidden md:block">
                    <div className="input-group">
                        <input type="text" placeholder="Enter your keywords ..." className="input input-bordered" />
                        <button className="btn ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <div className="flex-1 justify-center">
                    <Link><div className="flex items-center">
                        <img src="https://i.ibb.co/QFLk4p3/logo.png" className="w-20 h-14" alt="Logo" />
                        <p className=" font-jost text-red-950 text-xl lg:text-4xl -ml-4">SPORT CAPSULE</p>
                    </div></Link>
                </div>
                <div className="justify-end divide-y-4">
                    {user ? (
                        <>
                            <div className="flex flex-col text-center">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img width={50} height={50} src={user.photoURL} alt={user.displayName} />
                                    </div>
                                </label>
                                <p className="text-gray-700 font-semibold">{user.displayName}</p>
                            </div>
                            <button onClick={handleSignOut} className="btn ml-5 bg-[#C1032F] hover:bg-[#303030] hover:text-white text-white normal-case">Sign Out</button>
                        </>
                    ) : (
                            <Link to='/sign-up' className="btn bg-[#C1032F] text-white hover:bg-[#303030] hover:text-white normal-case">Login</Link>
                    )}
                </div>
            </div>
            <hr />
            {/* menu part */}
            <div className="bg-[#F3ECED] text-lg">
                <div className="navbar container mx-auto justify-between">
                    <div className="navbar-start lg:hidden">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                                {menus} {cart}
                            </ul>
                        </div>
                    </div>
                    <div className="hidden lg:flex ">
                        <ul className="menu menu-horizontal px-1 text-lg">
                            {menus}
                        </ul>
                    </div>
                    <div className="navbar-end ">
                        <div className="flex gap-3 items-center font-semibold ">
                            <BsTelephone></BsTelephone>
                            <p >+1 (312) 555-1234</p>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Navbar;