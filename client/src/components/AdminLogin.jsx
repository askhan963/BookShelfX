import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import getBaseUrl from "../utils/baseURL";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import showCase from '../assets/showcase/admin.png';

const AdminLogin = () => {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${getBaseUrl()}/api/auth/admin`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const auth = response.data;
      if (auth.token) {
        localStorage.setItem("token", auth.token);
        setTimeout(() => {
          localStorage.removeItem("token");
          Swal.fire({
            title: "Session Expired",
            text: "Token has expired. Please login again.",
            icon: "info",
            confirmButtonText: "OK",
          }).then(() => navigate("/"));
        }, 3600 * 1000);
      }

      Swal.fire({
        title: "Login Successful!",
        text: "Welcome to the Admin Dashboard!",
        icon: "success",
        confirmButtonText: "Go to Dashboard",
      }).then(() => navigate("/dashboard"));
    } catch (error) {
      setMessage("Please provide a valid email and password");
      Swal.fire({
        title: "Login Failed",
        text: "Invalid email or password. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error(error);
    }
  };

  return (
    <div className="h-screen flex flex-col md:flex-row justify-center items-center bg-gray-100 p-4">
      {/* Showcase Image */}
      <div className="hidden md:block md:w-1/3 lg:w-1/2">
        <img 
          className="w-full h-auto object-cover transform transition duration-300 hover:scale-105 rounded-md shadow-lg" 
          src={showCase} 
          alt="Admin Login Showcase"
        />
      </div>

      {/* Login Form */}
      <div className="w-full md:w-2/3 lg:w-1/3 bg-white shadow-2xl rounded-lg p-8 mx-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Admin Dashboard Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-1"
              htmlFor="username"
            >
              Username
            </label>
            <input
              {...register("username", { required: true })}
              type="text"
              id="username"
              placeholder="Username"
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              id="password"
              placeholder="Password"
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {message && (
            <p className="text-red-500 text-sm italic text-center">{message}</p>
          )}

          <div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200 focus:outline-none">
              Login
            </button>
          </div>
        </form>

        <p className="mt-5 text-center text-gray-500 text-xs">
          ©2025 Book Store. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
