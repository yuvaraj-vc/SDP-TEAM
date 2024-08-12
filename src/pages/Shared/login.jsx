// import React, { useState } from 'react';
// import { Lock, Facebook, Twitter } from 'lucide-react';
// import { NavLink, useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email === 'admin@gmail.com') {
//       navigate('/admin/dashboard');
//     } else if (email === 'user@gmail.com') {
//       navigate('/user/dashboard');
//     } else {
//       console.log('Invalid credentials');
//     }
//   };

//   return (
//     <div>
//       <div className="text-center mt-24">
//         <div className="flex items-center justify-center">
//           <Lock className="w-12 h-12 text-blue-500" />
//         </div>
//         <h2 className="text-4xl tracking-tight">
//           Sign in to your account
//         </h2>
//         <span className="text-sm">
//           or <NavLink to="/register" className="text-blue-500">register a new account</NavLink>
//         </span>
//       </div>
//       <div className="flex justify-center my-2 mx-4 md:mx-0">
//         <form className="w-full max-w-xl bg-white rounded-lg shadow-md p-6" onSubmit={handleSubmit}>
//           <div className="flex flex-wrap -mx-3 mb-6">
//             <div className="w-full md:w-full px-3 mb-6">
//               <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">Email address</label>
//               <input
//                 className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="w-full md:w-full px-3 mb-6">
//               <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">Password</label>
//               <input
//                 className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="w-full flex items-center justify-between px-3 mb-3">
//               <label htmlFor="remember" className="flex items-center w-1/2">
//                 <input type="checkbox" name="remember" id="remember" className="mr-1 bg-white shadow" />
//                 <span className="text-sm text-gray-700 pt-1">Remember Me</span>
//               </label>
//               <div className="w-1/2 text-right">
//                 <NavLink to="/forgot-password" className="text-blue-500 text-sm tracking-tight">Forget your password?</NavLink>
//               </div>
//             </div>
//             <div className="w-full md:w-full px-3 mb-6">
//               <button className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">
//                 Sign in
//               </button>
//             </div>
//             <div className="mx-auto -mb-6 pb-1">
//               <span className="text-center text-xs text-gray-700">or sign up with</span>
//             </div>
//             <div className="flex items-center w-full mt-2">
//               <div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
//                 <button className="appearance-none flex items-center justify-center w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
//                   <Facebook className="h-6 w-6 text-gray-700" />
//                 </button>
//               </div>
//               <div className="w-full md:w-1/3 px-3 pt-4 mx-2">
//                 <button className="appearance-none flex items-center justify-center w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
//                   <Twitter className="h-6 w-6 text-gray-700" />
//                 </button>
//               </div>
//               <div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
//                 <button className="appearance-none flex items-center justify-center w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
//                   <svg className="h-6 w-6 fill-current text-gray-700" viewBox="0 0 48 48">
//                     <path d="M23.82 2.54c-.73 0-1.44.06-2.14.18C19.43 1.11 17.88 0 16.18 0 12.12 0 8.84 3.28 8.84 7.36c0 1.35.27 2.63.76 3.78L8.2 12v7.27l5.6 2.61 2.47-2.29v-5.1l-3.61-1.72c-.65-1.24-.98-2.61-.98-4.04 0-2.53 2.1-4.62 4.62-4.62.72 0 1.45.07 2.14.21 2.36.52 4.56 1.85 6.35 3.74 1.12 1.15 2.11 2.44 2.87 3.85.33.62.55 1.29.69 2 .06.28.09.56.09.84 0 .28-.03.56-.09.84-.14.71-.36 1.38-.69 2-1.67 3.21-5.06 5.38-8.84 5.38-1.23 0-2.43-.27-3.53-.76l-5.27 2.51v7.25l7.85 3.74c1.24.6 2.6.92 4.04.92 4.5 0 8.58-2.23 11.08-5.66C28.68 7.24 26.34 4.3 23.82 2.54z"/>
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import React, { useState } from "react";
// import { Lock } from "lucide-react";
// import { NavLink, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handledash = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
//         email: formData.email,
//         password: formData.password
//       });
//       alert("Login successful");
//       navigate('/user/dashboard');
//     } catch (error) {
//       setErrorMessage(error.response?.data?.message || 'Invalid credentials');
//     }
//   };

//   return (
//     <div className="text-center mt-24">
//       <div className="flex items-center justify-center">
//         <Lock className="w-12 h-12 text-blue-500" />
//       </div>
//       <h2 className="text-4xl tracking-tight">
//         Sign in to your account
//       </h2>
//       <span className="text-sm">
//         or <NavLink to="/register" className="text-blue-500">register a new account</NavLink>
//       </span>
//       <div className="flex justify-center my-2 mx-4 md:mx-0">
//         <form 
//           className="w-full max-w-xl bg-white rounded-lg shadow-md p-6" 
//           onSubmit={handledash}
//         >
//           <div className="flex flex-wrap -mx-3 mb-6">
//             <div className="w-full md:w-full px-3 mb-6">
//               <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">Email address</label>
//               <input
//                 className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="w-full md:w-full px-3 mb-6">
//               <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">Password</label>
//               <input
//                 className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="w-full flex items-center justify-between px-3 mb-3">
//               <label htmlFor="remember" className="flex items-center w-1/2">
//                 <input type="checkbox" name="remember" id="remember" className="mr-1 bg-white shadow" />
//                 <span className="text-sm text-gray-700 pt-1">Remember Me</span>
//               </label>
//               <div className="w-1/2 text-right">
//                 <NavLink to="/forgot-password" className="text-blue-500 text-sm tracking-tight">Forget your password?</NavLink>
//               </div>
//             </div>
//             {errorMessage && (
//               <p className="text-red-500 text-xl mt-2">{errorMessage}</p>
//             )}
//             <div className="w-full md:w-full px-3 mb-6">
//               <button 
//                 type="submit"
//                 className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none"
//               >
//                 Sign in
//               </button>
//             </div>
//             <div className="mx-auto -mb-6 pb-1">
//               <span className="text-center text-xs text-gray-700">or sign up with</span>
//             </div>
//             <div className="flex items-center w-full mt-2">
//               {/* Social Login Buttons */}
//               <div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
//                 <button className="appearance-none flex items-center justify-center w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 focus:outline-none">
//                   {/* Replace with a proper icon for Facebook */}
//                   <span className="h-6 w-6 text-gray-700">FB</span>
//                 </button>
//               </div>
//               <div className="w-full md:w-1/3 px-3 pt-4 mx-2">
//                 <button className="appearance-none flex items-center justify-center w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 focus:outline-none">
//                   {/* Replace with a proper icon for Twitter */}
//                   <span className="h-6 w-6 text-gray-700">TW</span>
//                 </button>
//               </div>
//               <div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
//                 <button className="appearance-none flex items-center justify-center w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 focus:outline-none">
//                   {/* Replace with a proper icon */}
//                   <span className="h-6 w-6 text-gray-700">G+</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { Lock } from "lucide-react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import { useAuth } from "@/components/context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
        email: formData.email,
        password: formData.password
      });
      
      const { token, user } = response.data;
      if (!user) {
        throw new Error('User data is missing from the response');
      }
      
      const role = user.role;
      
      login(token, role, user);
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage(error.response?.data?.message || 'Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="text-center mt-24">
      <div className="flex items-center justify-center">
        <Lock className="w-12 h-12 text-blue-500" />
      </div>
      <h2 className="text-4xl tracking-tight">
        Sign in to your account
      </h2>
      <span className="text-sm">
        or <NavLink to="/register" className="text-blue-500">register a new account</NavLink>
      </span>
      <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form 
          className="w-full max-w-xl bg-white rounded-lg shadow-md p-6" 
          onSubmit={handleLogin}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">Email address</label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">Password</label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full flex items-center justify-between px-3 mb-3">
              <label htmlFor="remember" className="flex items-center w-1/2">
                <input type="checkbox" name="remember" id="remember" className="mr-1 bg-white shadow" />
                <span className="text-sm text-gray-700 pt-1">Remember Me</span>
              </label>
              <div className="w-1/2 text-right">
                <NavLink to="/forgot-password" className="text-blue-500 text-sm tracking-tight">Forget your password?</NavLink>
              </div>
            </div>
            {errorMessage && (
              <p className="text-red-500 text-xl mt-2">{errorMessage}</p>
            )}
            <div className="w-full md:w-full px-3 mb-6">
              <button 
                type="submit"
                className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none"
              >
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;