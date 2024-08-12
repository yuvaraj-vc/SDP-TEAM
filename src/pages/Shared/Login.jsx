import React, { useState } from "react";
import cn from 'classnames';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authService } from "@/service/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const [formData,setFormData]=useState({
    email:'',
    password:''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};


  const handledash = async (e) => {
    e.preventDefault();

      authService.setToken(token);
    // try {
    //   console.log(formData)
    //   if (formData.email === "admin@gmail.com" && formData.password === "admin123") {
    //     navigate("/admin/dashboard");
    //   } 
    //   else{
    //   const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
    //     // name: formData.name,
    //       email: formData.email,
    //       password: formData.password
    //       // phoneNumber: formData.phoneNumber
    //   });
    //   console.log("User registered", response.data);
    //   alert("Login successful");
    //   navigate('/user/subjects');
    // }
    try {
      const role = authService.getUserRole();

      if (role) {
          if (role === 'USER') {
              navigate('/user/subjects');
          } else if (role === 'ADMIN') {
              navigate('/admin/dashboard');
          } else {
              // toast.error('Unknown role.', {
              //     position: "top-right",
              //     autoClose: 3000,
              //     hideProgressBar: false,
              //     closeOnClick: true,
              //     pauseOnHover: true,
              //     draggable: true,
              //     theme: "light",
              // });
              setErrorMessage(error.response?.data?.message || 'Unknown role');

          }
      } else {
        setErrorMessage(error.response?.data?.message || 'Role not found in token');

      }
  }
  catch (error) {
      // console.error("There was an error registering the user", error);
      // setError(error.response?.data || 'Registration failed');
      setErrorMessage(error.response?.data?.message || 'Invalid credentials');

  }
  }

  return (
    <div className="v1 font-mono">
      <div className="m-0 flex justify-center bg-cover items-center">
        <form 
          className="h-[50vh] w-[28vw] flex bg-[rgb(198,_193,_193)] bg-transparent backdrop-filter backdrop-blur-[3px] justify-center items-center flex-col gap-[.5rem] [box-shadow:3.6px_2.4px_6.6px_-20px_rgba(0,_0,_0,_0.139),_8.5px_5.6px_14.2px_-20px_rgba(0,_0,_0,_0.165),_15.2px_10.1px_23.7px_-20px_rgba(0,_0,_0,_0.177),_25.2px_16.7px_36.4px_-20px_rgba(0,_0,_0,_0.186),_41.5px_27.5px_55.9px_-20px_rgba(0,_0,_0,_0.198),_72.6px_48.1px_96.7px_-20px_rgba(0,_0,_0,_0.222),_157px_104px_279px_-20px_rgba(0,_0,_0,_0.29)] rounded-[10px] border-[1px] border-[--inp-text] decoration-clone"
          onSubmit={handledash}
        >
          <h2 className="--log-text font-bold text-[200%]">Login</h2>
          <br />
          <input
            type="text"
            id="name"
            name="email"
            className={cn(
              "w-4/5 p-4 bg-[rgb(252,_250,_250)] rounded-[5px] text-black",
              "focus:border-b-[4px_solid_#ea8f21] text-black"
            )}
            placeholder="Email"
            required
            value={formData.email}
            // onChange={(e) => setUsername(e.target.value)}
            onChange={handleChange}
          
          />
          <input
            type="password"
            id="pass1"
            className={cn(
              "w-4/5 p-4 bg-[rgb(252,_250,_250)] rounded-[5px]",
              "focus:border-b-[4px_solid_#ea8f21] text-black"
            )}
            placeholder="Password"
            name="password"
            required
            value={formData.password}
            // onChange={(e) => setPassword(e.target.value)}
            onChange={handleChange}
          />
          {errorMessage && (
            <p className="text-red-500 text-xl mt-2">{errorMessage}</p>
          )}
          <br />
          <button 
            type="submit"
            className={cn(
              "outline-[none] flex justify-center items-center flex-col no-underline rounded-[5px] w-[30%] h-[10%] border-[none] bg-[rgb(227,_227,_232)] text-[#020227] duration-700",
              "hover:bg-[#060620] hover:text-[rgb(227,_227,_232)] hover:border-[1px] hover:border-[solid] hover:border-[rgb(250,250,250)] hover:decoration-clone"
            )}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
