import React from 'react';
import { Smartphone, Code, Zap, Shield, Rocket, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import m3 from '../../../images/rb_4973.png'
import mb1 from '../../../images/m3.png';
import mb2 from '../../../images/m1.jpg';
import mb3 from '../../../images/m2.jpg';
import { useState } from 'react';
const MobileAppPortfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transform Your Ideas into Powerful Mobile Apps
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Aslan AI specializes in crafting innovative mobile applications that drive business growth and user engagement. Our expert team brings your vision to life with cutting-edge technology.
              </p>
              <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Your Project
              </Link>
            </div>
            <div className="md:w-1/2">
              <img src={m3} alt="Mobile App Development"  />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mobile App Development Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Smartphone className="h-8 w-8 text-blue-600" />}
              title="Native App Development"
              description="Custom iOS and Android apps built for optimal performance and user experience"
            />
            <ServiceCard
              icon={<Code className="h-8 w-8 text-blue-600" />}
              title="Cross-Platform Solutions"
              description="React Native and Flutter apps that work seamlessly across all platforms"
            />
            <ServiceCard
              icon={<Zap className="h-8 w-8 text-blue-600" />}
              title="AI Integration"
              description="Advanced AI capabilities for smart, responsive applications"
            />
          </div>
        </div>
      </section>





{/* Development Process */}
<section className="py-16 px-4 bg-gray-50">
 <div className="max-w-6xl mx-auto">
   <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
     <ProcessCard 
       step="1"
       title="Discovery"
       description="Requirements gathering and project planning"
     />
     <ProcessCard 
       step="2"
       title="Design"
       description="UI/UX design and prototype development"
     />
     <ProcessCard 
       step="3"
       title="Development"
       description="Agile development with regular updates"
     />
     <ProcessCard 
       step="4"
       title="Delivery"
       description="Testing, deployment and maintenance"
     />
   </div>
 </div>
</section>



{/* Technology Stack Section */}
<section className="py-16 bg-white px-4">
 <div className="max-w-6xl mx-auto">
   <h2 className="text-3xl font-bold text-center mb-12">Our Technology Stack</h2>
   <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
     <TechCard icon="📱" title="iOS" items={['Swift', 'SwiftUI', 'Objective-C']} />
     <TechCard icon="🤖" title="Android" items={['Kotlin', 'Java', 'Jetpack']} />
     <TechCard icon="⚛️" title="Cross-Platform" items={['React Native', 'Flutter', 'Ionic']} />
     <TechCard icon="🔧" title="Backend" items={['Node.js', 'Python', 'Firebase']} />
   </div>
 </div>
</section>



      {/* Featured Projects */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              image={mb1}
              title="HealthTech App"
              description="AI-powered health monitoring and diagnosis app"
            />
            <ProjectCard
              image={mb3}
              title="E-commerce Platform"
              description="Full-featured mobile shopping experience"
            />
            <ProjectCard
              image={mb2}
              title="Smart Home Control"
              description="IoT integration for home automation"
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

const ProjectCard = ({ image, title, description }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);


const TechCard = ({ icon, title, items }) => (
  <div className="p-6 bg-gray-50 rounded-lg text-center hover:shadow-lg transition-all">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-gray-600">{item}</li>
      ))}
    </ul>
  </div>
 );
 
 const ProcessCard = ({ step, title, description }) => (
  <div className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all">
    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
      {step}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
 );
 
 const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-4 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all ${isOpen ? 'max-h-40 pb-4' : 'max-h-0'}`}>
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
 };
export default MobileAppPortfolio;