// src/pages/Users.jsx
import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Network response failed');
        return res.json();
      })
      .then(data => {
        const enriched = data.map((user, idx) => ({
          ...user,
          avatar: `https://i.pravatar.cc/150?img=${(idx % 70) + 1}`, // Safe range
        }));
        setUsers(enriched);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen p-6 text-gray-800 dark:text-white bg-gradient-to-tr from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
      <h1 className="text-3xl font-bold mb-6 animate-fade-in text-center text-blue-700 dark:text-blue-300">👥 Registered Users</h1>

      {loading && <p className="text-center text-blue-600">Loading users...</p>}
      {error && <p className="text-center text-red-500">Failed to load users. Try again later.</p>}

      {!loading && !error && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {users.map(user => (
            <div
              key={user.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transform transition-transform hover:scale-105"
            >
              <img
                src={user.avatar}
                onError={(e) => { e.target.src = '/fallback-avatar.png'; }}
                alt={user.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-300 dark:border-blue-600"
              />
              <h2 className="text-xl font-semibold text-center">{user.name}</h2>
              <p className="text-sm text-center text-gray-600 dark:text-gray-400">{user.email}</p>
              <p className="text-sm text-center text-gray-500 dark:text-gray-500 mt-1">
                📞 {user.phone}
              </p>
              <p className="text-sm text-center text-blue-500 mt-1 hover:underline">
                <a href={`http://${user.website}`} target="_blank" rel="noreferrer">
                  🌐 {user.website}
                </a>
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Fade animation */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Users;



