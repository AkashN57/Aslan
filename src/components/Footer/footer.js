import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import { GiLion } from "react-icons/gi";

function Footer() {
 const footerLinks = {
   company: [
     { name: 'Home', path: '/' },
     { name: 'About', path: '/about' },
     { name: 'Portfolio', path: '/Portfolio' },
     { name: 'Careers', path: '/Careers' },
     { name: 'Contact', path: '/contact' }
   ],
   services: [
     { name: 'Web Development', path: '/web' },
     { name: 'Mobile Development', path: '/Mobile' },
     { name: 'Graphic Design', path: '/Grapic' },
     { name: 'WordPress', path: '/Wordpress' },
     { name: 'Academic Services', path: '/Student' }
   ],
   contact: {
     phone: '+94-773818603',
     email: 'aslanai.it.2020@gmail.com',
     address: '12/1-Hindu College View Lane, Urumpirai East, Jaffna, Sri Lanka',
     hours: 'Mon - Fri: 9:00 AM - 6:00 PM'
   },
   socialLinks: [
     { icon: <FaFacebookF />, path: '#', label: 'Facebook' },
     { icon: <FaLinkedinIn />, path: '#', label: 'LinkedIn' },
     { icon: <FaTwitter />, path: '#', label: 'Twitter' },
     { icon: <FaInstagram />, path: '#', label: 'Instagram' },
     { icon: <FaGithub />, path: '#', label: 'GitHub' }
   ]
 };

 return (
   <footer className="bg-gray-900">
     {/* Main Footer */}
     <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
       <div className="mb-8">
         <Link to="/" className="flex items-center space-x-2">
           <GiLion className="text-4xl text-primary" />
           <span className="text-2xl font-bold text-white">Aslan<span className="text-primary">AI</span></span>
         </Link>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
         {/* Quick Links */}
         <div>
           <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
           <ul className="space-y-4">
             {footerLinks.company.map((link) => (
               <li key={link.path}>
                 <Link 
                   to={link.path}
                   className="text-gray-400 hover:text-primary transition-colors duration-300"
                 >
                   {link.name}
                 </Link>
               </li>
             ))}
           </ul>
         </div>

         {/* Services */}
         <div>
           <h3 className="text-white text-lg font-semibold mb-6">Our Services</h3>
           <ul className="space-y-4">
             {footerLinks.services.map((service) => (
               <li key={service.path}>
                 <Link 
                   to={service.path}
                   className="text-gray-400 hover:text-primary transition-colors duration-300"
                 >
                   {service.name}
                 </Link>
               </li>
             ))}
           </ul>
         </div>

         {/* Contact Info */}
         <div>
      <h3 className="text-white text-lg font-semibold mb-6">Contact Info</h3>
      <div className="space-y-4">
        {/* Phone */}
        <div className="flex items-center space-x-3 text-gray-400">
          <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <span>{footerLinks.contact.phone}</span>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-3 text-gray-400">
          <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <span>{footerLinks.contact.email}</span>
        </div>

        {/* Address */}
        <div className="flex items-center space-x-3 text-gray-400">
          <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <span>{footerLinks.contact.address}</span>
        </div>

        {/* Hours */}
        <div className="flex items-center space-x-3 text-gray-400">
          <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span>{footerLinks.contact.hours}</span>
        </div>
      </div>
    </div>

         {/* Newsletter */}
         <div>
           <h3 className="text-white text-lg font-semibold mb-6">Newsletter</h3>
           <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and insights.</p>
           <form className="space-y-4">
             <input
               type="email"
               placeholder="Your email"
               className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-primary"
             />
             <button
               type="submit"
               className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
             >
               Subscribe
             </button>
           </form>
         </div>
       </div>

       {/* Bottom Bar */}
       <div className="mt-12 pt-8 border-t border-gray-800">
         <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
           <p className="text-gray-400 text-sm">
             © {new Date().getFullYear()} AslanAI. All rights reserved.
           </p>
 
         </div>
       </div>
     </div>
   </footer>
 );
}

export default Footer;