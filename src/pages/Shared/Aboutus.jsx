import React from 'react';
import { Zap, Shield, Users, Lightbulb } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-indigo-500 dark:border-indigo-400">
    <div className="flex items-center mb-4">
      <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mr-4">
        <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
    </div>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate complex timetables in seconds with our advanced algorithms."
  },
  {
    icon: Shield,
    title: "Conflict Resolution",
    description: "Automatically detect and resolve scheduling conflicts for smooth operations."
  },
  {
    icon: Users,
    title: "Multi-User Support",
    description: "Collaborative platform for administrators, teachers, and students."
  },
  {
    icon: Lightbulb,
    title: "Smart Suggestions",
    description: "AI-powered recommendations for optimal resource allocation."
  }
];

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 min-h-screen py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Revolutionizing <span className="text-indigo-600 dark:text-indigo-400">Timetable Management</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            TimetablePro is not just a scheduler; it's your partner in creating harmonious academic rhythms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            At TimetablePro, we're on a mission to simplify the complex world of academic scheduling. We believe that 
            efficient timetables are the backbone of a productive learning environment. By harnessing the power of 
            cutting-edge technology and user-centric design, we're committed to delivering a solution that saves time, 
            reduces stress, and enhances the overall educational experience for institutions worldwide.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Ready to Transform Your Scheduling?</h2>
          <a 
            href="#contact" 
            className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors duration-300"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;