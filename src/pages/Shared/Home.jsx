import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Sliders, BarChart2, Users } from 'lucide-react';

const ques = [
 { question: "How do I create a new timetable?", answer: "Click the 'Generate Timetable Now' button to get started." },
 { question: "Can I integrate with existing systems?", answer: "Yes, our tool can integrate with your institution’s existing student information and scheduling systems." },
 { question: "Is there support for multiple departments?", answer: "Absolutely! You can manage schedules across multiple departments and faculties." },
 { question: "Is the tool accessible on mobile devices?", answer: "Yes, our user-friendly interface is accessible from any device, including mobile phones and tablets." }
];

const review = [
 { quote: "This tool saved me hours of work!", author: "John D., Teacher" },
 { quote: "The timetables are perfectly optimized.", author: "Sarah M., School Administrator" },
 { quote: "Easy to use and incredibly efficient.", author: "Mike R., University Coordinator" }
];

const steps = [
 { step: "1", description: "Input your data" },
 { step: "2", description: "Our system processes the information" },
 { step: "3", description: "Receive your optimized timetable" }
];

const features = [
 { icon: <Calendar className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />, title: "Easy Input", description: "Quickly enter your courses, classrooms, and teacher availability." },
 { icon: <Sliders className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />, title: "Intelligent Algorithm", description: "Our advanced algorithm creates optimized timetables based on your preferences." },
 { icon: <BarChart2 className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />, title: "Customization", description: "Adjust timetable settings to fit your specific requirements." },
 { icon: <Users className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />, title: "Visual Representation", description: "Clearly view your generated timetable in an easy-to-understand format." }
];

const HomePage = () => {
 return (
   <div className="bg-gradient-to-br from-indigo-50 to-cyan-100 dark:from-gray-900 dark:to-gray-800 min-h-screen py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
     <section className="bg-indigo-600 text-white py-20">
       <div className="container mx-auto px-4 text-center">
         <h1 className="text-4xl md:text-5xl font-bold mb-4">Seamlessly Create Perfect Timetables for Your College</h1>
         <p className="text-xl mb-6">Our advanced tool helps you save time by generating optimal schedules effortlessly.</p>
         <Link to="/register" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
           Generate Timetable Now
         </Link>
       </div>
     </section>
     <section className="py-24">
       <div className="container mx-auto px-4">
         <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-16 text-center">
           Robust Features for Smooth Scheduling
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
           {features.map((feature, index) => (
             <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition duration-300 hover:shadow-xl border-l-4 border-indigo-500 dark:border-indigo-400">
               <div className="mb-6">{feature.icon}</div>
               <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">{feature.title}</h3>
               <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
             </div>
           ))}
         </div>
       </div>
     </section>

     <section className="bg-indigo-50 dark:bg-gray-700 py-20">
       <div className="container mx-auto px-4 text-center">
         <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">How It Works</h2>
         <div className="flex flex-col md:flex-row justify-around items-center">
           {steps.map((step, index) => (
             <div key={index} className="flex flex-col items-center mb-6 md:mb-0">
               <div className="bg-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                 {step.step}
               </div>
               <p className="text-gray-700 dark:text-gray-300 text-center">{step.description}</p>
             </div>
           ))}
         </div>
       </div>
     </section>

     <section className="py-20">
       <div className="container mx-auto px-4 text-center">
         <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">What Our Users Say</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {review.map((testimonial, index) => (
             <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-indigo-500 dark:border-indigo-400">
               <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
               <p className="text-gray-800 dark:text-white font-semibold">{testimonial.author}</p>
             </div>
           ))}
         </div>
       </div>
     </section>

     <section className="bg-indigo-50 dark:bg-gray-700 py-20">
       <div className="container mx-auto px-4 text-center">
         <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">Frequently Asked Questions</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {ques.map((faq, index) => (
             <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-indigo-500 dark:border-indigo-400">
               <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{faq.question}</h3>
               <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
             </div>
           ))}
         </div>
       </div>
     </section>
     <section className="bg-indigo-600 text-white py-20">
       <div className="container mx-auto px-4 text-center">
         <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
         <p className="text-xl mb-6">Join us today and experience hassle-free timetable management.</p>
         <Link to="/register" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
           Sign Up Now
         </Link>
       </div>
     </section>
   </div>
 );
};

export default HomePage;


