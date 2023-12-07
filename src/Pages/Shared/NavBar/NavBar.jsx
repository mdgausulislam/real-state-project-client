import { useState } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">
      <header className="bg-white py-5">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div className="flex items-center gap-6">
            <FaBars onClick={toggleMenu} className="cursor-pointer md:hidden" />
            <h1 className='text-2xl text-red-600'>Real State</h1>
          </div>
          <div className="hidden sm:flex items-center gap-6">
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
          <div className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[45vh] left-0 ${isMenuOpen ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5 mt-2`}>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-xl t">
              <li>
                <Link to='/' className="hover:text-red-600 hover:underline" href="#">Home</Link>
              </li>
              <li>
                <Link to='/about' className="hover:text-red-600 hover:underline" href="#">About</Link>
              </li>
              <li>
                <Link className="hover:text-red-600 hover:underline" href="#">Profile</Link>
              </li>
              <li>
                <Link to='/login' className="hover:text-red-600 hover:underline" href="#">Login</Link>
              </li>
            </ul>
          </div>
          <div className='md:hidden'>
            <button>hemonto</button>
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


