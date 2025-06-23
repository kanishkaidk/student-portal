// src/pages/Users.jsx
import React from 'react';

const dummyUsers = [
  {
    name: 'Aanya Sharma',
    email: 'aanya.sharma@example.com',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'Riya Gupta',
    email: 'riya.gupta@example.com',
    avatar: 'https://i.pravatar.cc/150?img=52',
  },
  {
    name: 'Tanishq Roy',
    email: 'tanishq.roy@example.com',
    avatar: 'https://i.pravatar.cc/150?img=59',
  },
];

function Users() {
  return (
    <div className="min-h-screen p-6 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-6 animate-fade-in">👥 Registered Users</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dummyUsers.map((user, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow hover:shadow-md transition"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-center">{user.name}</h2>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
              {user.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;

