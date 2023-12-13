// import { useState } from "react";
// import { FaBars, FaSearch } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   const { currentUser } = useSelector(state => state.user);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">
//       <header className="bg-white py-5">
//         <nav className="flex justify-between items-center w-[92%] mx-auto">
//           <div className="flex items-center gap-6">
//             <FaBars onClick={toggleMenu} className="cursor-pointer md:hidden" />
//             <Link to="/">
//               <h1 className="text-2xl text-red-600">Real State</h1>
//             </Link>
//           </div>
//           <div className="hidden sm:flex items-center gap-6">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="border border-gray-300 bg-white h-10 pl-5 pr-10 rounded-full text-sm focus:outline-none"
//               />
//               <button
//                 type="submit"
//                 className="absolute right-0 top-0 mt-3 mr-4"
//               >
//                 <FaSearch className="text-gray-500" /> {/* Search icon */}
//               </button>
//             </div>
//           </div>
//           <div
//             className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[45vh] left-0 ${isMenuOpen ? "top-[9%]" : "top-[-100%]"
//               } md:w-auto w-full flex items-center px-5 mt-2`}
//           >
//             <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-xl t">
//               <li>
//                 <Link
//                   to="/"
//                   className="hover:text-red-600 hover:underline"
//                   href="#"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/about"
//                   className="hover:text-red-600 hover:underline"
//                   href="#"
//                 >
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/profile"
//                   className="hover:text-red-600 hover:underline"
//                   href="#"
//                 >
//                   {currentUser ? (
//                     <img className="rounded-full w-7 h-7" src={currentUser.avatar} alt="profile" />
//                   ) : (
//                     <span>Login</span>
//                   )}

//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className="md:hidden">
//             <Link
//               to="/profile"
//               className="hover:text-red-600 hover:underline"
//               href="#"
//             >
//               {currentUser ? (
//                 <img className="rounded-full w-7 h-7" src={currentUser.avatar} alt="profile" />
//               ) : (
//                 <span>Login</span>
//               )}

//             </Link>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default NavBar;

import { useEffect, useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const { currentUser } = useSelector(state => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleNavLinkClick = () => {
    if (isMenuOpen) {
      // If the menu is open, close it
      setIsMenuOpen(false);
    }
  };

  const handleProfileClick = () => {
    if (currentUser) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, []);

  return (
    <div className="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">
      <header className="bg-opacity-5 py-5">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div className="flex items-center gap-6">
            <FaBars onClick={toggleMenu} className="cursor-pointer md:hidden" />
            <Link to="/">
              <h1 className="text-2xl text-red-600">Real State</h1>
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="items-center gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-400 bg-red-500 bg-opacity-5 h-10 pl-5 pr-10 rounded-full text-sm focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="absolute right-0 top-0 mt-3 mr-4">
                <FaSearch className="text-gray-500" />
              </button>
            </div>
          </form>
          <div
            className={`nav-links duration-500 md:static absolute md:min-h-fit min-h-[30vh] left-0 ${isMenuOpen ? "top-[12%] z-20 bg-blue-500 lg:bg-transparent" : "top-[-100%]"
              } md:w-auto w-full flex items-center px-5 mt-2`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6 text-xl t">
              <li>
                <Link to="/" onClick={handleNavLinkClick} className="hover:text-red-600 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleNavLinkClick} className="hover:text-red-600 hover:underline">
                  About
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleProfileClick();
                    handleNavLinkClick();
                  }}
                  className="hover:text-red-600 hover:underline cursor-pointer"
                >
                  {currentUser ? (
                    <img className="rounded-full w-7 h-7" src={currentUser.avatar} alt="profile" />
                  ) : (
                    <span>Login</span>
                  )}
                </button>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={handleProfileClick}
              className="hover:text-red-600 hover:underline cursor-pointer"
            >
              {currentUser ? (
                <img className="rounded-full w-7 h-7" src={currentUser.avatar} alt="profile" />
              ) : (
                <span>Login</span>
              )}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;


//Jquery react navbar

// import { FaBars } from "react-icons/fa";
// const NavBar = () => {
//   const navLinks = document.querySelector('.nav-links');

//   const onToggleMenu = (e) => {
//     const iconName = e.target.getAttribute('name');

//     if (iconName === 'menu') {
//       e.target.setAttribute('name', 'close');
//       navLinks.classList.toggle('top-[9%]');
//     } else if (iconName === 'close') {
//       e.target.setAttribute('name', 'menu');
//       navLinks.classList.toggle('top-[9%]');
//     }
//   };
//   return (
//     <div className="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen">
//       <header className="bg-white py-5">
//         <nav className="flex justify-between items-center w-[92%] mx-auto">
//           <div className="flex items-center gap-6">
//             <FaBars onClick={onToggleMenu} name="menu" className="cursor-pointer md:hidden" />
//             <h1>Hemonto</h1>
//           </div>
//           <div
//             className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
//             <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
//               <li>
//                 <a className="hover:text-gray-500" href="#">Products</a>
//               </li>
//               <li>
//                 <a className="hover:text-gray-500" href="#">Solution</a>
//               </li>
//               <li>
//                 <a className="hover:text-gray-500" href="#">Resource</a>
//               </li>
//               <li>
//                 <a className="hover:text-gray-500" href="#">Developers</a>
//               </li>
//               <li>
//                 <a className="hover:text-gray-500" href="#">Pricing</a>
//               </li>
//             </ul>
//           </div>
//           <div className="flex items-center gap-6">
//             <button className="bg-[#a6c1ee] text-white px-5 hover:bg-[#87acec]">Sign in</button>
//           </div>
//         </nav>
//       </header>
//     </div >
//   );
// };

// export default NavBar;