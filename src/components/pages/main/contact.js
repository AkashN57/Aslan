import React from 'react';
import { Link } from 'react-router-dom';
import { FaLocationArrow, FaPhone, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import b1 from '../../images/contact.jpg';

function Contact() {
  const contactInfo = [
    {
      icon: <FaLocationArrow className="w-6 h-6" />,
      title: "Visit Us",
      details: ["12/1-Hindu College View Lane, Urumpirai East,", "Jaffna, Sri Lanka"],
      type: "text",
      color: "blue"
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+94-773818603", "+94-766611223"],
      type: "phone",
      color: "green"
    },
    {
      icon: <IoMailOpen className="w-6 h-6" />,
      title: "Email Us",
      details: ["aslanai.it.2020@gmail.com", "assignmentlabs83@gmail.com"],
      type: "email",
      color: "purple"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-900 py-32">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a project in mind? We're here to help bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-20">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 bg-${info.color}-100 rounded-full flex items-center justify-center mb-6`}>
                    <span className={`text-${info.color}-600 text-2xl`}>{info.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <div key={idx}>
                        {info.type === "phone" && (
                          <a href={`tel:${detail}`} 
                             className="text-gray-600 hover:text-blue-600 transition-colors">
                            {detail}
                          </a>
                        )}
                        {info.type === "email" && (
                          <a href={`mailto:${detail}`} 
                             className="text-gray-600 hover:text-blue-600 transition-colors">
                            {detail}
                          </a>
                        )}
                        {info.type === "text" && (
                          <p className="text-gray-600">{detail}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Let's Work Together
              </h2>
              <p className="text-gray-600 mb-8">
                Looking for cutting-edge software solutions? Connect with us through any of our 
                communication channels. Our team is ready to discuss your project needs and provide 
                expert guidance.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-blue-600 w-6 h-6" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us Anytime</h3>
                    <p className="text-gray-600">24/7 support available</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <IoMailOpen className="text-blue-600 w-6 h-6" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Support</h3>
                    <p className="text-gray-600">Quick response within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Connect With Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: <FaLinkedin />, link: "#", color: "blue" },
                    { icon: <FaTwitter />, link: "#", color: "sky" },
                    { icon: <FaGithub />, link: "#", color: "gray" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className={`w-12 h-12 rounded-full bg-${social.color}-100 flex items-center justify-center 
                        text-${social.color}-600 hover:bg-${social.color}-200 transition-colors`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={b1} 
                alt="Contact us" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "What services do you offer?",
                  answer: "We offer a comprehensive range of software development services including web development, mobile app development, cloud solutions, and custom software development."
                },
                {
                  question: "How can I request a quote?",
                  answer: "You can contact us through email or phone, and our team will get back to you within 24 hours with a detailed quote."
                },
                {
                  question: "Do you offer support after project completion?",
                  answer: "Yes, we provide ongoing support and maintenance services for all our projects to ensure everything runs smoothly."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full relative">
      <iframe
  title="Map showing location at 9°43'31.2'N 80°02'53.8'E"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.0123747352437!2d80.04773861477602!3d9.725336493127585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0428975e953a63%3A0xb9e728bcb9b95f9e!2s9%C2%B043'31.2%22N%2080%C2%B002'53.8%22E!5e0!3m2!1sen!2sin!4v1701778849295!5m2!1sen!2sin"
  className="w-full h-full border-0"
  allowFullScreen
  loading="lazy"
></iframe>

        
        {/* Map Overlay Card */}
        <div className="absolute top-8 left-8 bg-white rounded-lg shadow-xl p-6 max-w-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Office</h3>
          <p className="text-gray-600">
          12/1-Hindu College View Lane, Urumpirai East,
            <br />
            Jaffna, Sri Lanka
          </p>
          <Link 
            to="/about"
            className="inline-flex items-center text-blue-600 font-medium mt-4 hover:text-blue-700"
          >
            Get Directions <BsArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Contact;