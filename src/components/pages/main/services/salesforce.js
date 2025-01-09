import React from 'react';
import { 
  Cloud, 
  Database, 
  Settings, 
  Users, 
  Shield, 
  LineChart,
  Zap,
  Layout 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import m3 from '../../../images/clo.png'

const SalesforceDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Hero Section */}
      <section className="py-40 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Expert Salesforce Development Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your business with custom Salesforce solutions and cloud computing expertise. We help enterprises leverage the full power of Salesforce to drive growth and efficiency.
              </p>
              <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Schedule a Consultation
              </Link>
            </div>
            <div className="md:w-1/2">
              <img src={m3}alt="Salesforce Development" className="rounded-lg shadow-lg "/>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Salesforce Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Cloud className="h-8 w-8 text-blue-600" />}
              title="Salesforce Implementation"
              description="Custom Salesforce setup and implementation tailored to your business needs"
            />
            <ServiceCard
              icon={<Database className="h-8 w-8 text-blue-600" />}
              title="Custom Development"
              description="Custom apps, integrations, and solutions built on the Salesforce platform"
            />
            <ServiceCard
              icon={<Settings className="h-8 w-8 text-blue-600" />}
              title="Consulting & Support"
              description="Expert guidance and ongoing support for your Salesforce ecosystem"
            />
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-sky-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Salesforce Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SolutionCard 
              icon={<Cloud className="h-6 w-6 text-blue-600" />}
              title="Sales Cloud"
              features={["Lead Management", "Sales Automation", "Analytics"]}
            />
            <SolutionCard 
              icon={<Users className="h-6 w-6 text-blue-600" />}
              title="Service Cloud"
              features={["Case Management", "Customer Support", "Knowledge Base"]}
            />
            <SolutionCard 
              icon={<LineChart className="h-6 w-6 text-blue-600" />}
              title="Marketing Cloud"
              features={["Email Marketing", "Social Media", "Campaign Analytics"]}
            />
            <SolutionCard 
              icon={<Layout className="h-6 w-6 text-blue-600" />}
              title="Commerce Cloud"
              features={["E-commerce", "Order Management", "Digital Storefront"]}
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Salesforce Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard
              icon={<Shield className="h-8 w-8 text-blue-600" />}
              title="Certified Experts"
              description="Team of certified Salesforce developers and consultants"
            />
            <BenefitCard
              icon={<Zap className="h-8 w-8 text-blue-600" />}
              title="Rapid Development"
              description="Quick implementation and deployment of solutions"
            />
            <BenefitCard
              icon={<Settings className="h-8 w-8 text-blue-600" />}
              title="Custom Solutions"
              description="Tailored solutions to match your specific business needs"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-b from-sky-50 to-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Implementation Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <ProcessCard
              number="01"
              title="Discovery"
              description="Understanding your business requirements"
            />
            <ProcessCard
              number="02"
              title="Planning"
              description="Developing implementation strategy"
            />
            <ProcessCard
              number="03"
              title="Development"
              description="Building and customizing solutions"
            />
            <ProcessCard
              number="04"
              title="Deployment"
              description="Implementation and training"
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

const SolutionCard = ({ icon, title, features }) => (
  <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="text-gray-600 text-sm flex items-center">
          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const BenefitCard = ({ icon, title, description }) => (
  <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
    <div className="inline-block p-3 bg-sky-100 rounded-full mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ProcessCard = ({ number, title, description }) => (
  <div className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="text-3xl font-bold text-blue-600 mb-3">{number}</div>
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

export default SalesforceDevelopment;