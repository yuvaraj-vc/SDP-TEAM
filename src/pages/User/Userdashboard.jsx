// import React, { useState } from 'react';
// import { Calendar, BookOpen, MessageCircle, Bell, User, Clock, ChevronRight } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const UserDashboard = () => {
//   const [userName] = useState('User');
//   const [upcomingClasses] = useState([
//     { id: 1, name: 'Advanced Java', time: '10:00 AM', room: 'Room 101' },
//     { id: 2, name: 'Java Fundamentals', time: '2:00 PM', room: 'Lab 3' },
//   ]);
//   const [notifications] = useState([
//     { id: 1, message: 'New timetable published for next week', time: '2 hours ago' },
//     { id: 2, message: 'Feedback requested for 22SB201 course', time: '1 day ago' },
//   ]);
//   const navigate = useNavigate();

//   const DashboardCard = ({ icon: Icon, title, onClick, children }) => (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <div className="flex items-center justify-between mb-4">
//         <div className="flex items-center">
//           <Icon className="w-8 h-8 text-gray-600 mr-3" />
//           <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
//         </div>
//         <button 
//           onClick={onClick} 
//           className="text-indigo-600 hover:text-indigo-800 flex items-center"
//         >
//           View All
//           <ChevronRight className="w-4 h-4 ml-1" />
//         </button>
//       </div>
//       {children}
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//         <div className="px-4 py-6 sm:px-0">
//           <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, {userName}!</h1>
          
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//             <button
//               onClick={() => navigate('/dashboard/timetable')}
//               className="bg-white p-6 rounded-lg shadow-md flex items-center hover:bg-gray-50 transition-colors"
//             >
//               <Calendar className="w-10 h-10 text-indigo-600" />
//               <div className="ml-4 text-left">
//                 <p className="text-2xl font-semibold text-gray-800">My Timetable</p>
//               </div>
//             </button>
//             <button
//               onClick={() => navigate('/dashboard/courses')}
//               className="bg-white p-6 rounded-lg shadow-md flex items-center hover:bg-gray-50 transition-colors"
//             >
//               <BookOpen className="w-10 h-10 text-indigo-600" />
//               <div className="ml-4 text-left">
//                 <p className="text-2xl font-semibold text-gray-800">Assigned Courses</p>
//               </div>
//             </button>
//             <button
//               onClick={() => navigate('/dashboard/feedback')}
//               className="bg-white p-6 rounded-lg shadow-md flex items-center hover:bg-gray-50 transition-colors"
//             >
//               <MessageCircle className="w-10 h-10 text-indigo-600" />
//               <div className="ml-4 text-left">
//                 <p className="text-2xl font-semibold text-gray-800">Feedback</p>
//               </div>
//             </button>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             <DashboardCard icon={Clock} title="Upcoming Classes" onClick={() => navigate('/dashboard/timetable')}>
//               <ul className="space-y-3">
//                 {upcomingClasses.map((cls) => (
//                   <li key={cls.id} className="flex items-center justify-between">
//                     <div>
//                       <p className="font-medium text-gray-800">{cls.name}</p>
//                       <p className="text-sm text-gray-600">{cls.room}</p>
//                     </div>
//                     <p className="text-indigo-600">{cls.time}</p>
//                   </li>
//                 ))}
//               </ul>
//             </DashboardCard>

//             <DashboardCard icon={Bell} title="Notifications" onClick={() => navigate('/dashboard/notifications')}>
//               <ul className="space-y-3">
//                 {notifications.map((notif) => (
//                   <li key={notif.id} className="flex items-start">
//                     <div className="flex-shrink-0 w-2 h-2 mt-2 bg-indigo-500 rounded-full"></div>
//                     <div className="ml-3">
//                       <p className="text-sm font-medium text-gray-800">{notif.message}</p>
//                       <p className="text-xs text-gray-500">{notif.time}</p>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </DashboardCard>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default UserDashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, BookOpen, MessageCircle, Bell, Clock, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const [userName, setUserName] = useState('');
  const [upcomingClasses] = useState([
    { id: 1, name: 'Advanced Java', time: '10:00 AM', room: 'Room 101' },
    { id: 2, name: 'Java Fundamentals', time: '2:00 PM', room: 'Lab 3' },
  ]);
  const [notifications] = useState([
    { id: 1, message: 'New timetable published for next week', time: '2 hours ago' },
    { id: 2, message: 'Feedback requested for 22SB201 course', time: '1 day ago' },
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('http://localhost:8080/users/profile', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Ensure the token is available
          }
        });
        setUserName(response.data.name); // Adjust based on your user object structure
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserDetails();
  }, []);

  const DashboardCard = ({ icon: Icon, title, onClick, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Icon className="w-8 h-8 text-gray-600 mr-3" />
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        </div>
        <button 
          onClick={onClick} 
          className="text-indigo-600 hover:text-indigo-800 flex items-center"
        >
          View All
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
      {children}
    </div>
  );


  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, {userName}!</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <button
              onClick={() => navigate('/dashboard/timetable')}
              className="bg-white p-6 rounded-lg shadow-md flex items-center hover:bg-gray-50 transition-colors"
            >
              <Calendar className="w-10 h-10 text-indigo-600" />
              <div className="ml-4 text-left">
                <p className="text-2xl font-semibold text-gray-800">My Timetable</p>
              </div>
            </button>
            <button
              onClick={() => navigate('/dashboard/courses')}
              className="bg-white p-6 rounded-lg shadow-md flex items-center hover:bg-gray-50 transition-colors"
            >
              <BookOpen className="w-10 h-10 text-indigo-600" />
              <div className="ml-4 text-left">
                <p className="text-2xl font-semibold text-gray-800">Assigned Courses</p>
              </div>
            </button>
            <button
              onClick={() => navigate('/dashboard/feedback')}
              className="bg-white p-6 rounded-lg shadow-md flex items-center hover:bg-gray-50 transition-colors"
            >
              <MessageCircle className="w-10 h-10 text-indigo-600" />
              <div className="ml-4 text-left">
                <p className="text-2xl font-semibold text-gray-800">Feedback</p>
              </div>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DashboardCard icon={Clock} title="Upcoming Classes" onClick={() => navigate('/dashboard/timetable')}>
              <ul className="space-y-3">
                {upcomingClasses.map((cls) => (
                  <li key={cls.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-800">{cls.name}</p>
                      <p className="text-sm text-gray-600">{cls.room}</p>
                    </div>
                    <p className="text-indigo-600">{cls.time}</p>
                  </li>
                ))}
              </ul>
            </DashboardCard>

            <DashboardCard icon={Bell} title="Notifications" onClick={() => navigate('/dashboard/notifications')}>
              <ul className="space-y-3">
                {notifications.map((notif) => (
                  <li key={notif.id} className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 bg-indigo-500 rounded-full"></div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-800">{notif.message}</p>
                      <p className="text-xs text-gray-500">{notif.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </DashboardCard>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;

