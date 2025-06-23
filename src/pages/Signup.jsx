import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find((user) => user.email === email)) {
      alert('Account already exists. Please login.');
      navigate('/login');
    } else {
      users.push({ name, email, password });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Account created successfully! Please login.');
      navigate('/login');
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 font-sans text-gray-900 dark:text-white">
      {/* Back Button */}
      <Link to="/" className="absolute top-6 left-6 text-sm text-blue-700 dark:text-blue-300 hover:underline">
        ← Back to Home
      </Link>

      {/* Signup Box */}
      <div className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl max-w-md w-full animate-fade-in-up">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700 dark:text-blue-400">Create an Account</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-full transition duration-300 shadow-md hover:shadow-xl"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-700 dark:text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>

      {/* Animation */}
      <style>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Signup;
