// import React, { useState, useEffect } from 'react';
// import { Users, FileText, Calendar } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const AdminDashboard = () => {
//   const [analytics, setAnalytics] = useState({
//     users: 0,
//     courses: 0,
//     timetables: 0,
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     // Simulating data fetch
//     setTimeout(() => {
//       setAnalytics({
//         users: 150,
//         courses: 50,
//         timetables: 20,
//       });
//     }, 1000);
//   }, []);

//   return (
//     <div className="min-h-screen bg-slate-100 p-6">
//       <h1 className="text-3xl font-bold text-slate-800 mb-6">Admin Dashboard</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <button
//           onClick={() => navigate('/admin/users')}
//           className="bg-white p-6 rounded-lg shadow-md flex items-center hover:bg-indigo-50 transition-colors"
//         >
//           <Users className="w-10 h-10 text-indigo-600" />
//           <div className="ml-4 text-left">
//             <p className="text-2xl font-semibold text-slate-800">{analytics.users}</p>
//             <p className="text-slate-600">Users</p>
//           </div>
//         </button>
//         <button
//           onClick={() => navigate('/admin/courses')}
//           className="bg-white p-6 rounded-lg shadow-md flex items-center hover:bg-indigo-50 transition-colors"
//         >
//           <FileText className="w-10 h-10 text-indigo-600" />
//           <div className="ml-4 text-left">
//             <p className="text-2xl font-semibold text-slate-800">{analytics.courses}</p>
//             <p className="text-slate-600">Courses</p>
//           </div>
//         </button>
//         <button
//           onClick={() => navigate('/admin/timetables')}
//           className="bg-white p-6 rounded-lg shadow-md flex items-center hover:bg-indigo-50 transition-colors"
//         >
//           <Calendar className="w-10 h-10 text-indigo-600" />
//           <div className="ml-4 text-left">
//             <p className="text-2xl font-semibold text-slate-800">{analytics.timetables}</p>
//             <p className="text-slate-600">Generated Timetables</p>
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

// import React, { useState, useEffect } from 'react';
// import { Users, FileText, Calendar, BarChart2, Settings, Bell, Search } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const AdminDashboard = () => {
//   const [analytics, setAnalytics] = useState({
//     users: 0,
//     courses: 0,
//     timetables: 0,
//   });
//   const [recentActivity, setRecentActivity] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {
//     // Simulating data fetch
//     setTimeout(() => {
//       setAnalytics({
//         users: 150,
//         courses: 50,
//         timetables: 20,
//       });
//       setRecentActivity([
//         { id: 1, action: 'New user registered', time: '2 minutes ago' },
//         { id: 2, action: 'Timetable generated for CS Department', time: '1 hour ago' },
//         { id: 3, action: 'New course added: Advanced Machine Learning', time: '3 hours ago' },
//       ]);
//     }, 1000);
//   }, []);

//   const StatCard = ({ icon: Icon, title, value, onClick }) => (
//     <button
//       onClick={onClick}
//       className="bg-white p-6 rounded-lg shadow-md flex items-center hover:bg-gray-50 transition-colors"
//     >
//       <Icon className="w-10 h-10 text-gray-600" />
//       <div className="ml-4 text-left">
//         <p className="text-2xl font-semibold text-gray-800">{value}</p>
//         <p className="text-gray-600">{title}</p>
//       </div>
//     </button>
//   );

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <nav className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
//             <div className="flex items-center space-x-4">
//               <button className="text-gray-600 hover:text-gray-800">
//                 <Bell className="w-6 h-6" />
//               </button>
//               <button className="text-gray-600 hover:text-gray-800">
//                 <Settings className="w-6 h-6" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//         <div className="px-4 py-6 sm:px-0">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             <StatCard icon={Users} title="Users" value={analytics.users} onClick={() => navigate('/admin/users')} />
//             <StatCard icon={FileText} title="Courses" value={analytics.courses} onClick={() => navigate('/admin/courses')} />
//             <StatCard icon={Calendar} title="Generated Timetables" value={analytics.timetables} onClick={() => navigate('/admin/timetables')} />
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             <div className="bg-white shadow rounded-lg p-6">
//               <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
//               <ul className="space-y-4">
//                 {recentActivity.map((activity) => (
//                   <li key={activity.id} className="flex items-center space-x-3">
//                     <div className="flex-shrink-0">
//                       <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-sm font-medium text-gray-900">{activity.action}</p>
//                       <p className="text-sm text-gray-500">{activity.time}</p>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//               <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-500">View all activity</button>
//             </div>

//             <div className="bg-white shadow rounded-lg p-6">
//               <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
//               <div className="grid grid-cols-2 gap-4">
//                 <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
//                   Generate New Timetable
//                 </button>
//                 <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded">
//                   Add New Course
//                 </button>
//                 <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded">
//                   Manage Users
//                 </button>
//                 <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded">
//                   View Reports
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;

// import React from 'react';
// import { Users, FileText, Calendar, Bell, Settings } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const AdminDashboard = () => {
//   const analytics = {
//     users: 150,
//     courses: 50,
//     timetables: 20,
//   };

//   const recentActivity = [
//     { id: 1, action: 'New user registered', time: '2 minutes ago' },
//     { id: 2, action: 'Timetable generated for CS Department', time: '1 hour ago' },
//     { id: 3, action: 'New course added: Advanced Machine Learning', time: '3 hours ago' },
//   ];

//   const navigate = useNavigate();

//   const StatCard = ({ icon: Icon, title, value, onClick }) => (
//     <button
//       onClick={onClick}
//       className="bg-white p-6 rounded-lg shadow-md flex items-center hover:bg-gray-50 transition-colors"
//     >
//       <Icon className="w-10 h-10 text-gray-600" />
//       <div className="ml-4 text-left">
//         <p className="text-2xl font-semibold text-gray-800">{value}</p>
//         <p className="text-gray-600">{title}</p>
//       </div>
//     </button>
//   );

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <nav className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
//             <div className="flex items-center space-x-4">
//               <button className="text-gray-600 hover:text-gray-800">
//                 <Bell className="w-6 h-6" />
//               </button>
//               <button className="text-gray-600 hover:text-gray-800">
//                 <Settings className="w-6 h-6" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//         <div className="px-4 py-6 sm:px-0">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             <StatCard icon={Users} title="Users" value={analytics.users} onClick={() => navigate('/admin/users')} />
//             <StatCard icon={FileText} title="Courses" value={analytics.courses} onClick={() => navigate('/admin/courses')} />
//             <StatCard icon={Calendar} title="Generated Timetables" value={analytics.timetables} onClick={() => navigate('/admin/timetables')} />
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             <div className="bg-white shadow rounded-lg p-6">
//               <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
//               <ul className="space-y-4">
//                 {recentActivity.map((activity) => (
//                   <li key={activity.id} className="flex items-center space-x-3">
//                     <div className="flex-shrink-0">
//                       <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-sm font-medium text-gray-900">{activity.action}</p>
//                       <p className="text-sm text-gray-500">{activity.time}</p>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="bg-white shadow rounded-lg p-6">
//               <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
//               <div className="grid grid-cols-2 gap-4">
//                 <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
//                   Generate New Timetable
//                 </button>
//                 <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded">
//                   Add New Course
//                 </button>
//                 <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded">
//                   Manage Users
//                 </button>
//                 <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded">
//                   View Reports
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;
import React from 'react';
import { Users, FileText, Calendar, Bell, Settings } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const AdminDashboard = () => {
  const analytics = {
    users: 150,
    courses: 50,
    timetables: 20,
  };

  const recentActivity = [
    { id: 1, action: 'New user registered', time: '2 minutes ago' },
    { id: 2, action: 'Timetable generated for CS Department', time: '1 hour ago' },
    { id: 3, action: 'New course added: Advanced Machine Learning', time: '3 hours ago' },
  ];

  const navigate = useNavigate();

  const StatCard = ({ icon: Icon, title, value, onClick }) => (
    <button
      onClick={onClick}
      className="bg-white p-6 rounded-lg shadow-md flex items-center hover:bg-gray-50 transition-colors"
    >
      <Icon className="w-10 h-10 text-gray-600" />
      <div className="ml-4 text-left">
        <p className="text-2xl font-semibold text-gray-800">{value}</p>
        <p className="text-gray-600">{title}</p>
      </div>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
            
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard icon={Users} title="Users" value={analytics.users} onClick={() => navigate('/admin/users')} />
            <StatCard icon={FileText} title="Courses" value={analytics.courses} onClick={() => navigate('/admin/courses')} />
            <StatCard icon={Calendar} title="Generated Timetables" value={analytics.timetables} onClick={() => navigate('/admin/timetables')} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
              <ul className="space-y-4">
                {recentActivity.map((activity) => (
                  <li key={activity.id} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                <Link to="/admin/timetables" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded text-center">
                  Generate New Timetable
                </Link>
                <Link to="/admin/courses" className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded text-center">
                  Add New Course
                </Link>
                <Link to="/admin/tutors" className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded text-center">
                  Manage Users
                </Link>
                <Link to="/view-reports" className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded text-center">
                  View Reports
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
