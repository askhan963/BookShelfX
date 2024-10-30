import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from '../context/AuthContext';
import showCase from '../assets/showcase/showcase-1.png';

const Signin = () => {
    const [message, setMessage] = useState("");
    const { loginUser, signInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

    const onSubmit = async (data) => {
        try {
            await loginUser(data.email, data.password);
            alert("Login successful!");
            navigate("/");
        } catch (error) {
            setMessage("Please provide a valid email and password");
            console.error(error);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            alert("Login successful!");
            navigate("/");
        } catch (error) {
            alert("Google sign in failed!");
            console.error(error);
        }
    };

    return (
        <div className='h-auto flex justify-center items-center p-4'>
            <div className="hidden md:block w-1/2">
                <img 
                    className='w-full h-auto object-cover transform transition duration-300 hover:scale-105 rounded-md shadow-lg' 
                    src={showCase} 
                    alt="Showcase"
                />
            </div>
            <div className='w-full lg:w-1/2 max-w-md mx-auto bg-slate-200 shadow-lg rounded-lg p-8'>
                <h2 className='text-2xl font-bold mb-6 text-center text-blue-600'>Welcome Back!</h2>

                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                    <div>
                        <label className='block text-gray-700 text-sm font-medium mb-1' htmlFor="email">Email</label>
                        <input 
                            {...register("email", { required: true })} 
                            type="email" 
                            id="email" 
                            placeholder='Email Address'
                            className='shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        />
                    </div>
                    <div>
                        <label className='block text-gray-700 text-sm font-medium mb-1' htmlFor="password">Password</label>
                        <input 
                            {...register("password", { required: true })} 
                            type="password" 
                            id="password" 
                            placeholder='Password'
                            className='shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        />
                    </div>
                    {
                        message && <p className='text-red-500 text-sm italic'>{message}</p>
                    }
                    <div>
                        <button className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none transition duration-200'>Login</button>
                    </div>
                </form>

                <p className='text-center text-sm text-gray-600 mt-4'>
                    Haven't an account? 
                    <Link to="/register" className='text-blue-500 hover:text-blue-700 font-semibold ml-1'>Register</Link>
                </p>

                {/* Google Sign In */}
                <div className='mt-6'>
                    <button 
                        onClick={handleGoogleSignIn}
                        className='w-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-200 focus:outline-none'
                    >
                        <FaGoogle className='mr-2' />
                        Sign in with Google
                    </button>
                </div>

                <p className='mt-5 text-center text-gray-500 text-xs'>©2025 Book Store. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Signin;
