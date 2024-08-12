import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Book, Calendar } from 'lucide-react';

const AdminLeftbar = () => {
    const AdminLinks = [
        {
            title: 'Dashboard',
            link: '/admin/dashboard',
            icon: LayoutDashboard
        },
        {
            title: 'Manage Tutors',
            link: '/admin/tutors',
            icon: Users
        },
        {
            title: 'Manage Courses',
            link: '/admin/courses',
            icon: Book
        },
        {
            title: 'Manage Timetables',
            link: '/admin/timetables',
            icon: Calendar
        }
    ];

    return (
        <div className='h-screen w-1/6 flex flex-col bg-slate-200 pt-10'>
            <div className='h-5/6 w-full flex flex-col justify-start items-center gap-4'>
                {
                    AdminLinks.map((data, index) => (
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
                    ))
                }
            </div>
            <div className='h-1/6 w-full flex flex-col justify-center items-center'>
                <button className='p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700'>
                    Logout
                </button>
            </div>
        </div>
    );
}

export default AdminLeftbar;
