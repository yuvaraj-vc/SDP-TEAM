// import React from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import { LayoutDashboard, Book, Calendar, MessageSquare, User } from 'lucide-react';

// const Userleftbar = () => {
//   const UserLinks = [
//     {
//       title: 'Dashboard',
//       link: '/user/dashboard',
//       icon: LayoutDashboard
//     },
//     {
//       title: 'Edit Profile',
//       link: '/user/profile',
//       icon: User
//     },
//     {
//       title: 'View Timetable',
//       link: '/user/timetable',
//       icon: Calendar
//     },
//     {
//       title: 'View Courses',
//       link: '/user/courses',
//       icon: Book
//     },
//     {
//       title: 'Feedback',
//       link: '/user/feedback',
//       icon: MessageSquare
//     },
//   ];

//   return (
//     <div className='h-screen w-1/6 flex flex-col bg-slate-200 pt-10'>
//       <div className='h-5/6 w-full flex flex-col justify-start items-center gap-4'>
//         {UserLinks.map((data, index) => (
//           <NavLink
//             key={index}
//             to={data.link}
//             className='p-5 border-b-4 border-slate-400 hover:border-indigo-600 text-slate-800 font-bold mt-2 w-full'
//           >
//             <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
//               {React.createElement(data.icon, { size: 20 })}
//               {data.title}
//             </span>
//           </NavLink>
//         ))}
//       </div>
//       <div className='h-1/6 w-full flex flex-col justify-center items-center'>
//         <Link
//           to="/login"
//           className='p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-center'
//         >
//           Logout
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Userleftbar;

import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LayoutDashboard, Book, Calendar, MessageSquare, User } from 'lucide-react';

import { useAuth } from '../context/AuthContext';
const Userleftbar = () => {
  const { logout } = useAuth();

  const UserLinks = [
    {
      title: 'Dashboard',
      link: '/user/dashboard',
      icon: LayoutDashboard
    },
    {
      title: 'Edit Profile',
      link: '/user/profile',
      icon: User
    },
    {
      title: 'View Timetable',
      link: '/user/timetable',
      icon: Calendar
    },
    {
      title: 'View Courses',
      link: '/user/courses',
      icon: Book
    },
    {
      title: 'Feedback',
      link: '/user/feedback',
      icon: MessageSquare
    },
  ];

  return (
    <div className='h-screen w-1/6 flex flex-col bg-slate-200 pt-10'>
      <div className='h-5/6 w-full flex flex-col justify-start items-center gap-4'>
        {UserLinks.map((data, index) => (
          <NavLink
            key={index}
            to={data.link}
            className='p-5 border-b-4 border-slate-400 hover:border-indigo-600 text-slate-800 font-bold mt-2 w-full'
          >
            <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
              {React.createElement(data.icon, { size: 20 })}
              {data.title}
            </span>
          </NavLink>
        ))}
      </div>
      <div className='h-1/6 w-full flex flex-col justify-center items-center'>
        <button
          onClick={logout}
          className='p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-center'
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Userleftbar;
