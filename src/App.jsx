// import React from 'react'
// import Login from './pages/Shared/login'
// import Register from './pages/Shared/register'
// import Home from './pages/Shared/Home'
// import Error from './pages/Shared/Error'
// import { BrowserRouter, Routes,Route } from 'react-router-dom'
// import Weblayout from './components/layout/weblayout'
// import Userdashboard from './pages/User/Userdashboard'
// import AdminLayout from './components/layout/Adminlayout'
// import Userlayout from './components/layout/Userlayout'
// import Admindashboard from './pages/Admin/Admindashboard'
// import Admincourses from './pages/Admin/Admincourses'
// import Admintimetable from './pages/Admin/Admintimetable'
// import Admintutors from './pages/Admin/Admintutors'
// import Usertimetable from './pages/User/Usertimetable'
// import Usercourse from './pages/User/Usercourse'
// import Userfeedback from './pages/User/Userfeedback'
// import Aboutus from './pages/Shared/Aboutus'
// import Userprofile from './pages/User/Userprofile'


// // const App = () => {
// //   return (
// //    <div>
// //     <BrowserRouter>
// //     <Routes>
// //      <Route element={<Weblayout/>}>
// //       <Route path='/' element={<Home/>}/>
// //       <Route path='login' element={<Login/>}/>
// //       <Route path='register' element={<Register/>}/>
// //       <Route path='*' element={<Error/>}/>
// //       </Route>
// //       <Route element={<Userlayout />}>
// //         <Route path='/dashboard' element={<Userdashboard />} />
// //       </Route> 

// //        <Route element={<AdminLayout />}>
// //         <Route path='/admin/dashboard' element={<Admindashboard />} />
// //       </Route>
// //     </Routes>
// //     </BrowserRouter>
// //   </div>
// //   )
// // }

// // export default App




// const App = () => {
//   return (
  
//       <BrowserRouter>
//         <Routes>
//           <Route element={<Weblayout />}>
//             <Route path='/' element={<Home />} />
//             <Route path='login' element={<Login />} />
//             <Route path='register' element={<Register />} />
//             <Route path='*' element={<Error />} />
//           </Route>
//           <Route element={<Userlayout />}>
//             <Route path='/dashboard' element={<Userdashboard />} />
//           </Route>
//           <Route element={<AdminLayout />}>
//             <Route path='/admin/dashboard' element={<Admindashboard />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>

//   );
// }

// export default App;


// const App = () => {
//   return (
  
//       <BrowserRouter>
//         <Routes>
//           <Route element={<Weblayout />}>
//             <Route path='/' element={<Home />} />
//             <Route path='login' element={<Login />} />
//             <Route path='register' element={<Register />} />
//             <Route path='aboutus' element={<Aboutus />} />
//           </Route>
//           <Route element={<Userlayout />}>
//             <Route path='/user/dashboard' element={<Userdashboard />} />
//             <Route path='/user/profile' element={<Userprofile />} />
//             <Route path='/user/timetable' element={<Usertimetable />} />
//             <Route path='/user/courses' element={<Usercourse />} />
//             <Route path='/user/feedback' element={<Userfeedback />} />
//           </Route>
//           <Route element={<AdminLayout />}>
//             <Route path='/admin/dashboard' element={<Admindashboard />} />
//             <Route path='/admin/tutors' element={<Admintutors />} />
//             <Route path='/admin/courses' element={<Admincourses />} />
//             <Route path='/admin/timetables' element={<Admintimetable/>} />
//           </Route>
//             <Route path='*' element={<Error />} />
//         </Routes>
//       </BrowserRouter>
   
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/context/AuthContext';

// Layout Components
import Weblayout from './components/layout/weblayout';
import Userlayout from './components/layout/Userlayout';
import AdminLayout from './components/layout/Adminlayout';

// Page Components
import Login from './pages/Shared/login';
import Register from './pages/Shared/register';
import Home from './pages/Shared/Home';
import Aboutus from './pages/Shared/Aboutus';
import Error from './pages/Shared/Error';
import Userdashboard from './pages/User/Userdashboard';
import Userprofile from './pages/User/Userprofile';
import Usertimetable from './pages/User/Usertimetable';
import Usercourse from './pages/User/Usercourse';
import Userfeedback from './pages/User/Userfeedback';
import Admindashboard from './pages/Admin/Admindashboard';
import Admincourses from './pages/Admin/Admincourses';
import Admintimetable from './pages/Admin/Admintimetable';
import Admintutors from './pages/Admin/Admintutors';


const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isLoggedIn, userRole } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const AppRoutes = () => {
  const { isLoggedIn, userRole } = useAuth();

  console.log('isLoggedIn:', isLoggedIn);
  console.log('userRole:', userRole);

  return (
    <Routes>
      <Route element={<Weblayout />}>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='aboutus' element={<Aboutus />} />
      </Route>

      <Route element={<ProtectedRoute allowedRoles={['USER']}><Userlayout /></ProtectedRoute>}>
        <Route path='/user/dashboard' element={<Userdashboard />} />
        <Route path='/user/profile' element={<Userprofile />} />
        <Route path='/user/timetable' element={<Usertimetable />} />
        <Route path='/user/courses' element={<Usercourse />} />
        <Route path='/user/feedback' element={<Userfeedback />} />
      </Route>

      <Route element={<ProtectedRoute allowedRoles={['ADMIN']}><AdminLayout /></ProtectedRoute>}>
        <Route path='/admin/dashboard' element={<Admindashboard />} />
        <Route path='/admin/tutors' element={<Admintutors />} />
        <Route path='/admin/courses' element={<Admincourses />} />
        <Route path='/admin/timetables' element={<Admintimetable />} />
      </Route>

      <Route path='*' element={<Error />} />
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
