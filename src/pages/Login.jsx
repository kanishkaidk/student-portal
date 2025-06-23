import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth, setUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      localStorage.setItem('auth', 'true');                    // ✅ persist auth
      localStorage.setItem('user', foundUser.name);            // ✅ store name
      setIsAuth(true);                                         // ✅ update state
      setUser(foundUser.name);                                 // ✅ update state
      navigate('/dashboard');                                  // ✅ redirect
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800 font-sans text-gray-800 dark:text-white">
      {/* Back Button */}
      <Link to="/" className="absolute top-6 left-6 text-sm text-blue-700 dark:text-blue-300 hover:underline">
        ← Back to Home
      </Link>

      {/* Login Box */}
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl max-w-md w-full animate-fade-in-up">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700 dark:text-blue-400">Login to Your Account</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
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
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-blue-700 dark:text-blue-400 hover:underline">
            Sign up
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

export default Login;

