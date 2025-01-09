import React from 'react';
import { 
  Layout, Palette, PenTool, Figma, Users, Eye, Frame, ArrowRight,
  MonitorSmartphone, Layers, Smartphone, Box, Target, Award, RefreshCcw
} from 'lucide-react';
import { Link } from 'react-router-dom';
import b1 from '../../../images/31745457_7855991.jpg';
import p1 from '../../../images/phy.png';
import p3 from '../../../images/city.png';
import p6 from '../../../images/smart.png';

const UiUxService = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Background */}
      <section className="relative py-40 bg-gradient-to-r from-indigo-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white/10"></div>
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Elevate Your Digital Experience
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We craft intuitive and engaging user experiences that transform your digital presence. 
                Our UI/UX solutions are built on research, creativity, and user-centered design principles.
              </p>
              <div className="flex space-x-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-indigo-900 px-8 py-3 rounded-lg text-lg font-semibold 
                    hover:bg-indigo-100 transition-colors inline-flex items-center"
                >
                  Start Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a 
                  href="#portfolio" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold 
                    hover:bg-white/10 transition-colors"
                >
                  View Portfolio
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img src={b1} alt="UI/UX Design" className="rounded-lg shadow-lg " />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Comprehensive Design Solutions</h2>
            <p className="mt-4 text-xl text-gray-600">End-to-end design services for digital products</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Layout className="h-8 w-8" />,
                title: "UI Design",
                description: "Beautiful, intuitive interfaces that engage users and drive conversions",
                features: ["Custom UI Elements", "Visual Design", "Design Systems"]
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "UX Design",
                description: "User-centered experiences based on research and testing",
                features: ["User Research", "Wireframing", "Usability Testing"]
              },
              {
                icon: <MonitorSmartphone className="h-8 w-8" />,
                title: "Responsive Design",
                description: "Seamless experiences across all devices and screen sizes",
                features: ["Mobile-First Design", "Cross-Platform", "Adaptive Layouts"]
              },
              {
                icon: <Layers className="h-8 w-8" />,
                title: "Design Systems",
                description: "Scalable and consistent design frameworks",
                features: ["Component Libraries", "Style Guides", "Documentation"]
              },
              {
                icon: <Eye className="h-8 w-8" />,
                title: "Visual Design",
                description: "Stunning visuals that strengthen your brand",
                features: ["Brand Identity", "Typography", "Color Theory"]
              },
              {
                icon: <Frame className="h-8 w-8" />,
                title: "Interaction Design",
                description: "Engaging animations and micro-interactions",
                features: ["Motion Design", "Prototyping", "User Feedback"]
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Design Process</h2>
            <p className="mt-4 text-xl text-gray-600">How we bring your vision to life</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8 text-indigo-600" />,
                title: "Discovery",
                description: "Understanding your goals, users, and business needs through research and analysis"
              },
              {
                icon: <PenTool className="h-8 w-8 text-indigo-600" />,
                title: "Design",
                description: "Creating wireframes, mockups, and interactive prototypes"
              },
              {
                icon: <RefreshCcw className="h-8 w-8 text-indigo-600" />,
                title: "Iteration",
                description: "Refining designs through testing and feedback"
              },
              {
                icon: <Award className="h-8 w-8 text-indigo-600" />,
                title: "Delivery",
                description: "Providing final designs with documentation and assets"
              }
            ].map((process, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {process.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-indigo-600 to-transparent -translate-y-1/2 -translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Tech Stack</h2>
            <p className="mt-4 text-xl text-gray-600">Industry-leading tools we use</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Figma", "Adobe XD", "Sketch", "InVision",
              "Zeplin", "Principle", "Framer", "Protopie"
            ].map((tool, index) => (
              <div key={index} 
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <p className="font-semibold text-gray-900">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
            <p className="mt-4 text-xl text-gray-600">Some of our best work</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image:p1,
                category: "Mobile App",
                title: "FinTech App Redesign",
                description: "Complete UX overhaul improving user satisfaction by 45%"
              },
              {
                image: p3,
                category: "Web Platform",
                title: "E-learning Dashboard",
                description: "Intuitive interface design for online education platform"
              },
              {
                image: p6,
                category: "Design System",
                title: "Enterprise UI Kit",
                description: "Comprehensive component library for large-scale applications"
              }
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-sm font-medium text-indigo-400">{project.category}</span>
                    <h3 className="text-xl font-bold mt-2">{project.title}</h3>
                    <p className="text-gray-300 mt-2">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700"
            >
              View All Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Experience?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create something amazing together. Our team is ready to bring your vision to life.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-indigo-900 px-8 py-3 rounded-lg text-lg font-semibold 
              hover:bg-indigo-100 transition-colors inline-flex items-center"
          >
            Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UiUxService;