import React from 'react';
import { 
  BookOpen, 
  FileText, 
  PenTool, 
  Users, 
  Clock, 
  CheckCircle,
  Lightbulb,
  Award 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import m3 from '../../../images/rb_2148168523.png'
import m2 from '../../../images/rb_8174.png'
const AcademicServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="py-40 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Expert Academic Project Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Need help with your university projects and assignments? Our team of academic experts provides comprehensive support for research papers, technical reports, and project documentation.
              </p>
              <Link to="/contact" className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
                Get Academic Support
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img src={m3} alt="Academic Support" className="rounded-lg shadow-lg" />
                <img src={m2} alt="Project Help" className="rounded-lg shadow-lg mt-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Academic Services We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FileText className="h-8 w-8 text-green-600" />}
              title="Projects & Reports"
              description="Comprehensive projects , documentation and technical reports"
            />
            <ServiceCard
              icon={<PenTool className="h-8 w-8 text-green-600" />}
              title="Research Papers"
              description="Well-researched academic papers with proper citations"
            />
            <ServiceCard
              icon={<BookOpen className="h-8 w-8 text-green-600" />}
              title="Thesis Support"
              description="Guidance and assistance for thesis writing and documentation"
            />
          </div>
        </div>
      </section>

      {/* Subject Areas */}
      <section className="py-16 bg-green-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Subject Areas We Cover</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            <SubjectCard title="Computer Science" topics={["Programming", "UI/UX", "Research"]} />
            <SubjectCard title="Engineering" topics={["Mechanical", "Electrical", "Civil"]} />
            <SubjectCard title="Business" topics={["Management", "Marketing", "Finance"]} />
            <SubjectCard title="Science" topics={["Physics", "Chemistry", "Biology"]} />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <ProcessCard
              number="01"
              title="Submit Requirements"
              description="Share your project details and guidelines"
            />
            <ProcessCard
              number="02"
              title="Get a Quote"
              description="Receive a detailed price quote and timeline"
            />
            <ProcessCard
              number="03"
              title="Expert Assignment"
              description="Work with subject matter experts"
            />
            <ProcessCard
              number="04"
              title="Delivery"
              description="Receive your completed project"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-green-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <FeatureCard
              icon={<CheckCircle className="h-6 w-6 text-green-600" />}
              title="Quality Assured"
              description="High-quality academic work with proper research"
            />
            <FeatureCard
              icon={<Clock className="h-6 w-6 text-green-600" />}
              title="On-Time Delivery"
              description="Meet your deadlines with our timely delivery"
            />
            <FeatureCard
              icon={<Award className="h-6 w-6 text-green-600" />}
              title="Expert Team"
              description="Subject matter experts with academic experience"
            />
            <FeatureCard
              icon={<Lightbulb className="h-6 w-6 text-green-600" />}
              title="Original Content"
              description="100% original and plagiarism-free work"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PriceCard
              title="Basic"
              price="Starting at $75"
              features={[
                "Basic Project Reports",
                "Standard Documentation",
                "Email Support",
                "3-Weeks Delivery"
              ]}
            />
            <PriceCard
              title="Standard"
              price="Starting at $200"
              features={[
                "Detailed Project Reports",
                "Research Documentation",
                "Priority Support",
                "1-Week Delivery"
              ]}
              highlighted={true}
            />
            <PriceCard
              title="Premium"
              price="Starting at $300"
              features={[
                "Complex Project Reports",
                "Advanced Research",
                "24/7 Support",
                "3-Day Delivery"
              ]}
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

const SubjectCard = ({ title, topics }) => (
  <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {topics.map((topic, index) => (
        <li key={index} className="text-gray-600 text-sm flex items-center">
          <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
          {topic}
        </li>
      ))}
    </ul>
  </div>
);

const ProcessCard = ({ number, title, description }) => (
  <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
    <div className="text-3xl font-bold text-green-600 mb-3">{number}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="inline-block p-3 bg-green-100 rounded-full mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const PriceCard = ({ title, price, features, highlighted = false }) => (
  <div className={`p-6 rounded-lg ${highlighted ? 'bg-green-50 shadow-xl font-bold ' : 'bg-white shadow-lg'}`}>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-2xl font-bold text-green-600 mb-6">{price}</p>
    <ul className="space-y-3 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-600 text-3xl font-extrabold">
          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <Link to="/contact" className={`block text-center py-2 px-4 rounded ${highlighted ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-800'} hover:opacity-90 transition-opacity`}>
      Get Started
    </Link>
  </div>
);

const ContactInfo = ({ icon, title, detail }) => (
  <div className="flex flex-col items-center">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{detail}</p>
  </div>
);

export default AcademicServices;