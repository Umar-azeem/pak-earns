import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginFrom from './components/LoginFrom';
import SignUp from './components/SignUp';
import { Route,Routes, } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import App from './App';
import About from './components/About';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Navbar />
    <Routes>
    <Route path="/"    element={<App />}/> 
    <Route path="/about"   element={<About />}/> 
    <Route path="/login-from" element={<LoginFrom />}/>
    <Route path="/sign-up"    element={<SignUp />}/> 
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
