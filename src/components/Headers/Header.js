import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GiLion } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const services = [
    { 
      name: 'Web Development',
      route: 'web',
      icon: '🌐',
    },
    { 
      name: 'Mobile App Development',
      route: 'Mobile',
      icon: '📱',
    },
    { 
      name: 'Graphic Designs',
      route: 'Grapic',
      icon: '🎨',
    },
    { 
      name: 'Wordpress',
      route: 'Wordpress',
      icon: '📝',
    },
    { 
      name: 'UI/UX Design',
      route: 'Uiux',
      icon: '🎯',
    },
    { 
      name: 'Salesforce',
      route: 'Salesforce',
      icon: '☁️',
    },
    { 
      name: 'Academic Services',
      route: 'Student',
      icon: '🎓',
    },
    { 
      name: 'Marketing',
      route: 'Marketing',
      icon: '💹',
    }
  ];
  const handleServiceSelect = (route) => {
    setDropdownOpen(false);
    navigate(`/${route}`);
  };
  const isActive = (path) => location.pathname === path;
  const isAcademicServicesPage = location.pathname === '/Student';
  // Determine the logo name based on the current route
  const logoName = location.pathname === '/Student' ? 'Assignment' : 'Aslan';
  const logoName2 = location.pathname === '/Student' ? ' Labs' : 'Ai';
  const LogoIcon = isAcademicServicesPage ? FaBook : GiLion;
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <nav className="container mx-auto px-4 lg:px-16">
        {/* Desktop Layout */}
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex items-center space-x-2 text-2xl font-bold text-gray-800">
          <LogoIcon className="text-primary" />
          <span>{logoName}<span className="text-primary">{logoName2}</span></span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : (
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <a href="/" className="text-gray-600 hover:text-primary">
              Home
            </a>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-600 hover:text-primary"
              >
                <span>Services</span>
                <ChevronDown className="w-5 h-5" />
              </button>

              {/* Services Dropdown Menu */}
              <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 mt-2 hidden group-hover:block">
                {services.map((service) => (
                  <a
                    key={service.route}
                    href={`/${service.route}`}
                    className="flex items-center px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50"
                  >
                    <span className="mr-3">{service.icon}</span>
                    {service.name}
                  </a>
                ))}
              </div>
            </div>

            <a href="/about" className="text-gray-600 hover:text-primary">
              About
            </a>
            <a href="/portfolio" className="text-gray-600 hover:text-primary">
              Portfolio
            </a>
            <a href="/careers" className="text-gray-600 hover:text-primary">
              Careers
            </a>
            
            <a
              href="/contact"
              className="py-2 px-6 text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors font-medium"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
          fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out
          ${isOpen ? 'transform translate-x-0' : 'transform translate-x-full'}
          lg:hidden
        `}>
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <span className="text-2xl font-bold">
                Aslan<span className="text-primary">Ai</span>
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 space-y-3">
                <a href="/" className="block py-3 text-lg text-gray-600 hover:text-primary">
                  Home
                </a>

                {/* Services Dropdown */}
                <div>
                  <button
                    onClick={() => setServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full py-3 text-lg text-gray-600 hover:text-primary"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isServicesOpen ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div className={`space-y-2 pl-4 ${isServicesOpen ? 'block' : 'hidden'}`}>
                    {services.map((service) => (
                      <a
                        key={service.route}
                        href={`/${service.route}`}
                        className="flex items-center py-2 text-gray-600 hover:text-primary"
                      >
                        <span className="mr-3">{service.icon}</span>
                        {service.name}
                      </a>
                    ))}
                  </div>
                </div>

                <a href="/about" className="block py-3 text-lg text-gray-600 hover:text-primary">
                  About
                </a>
                <a href="/portfolio" className="block py-3 text-lg text-gray-600 hover:text-primary">
                  Portfolio
                </a>
                <a href="/careers" className="block py-3 text-lg text-gray-600 hover:text-primary">
                  Careers
                </a>
              </div>
            </div>

            {/* Mobile CTA Button */}
            <div className="p-4 border-t">
              <a
                href="/contact"
                className="block w-full py-3 px-6 text-center text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors text-lg font-medium"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;