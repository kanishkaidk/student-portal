// === Dashboard.jsx ===
import React, { useState } from 'react';
import {
  FaBook,
  FaChartLine,
  FaClipboardList,
  FaUserCircle,
  FaFileDownload,
  FaUserEdit,
  FaBars,
  FaCogs,
  FaBell
} from 'react-icons/fa';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';

const data = [
  { name: 'OOPS', GPA: 3.9 },
  { name: 'DBMS', GPA: 3.7 },
  { name: 'PHYSICS', GPA: 4.0 },
  { name: 'MATHEMATICS', GPA: 3.6 },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text("Student Report", 20, 20);
    doc.text("Name: Student User", 20, 30);
    doc.text("GPA: 3.85", 20, 40);
    doc.text("Attendance: 90%", 20, 50);
    doc.text("Subjects Enrolled: 12/15", 20, 60);
    doc.save('student-report.pdf');
  };

  return (
    <div className="flex bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 min-h-screen text-gray-800 dark:text-white font-sans">
      {/* Sidebar */}
      <aside
        className={`$${
          isSidebarOpen ? 'w-64' : 'w-0'
        } bg-white/90 dark:bg-gray-900/80 p-6 shadow-lg transition-all duration-300 overflow-hidden hidden md:block`}
      >
        <div className="flex items-center space-x-4 mb-10">
          <FaUserCircle className="text-3xl text-blue-500" />
          <div>
            <p className="font-semibold">Welcome,</p>
            <p className="text-blue-600 dark:text-blue-400 text-sm">Student User</p>
          </div>
        </div>
        <nav className="flex flex-col space-y-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-gray-700 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-600 transition">
            <FaClipboardList />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => navigate('/user')}
            className="flex items-center space-x-2 px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-lg transition"
          >
            <FaUserEdit />
            <span>User Profile</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-lg transition">
            <FaBook />
            <span>Subjects</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-lg transition">
            <FaChartLine />
            <span>Reports</span>
          </button>
          <button onClick={handleDownload} className="flex items-center space-x-2 px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-lg transition">
            <FaFileDownload />
            <span>Download Report</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-lg transition">
            <FaCogs />
            <span>Settings</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-lg transition">
            <FaBell />
            <span>Notifications</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto relative">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-6 border-b pb-4">
          <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-300 animate-fade-in">Dashboard Overview</h1>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-blue-700 dark:text-blue-300 md:hidden"
          >
            <FaBars size={24} />
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transform transition-all">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300">GPA</h2>
            <p className="text-3xl font-semibold mt-2">3.85</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Consistent performance!</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transform transition-all">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300">Attendance</h2>
            <p className="text-3xl font-semibold mt-2">90%</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Great attendance!</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transform transition-all">
            <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300">Subjects</h2>
            <p className="text-3xl font-semibold mt-2">12 / 15</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Keep it up!</p>
          </div>
        </div>

        {/* GPA Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300">Subject-wise GPA</h3>
            <button className="text-sm px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full">View Full Report</button>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis stroke="#8884d8" />
              <Tooltip wrapperClassName="text-sm font-sans" />
              <Bar dataKey="GPA" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>

      {/* Animations */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;





