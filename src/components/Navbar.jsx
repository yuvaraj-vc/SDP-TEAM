// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { ModeToggle } from './toggle';

// const Navbar = () => {
//   const NavLinks = [
//     {
//       title: "Home",
//       path: "/"
//     },
//     {
//       title: "About Us",
//       path: "/aboutus"
//     },
//     {
//       title: "Login",
//       path: "/login"
//     },
//     {
//       title: "Register",
//       path: "/register"
//     }
//   ];

//   return (
//     <div className="w-full h-[8vh] flex flex-row justify-center items-center shadow-sm shadow-primary/50 bg-indigo-500">
//       <div className="w-1/4 h-full text-white font-bold flex justify-start items-center text-lg">TimeTablePro</div>
//       <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8 ml-8'>
//         {
//           NavLinks.map((links, index) => (
//             <li key={index} className='list-none'>
//               <NavLink to={links.path} className="text-white hover:text-indigo-200">
//                 {links.title}
//               </NavLink>
//             </li>
//           ))
//         }
//         <ModeToggle />
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { ModeToggle } from './toggle';

const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "About Us",
      path: "/aboutus"
    },
    {
      title: "Login",
      path: "/login"
    },
    {
      title: "Register",
      path: "/register"
    }
  ];

  return (
    <div className="w-full h-[8vh] flex flex-row justify-center items-center shadow-sm shadow-primary/50 bg-indigo-500">
      <div className="w-1/4 h-full text-white font-bold flex justify-start items-center text-lg gap-2">
        <Calendar size={24} />
        TimeTablePro
      </div>
      <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8 ml-8'>
        {
          NavLinks.map((links, index) => (
            <li key={index} className='list-none'>
              <NavLink to={links.path} className="text-white hover:text-indigo-200">
                {links.title}
              </NavLink>
            </li>
          ))
        }
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
