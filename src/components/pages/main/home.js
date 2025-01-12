import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaDatabase, FaCog } from 'react-icons/fa';
import { SiAzuredevops } from 'react-icons/si';
import { BsArrowRight } from 'react-icons/bs';
import m3 from '../../images/rb_17049.png';
import p1 from '../../images/phy.png';
import p2 from '../../images/hos.png';
import p3 from '../../images/dash.png';
import { DiJava } from "react-icons/di";


import { 
  SiJavascript, 
  SiPython, 
  SiReact, 
  SiAngular, 
  SiVuedotjs, 
  SiNodedotjs, 
  SiDotnet, 
  SiSpring 
} from 'react-icons/si';


const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const controls = useAnimation();

  // Transform values for parallax effects
  const headerY = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    setIsLoaded(true);
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="overflow-x-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <motion.section 
  className="min-h-screen relative overflow-hidden bg-gradient-to-r from-blue-50 to-purple-50"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  {/* Animated Background Elements */}
  <motion.div className="absolute inset-0">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full filter blur-xl opacity-50" />
    <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-100 rounded-full filter blur-xl opacity-50" />
    <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-100 rounded-full filter blur-lg opacity-40" />
  </motion.div>

  {/* Hero Content */}
  <motion.div 
      className="relative container mx-auto px-4 pt-40 flex flex-col md:flex-row items-center"
      style={{ y: headerY }}
    >
      <div className="md:w-1/2">
        <motion.h1 
          className="text-7xl md:text-8xl font-bold mb-8 text-gray-800"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transform Your
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Digital Vision
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-12"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We bring your ideas to life through innovative software solutions.
          Experience excellence in every pixel and line of code.
        </motion.p>

        <motion.div
          className="flex gap-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button 
            onClick={() => window.location.href = '/contact'}
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </button>
          <button 
            onClick={() => window.location.href = '/about'}
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg font-bold hover:bg-blue-50 transition-colors"
          >
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div 
        className="mt-12 md:mt-0 md:w-1/2"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <img src={m3} alt="Salesforce Development" className="rounded-lg shadow-lg" />
      </motion.div>
    </motion.div>

  {/* Stats */}
  <motion.div
    className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 container mx-auto"
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.8 }}
  >
    {[
      { value: "20+", label: "Projects" },
      { value: "5+", label: "Clients" },
      { value: "3+", label: "Years" },
      { value: "24/7", label: "Support" }
    ].map((stat, index) => (
      <div key={index} className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
        <div className="text-gray-600">{stat.label}</div>
      </div>
    ))}
  </motion.div>
  <br></br>
</motion.section>


      {/* Services Section */}
      <motion.section
        className="py-40 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-16 text-center text-gray-800"
            variants={itemVariants}
          >
            Our Solutions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-blue-600 text-4xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Learn More <BsArrowRight className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
<TechStack />
<ProcessSection/>
      {/* Portfolio Section */}
      <motion.section
        className="py-32 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-16 text-center text-gray-800"
            variants={itemVariants}
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-lg"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent flex flex-col justify-end p-8">
                  <span className="text-blue-200 font-medium">{project.category}</span>
                  <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
      className="text-center mt-12"
      variants={itemVariants}
    >
      <button
        onClick={() => window.location.href = '/portfolio'}
        className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-blue-700 transition-colors inline-block"
      >
        View All Projects
      </button>
    </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-32 bg-gradient-to-r from-blue-600 to-purple-600"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-8 text-white"
            variants={itemVariants}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Let's discuss how our software solutions can help you achieve your business goals
            and stay ahead of the competition.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-colors inline-block"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Custom Software",
    description: "Tailored solutions built with cutting-edge technologies to meet your unique business needs."
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences."
  },
  {
    icon: <FaCloud />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and applications using AWS, Azure, and Google Cloud."
  },
  {
    icon: <FaDatabase />,
    title: "Database Design",
    description: "Robust database architecture and optimization for high-performance applications."
  },
  {
    icon: <SiAzuredevops />,
    title: "DevOps",
    description: "Streamlined development operations with continuous integration and deployment."
  },
  {
    icon: <FaCog />,
    title: "API Development",
    description: "RESTful and GraphQL APIs that enable seamless system integration."
  }
];

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A full-stack e-commerce solution with advanced analytics.",
    image: p1
  },
  {
    title: "HealthTech App",
    category: "Mobile Development",
    description: "A telemedicine platform connecting patients with healthcare providers.",
    image: p2
  },
  {
    title: "FinTech Dashboard",
    category: "Enterprise Software",
    description: "Real-time financial analytics and reporting platform.",
    image: p3
  }
];






// Language and Technology Section Component
const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const technologies = [
    { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
    { icon: <SiPython className="text-blue-500" />, name: "Python" },
    { icon:  <DiJava  className="text-red-500" />, name: "Java" },

    { icon: <SiReact className="text-blue-400" />, name: "React" },
    { icon: <SiAngular className="text-red-600" />, name: "Angular" },
    { icon: <SiVuedotjs className="text-green-500" />, name: "Vue.js" },
    { icon: <SiNodedotjs className="text-green-600" />, name: "Node.js" },
    { icon: <SiDotnet className="text-purple-600" />, name: ".NET" },
    { icon: <SiSpring className="text-green-500" />, name: "Spring" }
   

  ];

  return (
    <motion.section
      className="py-32 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold mb-16 text-center text-gray-800"
          variants={itemVariants}
        >
          Technologies We Master
        </motion.h2>

        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-3">
                {tech.icon}
              </div>
              <span className="text-sm font-medium text-gray-700">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Process Section Component
const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We dive deep into understanding your business needs and objectives."
    },
    {
      number: "02",
      title: "Planning",
      description: "Developing comprehensive strategy and technical architecture."
    },
    {
      number: "03",
      title: "Development",
      description: "Agile development with regular updates and iterations."
    },
    {
      number: "04",
      title: "Testing",
      description: "Rigorous testing to ensure quality and performance."
    },
    {
      number: "05",
      title: "Deployment",
      description: "Smooth deployment and transition to production."
    },
    {
      number: "06",
      title: "Support",
      description: "Ongoing maintenance and support to ensure optimal performance."
    }
  ];

  return (
    <motion.section
      className="py-32 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
 
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold mb-16 text-center text-gray-800"
     
        >
          Our Process
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            
              whileHover={{ y: -5 }}
            >
              <div className="text-6xl font-bold text-blue-500 mb-4">{step.number}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Export both components
export { TechStack, ProcessSection };

export default Home;