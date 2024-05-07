import React, { useState } from 'react';

import { HiEye, HiEyeOff } from 'react-icons/hi'; 
import { Link, useNavigate } from 'react-router-dom';




const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleusernameChange = (e) => {
    setUserName(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {

   
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8080/user/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
  
      if (!response.ok) {
        throw new Error('User registration failed');
      }

      const data = await response.json();
      console.log(data);

    // Redirect to login page
    navigate('/login');

    // Display alert
    alert('Sign up completed. Please Log in.');


    } catch (error) {
      console.error('Error:', error);
      alert('Sign up failed. Please try again.');
    }
  };

//    JSON data codes


  return (

    <div
    className='bg-cover h-screen flex items-center justify-start '
/*     style={{
      backgroundImage: `url(${Background})`,
    }} */>
    <div className='w-[450px]   p-6  rounded-md shadow-md'>
      <h2 className='text-2xl  font-pacifico font-semibold mb-4'>Login</h2>
      <form onSubmit={handleSubmit}>
      <div className='mb-4'>
          <label className='block font-pacifico  text-orange-500 text-xl font-bold mb-2' htmlFor='email'>
            UserName:
          </label>
          <input
            type='text'
            id='username'
            name='uname'
            value={username}
            onChange={handleusernameChange}
            className= ' text-white font-pacifico w-full bg-transparent p-2 border rounded-md'
            required
          />
        </div>
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
            className='absolute bottom-[200px] transform -translate-y-1/2 left-[390px] text-xl focus:outline-none text-white'
          >
            {showPassword ? <HiEyeOff /> : <HiEye />}
          </button>
        </div>
        <button onClick={handleSubmit} type='submit' className='bg-emerald-950 px-8 mt-2 font-pacifico text-white py-2 rounded-md hover:bg-orange-500'>
          SignUp
        </button>
      </form>
      <div className='mt-4'>
{/*         <p className='text-sm'>
          <a href='#' className='text-white font-pacifico hover:underline'>
            Forgot Password?
          </a>
        </p> */}
        <p className='text-sm flex items-center font-pacifico text-white mt-2'>
          already have an account?{' '}
          <Link to={`/login/`}> 
          <h1 className='text-orange-500 px-4 text-xl font-pacifico hover:underline'>
            Login
          </h1>
          </Link> 
        </p>
      </div>
    </div>
    </div>

    
  );
};

export default SignUp;
