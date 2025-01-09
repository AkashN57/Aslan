import React, { useState } from 'react'; 
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GiLion } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const services = [
    { 
      name: 'Web Development',
      route: 'web',
      icon: '🌐',
      description: 'Custom web applications'
    },
    { 
      name: 'Mobile App Development',
      route: 'Mobile',
      icon: '📱',
      description: 'Native and cross-platform apps'
    },
    { 
      name: 'Graphic Designs',
      route: 'Grapic',
      icon: '🎨',
      description: 'Creative design solutions'
    },
    { 
      name: 'Wordpress',
      route: 'Wordpress',
      icon: '📝',
      description: 'WordPress development'
    },
    { 
      name: 'UI/UX Design',
      route: 'Uiux',
      icon: '🎯',
      description: 'User experience design'
    },
    { 
      name: 'Salesforce',
      route: 'Salesforce',
      icon: '☁️',
      description: 'CRM solutions'
    },
    { 
      name: 'Academic Services',
      route: 'Student',
      icon: '🎓',
      description: 'Ed-tech solutions'
    },
    { 
      name: 'Marketing',
      route: 'Marketing',
      icon: '💹',
      description: 'Marketing solutions'
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
  const logoName2 = location.pathname === '/Student' ? 'Labs' : 'Ai';
  const LogoIcon = isAcademicServicesPage ? FaBook : GiLion;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <nav className="container mx-auto px-4 lg:px-16">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-gray-800">
          <LogoIcon className="text-primary" /> {/* Dynamically render the icon */}
          <span>{logoName}<span className="text-primary">{logoName2}</span></span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link to="/" className={`text-gray-600 hover:text-primary transition-colors ${isActive('/') ? 'text-primary font-bold' : ''}`}>
              Home
            </Link>

            <div className="relative group">
              <button
                onMouseEnter={() => setDropdownOpen(true)}
                className="text-gray-600 hover:text-primary focus:outline-none flex items-center gap-1"
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                className={`${
                  isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
                } absolute left-2/3 -translate-x-2/3 min-w-max bg-white shadow-lg rounded-lg transition-all duration-200 
                transform z-50 mt-2`}
              >
                <div className="grid grid-cols-3 gap-4 p-6">
                  {services.map((service) => (
                    <button
                      key={service.route}
                      onClick={() => handleServiceSelect(service.route)}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-all group"
                    >
                      <span className="text-xl mr-3 bg-primary/10 p-2 rounded-lg">{service.icon}</span>
                      <div className="text-left">
                        <h3 className="font-medium text-gray-800 group-hover:text-primary">
                          {service.name}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {service.description}
                        </p>
                      </div>
                    </button>
                  ))}

                  <Link
                    to="/services"
                    className="col-span-3 mt-4 flex items-center justify-center p-3 border-t border-gray-100 text-primary hover:text-primary-dark font-medium group"
                  >
                    View All Services
                    <svg 
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/about" className={`text-gray-600 hover:text-primary transition-colors ${isActive('/about') ? 'text-primary font-bold' : ''}`}>
              About
            </Link>
            
            <Link to="/Portfolio" className={`text-gray-600 hover:text-primary transition-colors ${isActive('/Portfolio') ? 'text-primary font-bold' : ''}`}>
              Portfolio
            </Link>

            <Link to="/Careers" className={`text-gray-600 hover:text-primary transition-colors ${isActive('/Careers') ? 'text-primary font-bold' : ''}`}>
              Careers
            </Link>

            <Link to="/contact" className="ml-4 px-6 py-2 text-white bg-primary hover:bg-primary-dark rounded-lg 
              shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
              Let's Talk
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
