import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaWordpress,FaPaintBrush,FaCloud,FaGraduationCap,FaRocket, FaMobile, FaPalette, FaCode, FaChartLine, FaLaptopCode } from 'react-icons/fa';

function Services() {
  const services = [
    {
      icon: <FaCode className="text-4xl text-primary" />,
      title: "Web Development",
      description: "Custom web applications and responsive websites built with cutting-edge technologies.",
      features: ["React & Next.js", "Node.js & Express", "MongoDB & PostgreSQL", "AWS & Cloud Services"]
    },
    {
      icon: <FaMobile className="text-4xl text-primary" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile solutions for iOS and Android platforms.",
      features: ["React Native", "iOS Development", "Android Development", "Cross-platform Solutions"]
    },
    {
      icon: <FaPalette className="text-4xl text-primary" />,
      title: "Graphic Design",
      description: "Creative design solutions that bring your brand vision to life.",
      features: ["Brand Identity", "Print Design", "Digital Media", "Marketing Materials"]
    },
    {
      icon: <FaWordpress className="text-4xl text-primary" />,
      title: "WordPress Development",
      description: "Custom WordPress solutions for content management and e-commerce.",
      features: ["Custom Themes", "Plugin Development", "E-commerce", "Performance Optimization"]
    },
    {
      icon: <FaPaintBrush className="text-4xl text-primary" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance experience and engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    },
    {
      icon: <FaCloud className="text-4xl text-primary" />,
      title: "Salesforce Solutions",
      description: "Custom CRM solutions and Salesforce implementation services.",
      features: ["Implementation", "Custom Development", "Integration", "Support & Training"]
    },
    {
      icon: <FaGraduationCap className="text-4xl text-primary" />,
      title: "Academic Services",
      description: "Educational technology solutions and academic support services.",
      features: ["LMS Development", "E-learning Platforms", "Course Management", "Student Portals"]
    }
  ];

  const features = [
    {
      icon: <FaRocket />,
      title: "Fast Performance",
      description: "Optimized for speed and efficiency"
    },
    {
      icon: <FaChartLine />,
      title: "Scalable Solutions",
      description: "Grows with your business needs"
    },
    {
      icon: <FaLaptopCode />,
      title: "Modern Technology",
      description: "Latest tech stack and best practices"
    }
  ];

  return (
    <div className="min-h-screen  bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-10 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 lg:w-full">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Our Services</span>
                  <span className="block text-primary">What We Offer</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                  We provide comprehensive digital solutions tailored to your business needs.
                </p>
              </motion.div>
            </main>
          </div>
        </div>
      </div>

      {/* Services Section */}
 
        <div className="  bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <FaCheck className="text-primary mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
   

      {/* Features Grid */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-lg text-gray-600">Our commitment to excellence sets us apart</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-white/90 text-2xl mt-2">Get in touch with us today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;