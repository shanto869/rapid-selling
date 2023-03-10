import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(() => toast.success('Successfully Sign Out'))
            .catch(err => toast.error(err.message))
    }

    const meunItems = <>
        <li> <Link to='/' className='btn btn-link text-white nav-font capitalize decoration-none text-lg hover:text-[#b2dd4c]'>Home</Link></li>

        <li> <Link to='/blogs' className='btn btn-link text-white nav-font capitalize decoration-none text-lg hover:text-[#b2dd4c]'>Blogs</Link></li>

        {
            user?.uid ? <>
                <li> <Link to='/dashboard' className='btn btn-link text-white nav-font capitalize decoration-none text-lg hover:text-[#b2dd4c]'>Dashboard</Link></li>
                <li> <Link to='/' onClick={handleLogOut} className='btn btn-link text-white nav-font capitalize decoration-none text-lg hover:text-[#b2dd4c]'>Logout</Link></li>

            </> : <>
                <li> <Link to='/login' className='btn btn-link text-white nav-font capitalize decoration-none text-lg hover:text-[#b2dd4c]'>Login</Link></li>
                <li> <Link to='/signup' className='btn btn-link text-white nav-font capitalize decoration-none text-lg hover:text-[#b2dd4c]'>Sign Up</Link></li>

            </>
        }



    </>


    return (
        <div className="navbar bg-slate-900 px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        {/* <FaListUl></FaListUl> */}
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 nav-font">

                        {meunItems}

                    </ul>
                </div>
                <Link to='/' className="btn btn-link text-warning text-3xl heading-font capitalize">Rapid Reselling</Link >
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">

                    {meunItems}

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid && <>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} alt='' />
                            </div>
                        </label>
                    </>
                }
            </div>
        </div>
    );
};

export default Header;