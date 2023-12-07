import { useState } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen">
      <header className="bg-white py-5">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div className="flex items-center gap-6">
            <FaBars onClick={toggleMenu} className="cursor-pointer md:hidden" />
            <h1>Hemonto</h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 bg-white h-10 pl-5 pr-10 rounded-full text-sm focus:outline-none"
              />
              <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                <FaSearch className="text-gray-500" /> {/* Search icon */}
              </button>
            </div>
          </div>
          <div className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${isMenuOpen ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <a className="hover:text-gray-500" href="#">Home</a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">About</a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">Profile</a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">Login</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
