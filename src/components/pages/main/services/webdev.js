import React from 'react';
import { Globe, Code, Zap, Layout, Rocket, Database, Server, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import m3 from '../../../images/9.png'
import p1 from '../../../images/phy.png';
import p3 from '../../../images/dash.png';
import p6 from '../../../images/churn.png';
const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Expert Web Development Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                At Aslan AI, we craft stunning, high-performance websites that drive business growth. From responsive designs to complex web applications, we bring your digital vision to life.
              </p>
              <Link to="/contact" className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors">
                Start Your Project
              </Link>
            </div>
            <div className="md:w-1/2">
              <img src={m3} alt="Web Development" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Web Development Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Layout className="h-8 w-8 text-indigo-600" />}
              title="Frontend Development"
              description="Responsive, interactive UIs built with React, Next.js, and modern web technologies"
            />
            <ServiceCard
              icon={<Server className="h-8 w-8 text-indigo-600" />}
              title="Backend Development"
              description="Robust server-side solutions using Node.js, Python, and cloud technologies"
            />
            <ServiceCard
              icon={<Database className="h-8 w-8 text-indigo-600" />}
              title="Full Stack Solutions"
              description="End-to-end web applications with seamless integration and scalability"
            />
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-indigo-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Excel In</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TechCard title="React" />
            <TechCard title="Node.js" />
            <TechCard title="Python" />
            <TechCard title="MongoDB" />
            <TechCard title="AWS" />
            <TechCard title="Next.js" />
            <TechCard title="TypeScript" />
            <TechCard title="GraphQL" />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              image= {p1}
              title="E-Commerce Platform"
              description="Full-featured online shopping platform with payment integration"
            />
            <ProjectCard
              image={p3}
              title="SaaS Dashboard"
              description="Complex data visualization and management system"
            />
            <ProjectCard
              image={p6}
              title="AI-Powered CMS"
              description="Content management system with AI capabilities"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}

    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ProjectCard = ({ image, title, description }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const TechCard = ({ title }) => (
  <div className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
    <p className="font-semibold text-gray-800">{title}</p>
  </div>
);

const ContactInfo = ({ icon, title, detail }) => (
  <div className="flex flex-col items-center">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{detail}</p>
  </div>
);

export default WebDevelopment;