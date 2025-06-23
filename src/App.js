import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import User from './pages/User'; // ✅ NEW IMPORT

function App() {
  const [isAuth, setIsAuth] = useState(() => localStorage.getItem("auth") === "true");
  const [user, setUser] = useState(() => localStorage.getItem("user") || "");
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <Router>
      {isAuth && (
        <Navbar
          setIsAuth={setIsAuth}
          user={user}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/login"
          element={
            isAuth ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login setIsAuth={setIsAuth} setUser={setUser} />
            )
          }
        />
        <Route
          path="/signup"
          element={
            isAuth ? <Navigate to="/dashboard" /> : <Signup />
          }
        />
        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            isAuth ? <Dashboard /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/users"
          element={
            isAuth ? <Users /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/user"
          element={
            isAuth ? <User /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;


