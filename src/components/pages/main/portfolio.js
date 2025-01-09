import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub, FaTags } from 'react-icons/fa';

// Import your project images
import p1 from '../../images/phy.png';
import p2 from '../../images/hos.png';
import p3 from '../../images/city.png';
import p4 from '../../images/dash.png';
import p5 from '../../images/game.png';
import p6 from '../../images/smart.png';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'enterprise', name: 'Enterprise Solutions' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Healthcare Management System',
      category: 'enterprise',
      image: p1,
      description: 'A comprehensive healthcare management system with patient records, appointment scheduling, and billing features.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoLink: 'https://demo.example.com',
      githubLink: 'https://github.com',
      features: ['Electronic Health Records', 'Appointment Management', 'Billing Integration', 'Patient Portal'],
    },
    {
      id: 2,
      title: 'E-Learning Platform',
      category: 'web',
      image: p2,
      description: 'An interactive e-learning platform with live sessions, course management, and student progress tracking.',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'WebRTC'],
      demoLink: 'https://demo.example.com',
      githubLink: 'https://github.com',
      features: ['Live Virtual Classrooms', 'Course Management', 'Progress Tracking', 'Interactive Assignments'],
    },
    {
      id: 3,
      title: 'Smart City IoT Dashboard',
      category: 'ai',
      image: p3,
      description: 'IoT-based smart city monitoring dashboard with real-time analytics and predictive maintenance.',
      technologies: ['React', 'Python', 'TensorFlow', 'AWS'],
      demoLink: 'https://demo.example.com',
      githubLink: 'https://github.com',
      features: ['Real-time Monitoring', 'Predictive Analytics', 'IoT Integration', 'Alert System'],
    },
    {
        id: 4,
        title: 'Healthcare Management System',
        category: 'enterprise',
        image: p4,
        description: 'A comprehensive healthcare management system with patient records, appointment scheduling, and billing features.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
        demoLink: 'https://demo.example.com',
        githubLink: 'https://github.com',
        features: ['Electronic Health Records', 'Appointment Management', 'Billing Integration', 'Patient Portal'],
      },
      {
        id: 5,
        title: 'E-Learning Platform',
        category: 'web',
        image: p5,
        description: 'An interactive e-learning platform with live sessions, course management, and student progress tracking.',
        technologies: ['Vue.js', 'Django', 'PostgreSQL', 'WebRTC'],
        demoLink: 'https://demo.example.com',
        githubLink: 'https://github.com',
        features: ['Live Virtual Classrooms', 'Course Management', 'Progress Tracking', 'Interactive Assignments'],
      },
      {
        id: 6,
        title: 'Smart City IoT Dashboard',
        category: 'ai',
        image: p6,
        description: 'IoT-based smart city monitoring dashboard with real-time analytics and predictive maintenance.',
        technologies: ['React', 'Python', 'TensorFlow', 'AWS'],
        demoLink: 'https://demo.example.com',
        githubLink: 'https://github.com',
        features: ['Real-time Monitoring', 'Predictive Analytics', 'IoT Integration', 'Alert System'],
      },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-900 py-32">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our successful projects and innovative solutions that have transformed businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg group">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex gap-4">
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                        >
                          <FaExternalLinkAlt />
                        </a>
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-800 rounded-full hover:bg-gray-900 transition-colors"
                        >
                          <FaGithub />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                      <FaTags className="mr-2" /> Key Features
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Your Next Project?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create innovative solutions that drive your business forward.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold 
              hover:bg-blue-50 transition-colors shadow-lg"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
