

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthProvider';

function Login() {
  // form data state
  const [formData, setFormData] = useState({
    
    email: "",
    password: ""
  });

  // error & loading state
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {setAuthUser}=useAuth();

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // signup handler
  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        {
         
          email: formData.email,
          password: formData.password,
        },
        {
          withCredentials: true,
        }
      );
      alert(data.message || "Signup succeeded");
      localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        setAuthUser(data.token);

      navigate("/Login");
    } catch (error) {
      const msg = error?.response?.data?.errors || "Signup Failed";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-[#1e1e1e] text-white w-full max-w-md rounded-2xl p-6 shadow-lg">
        
        {/* heading */}
        <h1 className="text-white items-center justify-center text-center text-xl font-semibold mb-4">Login</h1>

      

        {/* email */}
        <div className="mb-4">
          <input
            className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#7a6ff0]"
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* password */}
        <div className="mb-4">
          <input
            className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#7a6ff0]"
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* error message */}
        {error && <span className="text-red-500 text-sm">{error}</span>}

        {/* terms and condition */}
        <p className="text-xs text-gray-400 mt-4 mb-2">
          By signing up or logging in, you consent to Deepseek's{' '}
          <a href="#" className="underline text-blue-400">Terms of Use</a> and{' '}
          <a href="#" className="underline text-blue-400">Privacy Policy</a>.
        </p>

        {/* login button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-[#7a6ff0] text-white py-2 rounded-md hover:bg-[#675bd3] transition duration-200"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* login link */}
        <div className="flex justify-between mt-4 text-sm">
          <span className="text-[#7a6ff0] hover:underline">Haven't Account? </span>
          <Link to="/Signup" className="text-[#7a6ff0] hover:underline">Signup</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

