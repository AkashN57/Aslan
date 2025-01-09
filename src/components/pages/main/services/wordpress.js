import React from 'react';
import { 
  LayoutTemplate, 
  ShoppingCart, 
  Settings, 
  Palette, 
  Shield, 
  Zap,
  Search 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import m3 from '../../../images/rb_2143.png'
import w1 from '../../../images/w1.png';
import w2 from '../../../images/w2.jpg';
import w3 from '../../../images/w3.jpeg';
const WordPressDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Professional WordPress Development Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your online presence with our expert WordPress development services. We create beautiful, functional, and scalable WordPress websites tailored to your business needs.
              </p>
              <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Your Website Started
              </Link>
            </div>
            <div className="md:w-1/2">
              <img src={m3} alt="WordPress Development"  />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our WordPress Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<LayoutTemplate className="h-8 w-8 text-blue-600" />}
              title="Custom Theme Development"
              description="Unique, responsive WordPress themes built to match your brand identity"
            />
            <ServiceCard
              icon={<ShoppingCart className="h-8 w-8 text-blue-600" />}
              title="WooCommerce Solutions"
              description="Full-featured e-commerce stores with secure payment integration"
            />
            <ServiceCard
              icon={<Settings className="h-8 w-8 text-blue-600" />}
              title="Plugin Development"
              description="Custom WordPress plugins to extend your website's functionality"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-blue-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our WordPress Services?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Shield className="h-6 w-6 text-blue-600" />}
              title="Security First"
              description="Advanced security measures and regular updates"
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6 text-blue-600" />}
              title="Speed Optimized"
              description="Performance-tuned for fast loading times"
            />
            <FeatureCard
              icon={<Search className="h-6 w-6 text-blue-600" />}
              title="SEO Ready"
              description="Built-in SEO best practices for better ranking"
            />
            <FeatureCard
              icon={<Palette className="h-6 w-6 text-blue-600" />}
              title="Custom Design"
              description="Unique designs that match your brand"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Recent WordPress Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              image={w1}
              title="E-Commerce Website"
              description="Custom WooCommerce solution with advanced features"
            />
            <ProjectCard
              image={w3}
              title="Corporate Website"
              description="Professional multi-language WordPress website"
            />
            <ProjectCard
              image={w2}
              title="Blog Platform"
              description="High-performance WordPress blog with custom theme"
            />
          </div>
        </div>
      </section>

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

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
    <div className="inline-block mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
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

const ContactInfo = ({ icon, title, detail }) => (
  <div className="flex flex-col items-center">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{detail}</p>
  </div>
);

export default WordPressDevelopment;