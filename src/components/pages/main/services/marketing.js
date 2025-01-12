import React from 'react';
import { ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import m3 from '../../../images/rb_172039.png'
const MarketingServices = () => {


    const packages = [
        {
          name: "StarterBoost",
          price: "Rs.15000 / Month",
          description: "Preferred for Startup Business",
          features: [
            "Up to 2 social media platforms",
            "6 Relevant and engaging posts per month",
            "5 Engaging Stories / Reels per Month",
            "1 Paid Advertising Campaign",
            "Social Media Marketing Strategy",
            "Cover Photo & Profile Design/Optimization",
            "Social Media Competitor Analysis",
            "Monthly Reporting and Analysis",
            "Facebook & Instagram Channel Growth",
            "Content Language - English / Tamil / Sinhala / German"
          ],
          bonus: "Free Google MyBusiness Creation"
        },
        {
          name: "BizPro",
          price: "Rs.20000 / Month",
          description: "Preferred for Small Businesses",
          features: [
            "Up to 3 social media platforms",
            "8 Relevant and engaging posts per month",
            "8 Engaging Stories/Reels per Month",
            "3 Powerful Paid Advertising Campaigns",
            "Social Media Marketing Strategy",
            "Cover Photo & Profile Design/Optimization",
            "Social Media Competitor Analysis",
            "Monthly Reporting and Analysis",
            "Content Language - English / Tamil / Sinhala / German"
          ],
          bonus: "Free Google MyBusiness Creation + One month Maintenance"
        },
        {
          name: "BizPro Plus",
          price: "Rs.30000 / Month",
          description: "Preferred for Growing Businesses",
          features: [
            "Up to 4 social media platforms",
            "15 Relevant and engaging posts per month",
            "16 Engaging Stories/Reels per Month",
            "2 short 15-second promotional videos",
            "Up to 10 Strategic Paid Advertising Campaigns",
            "2 Informative Blog Posts",
            "Social Media Marketing Strategy",
            "Community / Groups Management",
            "Social Media Competitor Analysis",
            "Bi-Weekly Reporting and Analysis"
          ],
          bonus: "Free Google MyBusiness Creation + Six month Maintenance"
        }
      ];
    
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}


      <section className="py-40 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Digital Presence
              </h1>
              <p className="text-xl text-gray-600 mb-8">
              Strategic marketing solutions to help your business grow ,
              started with digital marketing in 2020 and has since expanded We work closely with our clients to understand their unique needs and develop customized strategies that help them achieve their business goals.
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
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Marketing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Digital Marketing */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Digital Marketing</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive digital strategies to reach and engage your target audience effectively.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  SEO Optimization
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Content Marketing
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Email Campaigns
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Social Media Marketing</h3>
              <p className="text-gray-600 mb-4">
                Build and engage your community across all major social platforms.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Platform Management
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Content Creation
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Community Engagement
                </li>
              </ul>
            </div>


   


            {/* PPC Advertising */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">PPC Advertising</h3>
              <p className="text-gray-600 mb-4">
                Results-driven paid advertising campaigns that deliver ROI.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Google Ads
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Social Media Ads
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Campaign Analytics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-white text-lg mb-8">
            Let's create a customized marketing strategy for your business.
          </p>
          <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
           
            <Link to="/contact" >
            Schedule a Consultation </Link>
          </button>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Marketing Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Results</h3>
              <p className="text-gray-600">See measurable improvements in your digital presence quickly.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Proven Strategies</h3>
              <p className="text-gray-600">Tested and optimized approaches that deliver results.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance for your marketing needs.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Data-Driven</h3>
              <p className="text-gray-600">Make decisions based on real analytics and insights.</p>
            </div>
          </div>
        </div>
      </div>


      {/* Packages Section */}
   
      <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#003366] mb-12 text-center">Our Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-200 flex flex-col">
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold text-[#003366] mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <p className="text-2xl font-bold text-[#003366] mb-6">{pkg.price}</p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-[#003366] font-semibold">{pkg.bonus}</p>
                </div>
              </div>
              <div className="p-6 border-t mt-auto">
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="w-full bg-[#003366] text-white py-3 px-6 rounded-lg hover:bg-[#002244] transition duration-300 font-medium"
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default MarketingServices;