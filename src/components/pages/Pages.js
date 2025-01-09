import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route instead of Switch

import { GlobalState } from '../../GlobalState';
import Login from '../pages/Login/login'; // Ensure correct capitalization of component names
import Home from '../pages/main/home'; 
import About from '../pages/main/about'; 
import Services from '../pages/main/service';// Ensure correct capitalization of component names
import Signup from '../pages/Register/signup'; // Ensure correct capitalization of component names
import Contact from './main/contact';
import Projects from './main/projects';
import Web from './main/services/webdev';
import Grapic from './main/services/grapic';
import Mobile from './main/services/mobile';
import Salesforce from './main/services/salesforce';
import Student from './main/services/students';
import Uiux from './main/services/uiux';
import Wordpress from './main/services/wordpress';
import Portfolio from './main/portfolio';
import Careers from './main/Careers';
import Marketing from './main/services/marketing';


function Pages() {
  const state = useContext(GlobalState);
  // const [isLogged] = state.userAPI.isLogged
  // const [isAdmin] = state.userAPI.isAdmin
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/Marketing" element={<Marketing />} />

      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/Careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/Grapic" element={<Grapic />} />
      <Route path="/Mobile" element={<Mobile />} />
      <Route path="/Salesforce" element={<Salesforce />} />
      <Route path="/Student" element={<Student />} />
      <Route path="/Uiux" element={<Uiux />} />
      <Route path="/Wordpress" element={<Wordpress />} />
      <Route path="/web" element={<Web />} />
    </Routes>
  );
}

export default Pages;
