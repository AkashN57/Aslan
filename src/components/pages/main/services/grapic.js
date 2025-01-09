import React from 'react';
import { 
  Palette, 
  PenTool, 
  Image, 
  Layout, 
  Clock, 
  Zap,
  Heart,
  Globe 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import m3 from '../../../images/rb_1537.png'
import m2 from '../../../images/rb_2148324107.png'

// import w1 from '../../../images/w1.png';
// import w2 from '../../../images/w2.jpg';
// import w3 from '../../../images/w3.jpeg';
// import w4 from '../../../images/w1.png';
// import w5 from '../../../images/w2.jpg';
// import w6 from '../../../images/w3.jpeg';
const GraphicDesign = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="py-40 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Captivating Graphic Design for Your Brand
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                From eye-catching logos to stunning posters, we create designs that make your brand stand out. Let our creative team bring your vision to life.
              </p>
              <Link to="/contact" className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors">
                Start Your Design Project
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img src={m3} alt="Design Sample 1" className="rounded-lg shadow-lg transform hover:scale-105 transition-transform" />
                <img src={m2} alt="Design Sample 2" className="rounded-lg shadow-lg transform hover:scale-105 transition-transform mt-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Design Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<PenTool className="h-8 w-8 text-purple-600" />}
              title="Logo Design"
              description="Unique and memorable logos that capture your brand's essence"
            />
            <ServiceCard
              icon={<Image className="h-8 w-8 text-purple-600" />}
              title="Poster Design"
              description="Eye-catching posters for events, marketing, and advertising"
            />
            <ServiceCard
              icon={<Layout className="h-8 w-8 text-purple-600" />}
              title="Brand Identity"
              description="Complete brand identity packages including business cards and stationery"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-purple-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Design Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <ProcessCard 
              number="01"
              title="Discovery"
              description="Understanding your brand and objectives"
            />
            <ProcessCard 
              number="02"
              title="Concept"
              description="Creating initial design concepts"
            />
            <ProcessCard 
              number="03"
              title="Refinement"
              description="Perfecting the chosen design"
            />
            <ProcessCard 
              number="04"
              title="Delivery"
              description="Providing final files in all formats"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {/* <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Designs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={w1} 
                  alt={`Design ${item}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">Project Name</h3>
                    <p className="text-sm">Logo Design</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Clock className="h-6 w-6 text-purple-600" />}
              title="Quick Turnaround"
              description="Fast delivery without compromising quality"
            />
            <FeatureCard
              icon={<Heart className="h-6 w-6 text-purple-600" />}
              title="Satisfaction Guaranteed"
              description="Revisions until you're completely satisfied"
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6 text-purple-600" />}
              title="Creative Excellence"
              description="Innovative and unique design solutions"
            />
            <FeatureCard
              icon={<Globe className="h-6 w-6 text-purple-600" />}
              title="Industry Experience"
              description="Expertise across various industries"
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

const ProcessCard = ({ number, title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="text-3xl font-bold text-purple-600 mb-3">{number}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="inline-block p-3 bg-purple-100 rounded-full mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const ContactInfo = ({ icon, title, detail }) => (
  <div className="flex flex-col items-center">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{detail}</p>
  </div>
);

export default GraphicDesign;