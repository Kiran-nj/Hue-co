import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login.jsx';
import Hove from './Components/Hove.jsx';
import SignUp from './Components/Signup.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Routes>    
     <Route path="/" element={<App />} />
     {/* <Route path="/shop/:movieId/:genId" element={<SingleMovie />} /> */}
     <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<SignUp />} /> 
   </Routes>
 </BrowserRouter>
)
