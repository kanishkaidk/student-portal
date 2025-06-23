// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaMoon, FaSun, FaSignOutAlt } from 'react-icons/fa';

function Navbar({ setIsAuth, darkMode, setDarkMode }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('auth', 'false');
    setIsAuth(false);
    navigate('/login');
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 backdrop-blur-md transition-all duration-300">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-700 dark:text-blue-300 tracking-wide animate-fade-in">
        Student Portal
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6 text-sm font-medium">
        <Link
          to="/"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          Home
        </Link>
        <Link
          to="/dashboard"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          Dashboard
        </Link>
        <Link
          to="/users"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          Users
        </Link>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-blue-100 dark:bg-gray-700 hover:bg-blue-200 dark:hover:bg-gray-600 text-blue-700 dark:text-white shadow-md transition duration-300"
          title="Toggle Theme"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-red-100 hover:bg-red-200 text-red-700 font-semibold shadow-sm transition"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>

      {/* Animation */}
      <style>{`
        .animate-fade-in {
          animation: fadeInTop 1s ease-out;
        }
        @keyframes fadeInTop {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;


