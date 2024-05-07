import React, { useState } from 'react';

import { HiEye, HiEyeOff } from 'react-icons/hi'; 
import { Link, useNavigate } from 'react-router-dom';
import { MouseHover } from '../Feature/MouseImageTrail';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`http://localhost:8080/user/${email}/${password}`);
      console.log(response);
      
      if (!response.ok) {
        throw new Error('Login failed');
      }
      
      navigate('/');
      const data = await response.json();
      console.log('Login successful:', data);
      // Add logic for successful login, e.g., redirect or set user authentication state
    } catch (error) {
      console.error('Error:', error);
      // Handle login failure, e.g., show an error message
    }
  };
  

  return (

    <div
    className='bg-cover h-screen w-full flex items-center justify-start '> 
    <div className='w-[450px]   p-6  rounded-md shadow-md'>
      <h2 className='text-2xl  font-pacifico font-semibold mb-4'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block font-pacifico  text-orange-500 text-xl font-bold mb-2' htmlFor='email'>
            Email:
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={handleEmailChange}
            className= ' text-white font-pacifico w-full bg-transparent p-2 border rounded-md'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block font-pacifico  text-orange-500 text-xl font-bold mb-2' htmlFor='password'>
            Password:
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id='password'
            name='password'
            value={password}
            onChange={handlePasswordChange}
            className=' text-white font-pacifico w-full  bg-transparent p-2 border rounded-md'
            required
          />
          <button
            type='button'
            onClick={toggleShowPassword}
            className='absolute top-[322px] transform -translate-y-1/2 left-[390px] text-xl focus:outline-none text-white'
          >
            {showPassword ? <HiEyeOff /> : <HiEye />}
          </button>
        </div>
        <button type='submit' onClick={handleSubmit} className='bg-emerald-950 px-8 mt-2 font-pacifico text-white py-2 rounded-md hover:bg-orange-500'>
          Login
        </button>
      </form>
      <div className='mt-4'>
        <p className='text-sm'>
          <a href='#' className='text-white font-pacifico hover:underline'>
            Forgot Password?
          </a>
        </p>
        <p className='text-sm flex items-center font-pacifico text-white mt-2'>
          Don't have an account?{' '}
          <Link to={`/signup/`}> 
          <h1 className='text-orange-500 px-4 text-xl font-pacifico hover:underline'>
            Sign Up
          </h1>
          </Link> 
        </p>
      </div>
    </div>
    </div>

    
  );
};

export default Login;
