import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaPlay, FaLightbulb, FaRocket, FaUsers, FaChartLine } from 'react-icons/fa';
import { BiBrain } from 'react-icons/bi';
import { RiTeamLine } from 'react-icons/ri';

import b9 from '../../images/b9.jpg';
import b5 from '../../images/women.jpg';

function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-900 py-32">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Innovating the Future of Software</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforming businesses through innovative software solutions and cutting-edge technology
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 -mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-xl p-8 transform hover:-translate-y-2 transition-transform">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <FaLightbulb className="text-2xl text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses through innovative software solutions that drive growth, 
                efficiency, and digital transformation. We strive to deliver exceptional value 
                through cutting-edge technology and unparalleled expertise.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8 transform hover:-translate-y-2 transition-transform">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <FaRocket className="text-2xl text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the global leader in delivering transformative software solutions that 
                shape the future of business technology, fostering innovation and sustainable 
                growth for our clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <p className="text-gray-600 mt-4">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BiBrain className="text-4xl text-blue-600" />,
                title: "Innovation",
                description: "Constantly pushing boundaries and embracing new technologies"
              },
              {
                icon: <FaUsers className="text-4xl text-green-600" />,
                title: "Collaboration",
                description: "Working together to achieve exceptional results"
              },
              {
                icon: <FaChartLine className="text-4xl text-purple-600" />,
                title: "Excellence",
                description: "Committed to delivering the highest quality solutions"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pioneering Software Solutions Since 2020
              </h2>
              <p className="text-gray-600 mb-8">
                At Aslan AI, we're more than just a software company. We're your technology partner, 
                committed to delivering innovative solutions that drive real business value. Our team 
                of experts combines deep technical knowledge with industry expertise to create 
                solutions that transform businesses.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="text-2xl font-bold text-gray-900">20+</h4>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="text-2xl font-bold text-gray-900">10+</h4>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  'Custom Software Development',
                  'Mobile App Development',
                  'Cloud Solutions & DevOps',
                  'AI & Machine Learning'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full mr-3">
                      <FaCheck className="text-xs text-blue-600" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <img 
                src={b5} 
                alt="About us" 
                className="rounded-lg shadow-2xl w-full h-auto z-10 relative"
              />
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full -z-10 blur-3xl opacity-30"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-200 rounded-full -z-10 blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="text-gray-600 mt-4">The experts behind our success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "John Smith",
                role: "CEO & Founder",
                image: "/api/placeholder/200/200"
              },
              {
                name: "Sarah Johnson",
                role: "CTO",
                image: "/api/placeholder/200/200"
              },
              {
                name: "Michael Brown",
                role: "Lead Developer",
                image: "/api/placeholder/200/200"
              },
              {
                name: "Emily Davis",
                role: "Project Manager",
                image: "/api/placeholder/200/200"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg group">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Video Section with Improved Design */}
      {/* <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-6">See Our Story</h2>
            <p className="text-gray-300 mb-12">
              Discover how we're transforming businesses through innovative software solutions
            </p>

            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={b9} 
                alt="video thumbnail" 
                className="w-full"
              />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center
                hover:scale-110 transition-transform group">
                <FaPlay className="text-blue-600 text-2xl ml-1 group-hover:text-blue-800" />
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action with Enhanced Design */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/90 mb-12 max-w-2xl mx-auto text-lg">
            Let's collaborate to create innovative software solutions that drive your business forward.
          </p>
          <div className="flex justify-center space-x-6">
            {/* <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold 
              hover:bg-blue-50 transition-colors shadow-lg">
              Start Your Project
            </button> */}
                 <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold 
              hover:bg-blue-50 transition-colors shadow-lg">
                      <Link
                    to="/contact"
               >
                       Start Your Project</Link>
                      </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;