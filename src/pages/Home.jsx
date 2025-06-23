// === Home.jsx ===
import React from 'react';
import { Link } from 'react-router-dom';
import bgVideo from 'C:/Users/kanishka/student-portal/src/components/bg.mp4';


const Home = ({ darkMode, setDarkMode }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden font-sans text-white dark:text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover z-0"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Mode Toggle */}
      <div className="absolute top-4 right-4 z-30">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 text-sm font-medium bg-white/80 dark:bg-black/70 text-black dark:text-white rounded-full shadow-md hover:scale-105 transition"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Title Section */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20 text-center">
        <h2 className="text-xl md:text-2xl tracking-wide font-light animate-fade-in">Welcome to</h2>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide mt-1 text-white dark:text-blue-300">
          <span className="marker-animated">STUDENT PORTAL</span>
        </h1>
      </div>

      {/* Floating Info Boxes */}
      <div className="absolute top-[55%] w-full px-12 flex justify-between items-center z-20">
        {[
          {
            title: '🎓 Simplify Academics',
            desc: 'Track GPA, subjects, and attendance seamlessly.'
          },
          {
            title: '👥 Collaborate',
            desc: 'Connect with peers, work on projects, and grow together.'
          },
          {
            title: '📊 Dashboard',
            desc: 'Visualize performance through smart insights and cards.'
          },
          {
            title: '🔒 Secure Access',
            desc: 'Your data is protected and accessible anytime.'
          }
        ].map((box, idx) => (
          <div
            key={idx}
            className="bg-white text-blue-900 dark:bg-blue-950 dark:text-white p-6 w-64 rounded-xl shadow-2xl hover:scale-105 hover:shadow-blue-500 transition-all duration-500 animate-float"
          >
            <p className="text-lg font-semibold mb-2">{box.title}</p>
            <p className="text-sm leading-relaxed">{box.desc}</p>
          </div>
        ))}
      </div>

      {/* Login & Signup Buttons */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
        <div className="backdrop-blur-lg bg-white/10 dark:bg-black/20 px-6 py-4 rounded-xl flex space-x-8 shadow-md">
          <Link
            to="/login"
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-white hover:text-blue-700 shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-blue-500"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-600 shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-blue-500"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10"></div>

      {/* Custom Animations */}
      <style>{`
        .animate-float {
          animation: floatBox 5s ease-in-out infinite;
        }
        @keyframes floatBox {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .marker-animated {
          position: relative;
          display: inline-block;
          color: #fff;
        }
        .marker-animated::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%) scaleX(0);
          transform-origin: left;
          width: 100%;
          height: 1.2em;
          background-color: #0ea5e9;
          z-index: -1;
          animation: markerStroke 1.3s forwards ease-in-out;
        }
        @keyframes markerStroke {
          0% {
            transform: translateY(-50%) scaleX(0);
          }
          100% {
            transform: translateY(-50%) scaleX(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;





