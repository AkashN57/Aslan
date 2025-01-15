// CareersPage.js

import React, { useState } from "react";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaClock,
  FaSearch,
  FaBuilding,
  FaUsers,
  FaRocket,
  FaGraduationCap,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { Search } from "lucide-react";
// Sample data
const departments = [
  { id: "all", name: "All Departments" },
  { id: "engineering", name: "Engineering" },
  { id: "design", name: "Design" },
  { id: "product", name: "Product" },
  { id: "marketing", name: "Marketing" },
];

const jobs = [
  {
    id: 1,
    title: "Frontend Intern",
    department: "engineering",
    location: "Remote",
    type: "Full-Time",
    posted: "3 days ago",
    description: "Develop responsive web applications using React.js.",
  },
  {
    id: 2,
    title: "UI/UX Intern",
    department: "design",
    location: "Remote",
    type: "Full-Time",
    posted: "1 week ago",
    description: "Design user-friendly interfaces and experiences.",
  },
  {
    id: 3,
    title: "Backend Intern",
    department: "engineering",
    location: "Remote",
    type: "Part-Time",
    posted: "2 weeks ago",
    description: "Develop backend using Node js.",
  },
  {
    id: 4,
    title: "Digital Marketering Intern",
    department: "marketing",
    location: "Remote",
    type: "Contract",
    posted: "5 days ago",
    description: "Create and execute digital marketing campaigns.",
  },
];

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const [isFocused, setIsFocused] = useState(false);
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase());
    const matchesDepartment =
      selectedDepartment === "all" || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-900 py-32">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Build the future of software with us. We're looking for talented
            individuals who are passionate about innovation.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div
              className={`flex items-center bg-white rounded-full transition-shadow duration-300 ${
                isFocused ? "shadow-lg" : "shadow-md"
              }`}
            >
              <input
                type="text"
                placeholder="Search for jobs..."
                className="flex-1 px-6 py-3.5 text-gray-800 placeholder-gray-400 text-lg rounded-l-full focus:outline-none bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                aria-label="Search for jobs"
              />
              <div className="pr-1.5 py-1.5">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-full transition-colors duration-200 flex items-center justify-center w-11 h-11"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Join Aslan AI?
          </h2>
          <p className="text-gray-600 mt-4">
            Discover the benefits of working with us
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {[
              {
                icon: <FaBuilding className="text-3xl text-blue-600" />,
                title: "Modern Workplace",
                description:
                  "Work in a state-of-the-art office or remotely with the latest tools and technologies.",
              },
              {
                icon: <FaUsers className="text-3xl text-green-600" />,
                title: "Great Team Culture",
                description:
                  "Join a diverse and inclusive team that values collaboration and innovation.",
              },
              {
                icon: <FaRocket className="text-3xl text-purple-600" />,
                title: "Career Growth",
                description:
                  "Clear career progression paths and opportunities for professional development.",
              },
              {
                icon: <FaGraduationCap className="text-3xl text-red-600" />,
                title: "Continuous Learning",
                description:
                  "Access to learning resources, workshops, and conferences.",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Open Positions</h2>
            <p className="text-gray-600 mt-4">
              Find your next career opportunity
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedDepartment === dept.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.length ? (
              filteredJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="flex items-center text-gray-500 text-sm space-x-4 mb-4">
                    <span className="flex items-center gap-2">
                      <FaBriefcase /> {job.type}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt /> {job.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaClock /> {job.posted}
                    </span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
                    Apply Now <BsArrowRight />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">
                No jobs match your criteria.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
