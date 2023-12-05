import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavBar = () => {
  const Navbar = (
    <>
      <li className="hover:underline"><Link to='/'>Home</Link></li>
      <li className="hover:underline"><Link to='/about'>About</Link></li>
      <li className="hover:underline"><Link to='/login'>LogIn</Link></li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBars />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Navbar}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost text-xl">Real State</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <form>
            <div className="join">
              <input
                className="border input-bordered join-item"
                placeholder="Email"
              />
              <button className="btn join-item rounded-r-full">Search</button>
            </div>
          </form>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 hidden lg:flex">{Navbar}</ul>
          <button className="lg:hidden"><Link>profile</Link></button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

