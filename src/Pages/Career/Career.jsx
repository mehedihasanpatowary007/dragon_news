import React, { useState } from "react";

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote",
      jobType: "Full-Time",
      salary: "$60k - $90k",
      experience: "Mid-Level",
      description: `
        As a Frontend Developer, you will be responsible for creating and 
        optimizing user-facing applications with a focus on performance and 
        accessibility. You'll collaborate with designers and backend developers 
        to bring stunning user experiences to life. 
      `,
      benefits: [
        "Flexible working hours",
        "Comprehensive health insurance",
        "Annual training budget",
      ],
    },
    {
      id: 2,
      title: "Backend Developer",
      location: "New York, USA",
      jobType: "Full-Time",
      salary: "$80k - $120k",
      experience: "Senior-Level",
      description: `
        Join our dynamic backend team and lead the development of scalable 
        APIs, microservices, and database solutions. You'll play a key role 
        in defining system architecture and ensuring the seamless integration 
        of backend and frontend services.
      `,
      benefits: [
        "Relocation assistance",
        "Paid parental leave",
        "Generous vacation policy",
      ],
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "San Francisco, USA",
      jobType: "Part-Time",
      salary: "$40k - $70k",
      experience: "Junior-Level",
      description: `
        As a UI/UX Designer, you'll design intuitive interfaces and workflows 
        for our web and mobile applications. You'll collaborate with cross-functional 
        teams to deliver designs that are both beautiful and functional.
      `,
      benefits: [
        "Work-from-home stipend",
        "Opportunity to work on exciting projects",
        "Mentorship from senior designers",
      ],
    },
  ];

  const handleApply = (job) => {
    setSelectedJob(job);
  };

  const closeModal = () => {
    setSelectedJob(null);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Careers at Our Company
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We’re on a mission to build a world-class team of innovators,
          thinkers, and doers. If you're passionate about technology, design, or
          engineering, and you thrive in a collaborative environment, we’d love
          to hear from you!
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {job.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{job.location}</p>
              <p className="text-gray-600 mt-4">{job.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded">
                  {job.jobType}
                </span>
                <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded">
                  {job.experience}
                </span>
              </div>
              <div className="mt-2 text-gray-800 font-semibold">
                Salary: {job.salary}
              </div>
              <ul className="mt-4 list-disc list-inside text-gray-600">
                <li>{job.benefits[0]}</li>
                <li>{job.benefits[1]}</li>
                <li>{job.benefits[2]}</li>
              </ul>
              <button
                className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => handleApply(job)}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Apply Now Modal */}
        {selectedJob && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Apply for {selectedJob.title}
              </h3>
              <p className="text-gray-600 mb-4">
                Location: <strong>{selectedJob.location}</strong>
              </p>
              <p className="text-gray-600 mb-4">
                Salary: <strong>{selectedJob.salary}</strong>
              </p>
              <p className="text-gray-600 mb-6">{selectedJob.description}</p>
              <form>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Resume
                </label>
                <input
                  type="file"
                  className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit Application
                </button>
              </form>
              <button
                className="mt-4 w-full text-center text-blue-600 hover:underline"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Career;
