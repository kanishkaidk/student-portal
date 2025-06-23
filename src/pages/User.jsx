// === UserProfile.jsx ===
import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('personal');
  const [profile, setProfile] = useState({
    name: 'Kanishka Sharma',
    email: 'kanishka@student.igdtuw.ac.in',
    branch: 'Information Technology',
    specialization: 'AI & Data Science',
    year: '2nd Year',
    phone: '9999999999',
    image: '',
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile({ ...profile, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    localStorage.setItem('studentProfile', JSON.stringify(profile));
    alert('Profile saved locally!');
  };

  const handleExport = () => {
    const printContent = document.getElementById('profile-section').innerText;
    const blob = new Blob([printContent], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'StudentProfile.txt';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-8 text-gray-800 dark:text-white">
      <button onClick={() => navigate('/dashboard')} className="flex items-center mb-6 text-blue-600 dark:text-blue-400 hover:underline">
        <FaArrowLeft className="mr-2" /> Back to Dashboard
      </button>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-3xl font-bold mb-6">Student Profile</h1>

        {/* Avatar */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500">
            {profile.image ? (
              <img src={profile.image} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-blue-200 flex items-center justify-center">No Img</div>
            )}
          </div>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="text-sm" />
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 border-b mb-4">
          <button onClick={() => setActiveTab('personal')} className={`${activeTab === 'personal' ? 'border-b-2 border-blue-600' : ''} pb-2`}>Personal Info</button>
          <button onClick={() => setActiveTab('academic')} className={`${activeTab === 'academic' ? 'border-b-2 border-blue-600' : ''} pb-2`}>Academic Info</button>
          <button onClick={() => setActiveTab('activity')} className={`${activeTab === 'activity' ? 'border-b-2 border-blue-600' : ''} pb-2`}>Activity Log</button>
        </div>

        <div id="profile-section">
          {activeTab === 'personal' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="name" value={profile.name} onChange={handleChange} placeholder="Full Name" className="p-2 rounded border dark:bg-gray-700" />
              <input name="email" value={profile.email} onChange={handleChange} placeholder="Email" className="p-2 rounded border dark:bg-gray-700" />
              <input name="phone" value={profile.phone} onChange={handleChange} placeholder="Phone" className="p-2 rounded border dark:bg-gray-700" />
            </div>
          )}

          {activeTab === 'academic' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="branch" value={profile.branch} onChange={handleChange} placeholder="Branch" className="p-2 rounded border dark:bg-gray-700" />
              <input name="specialization" value={profile.specialization} onChange={handleChange} placeholder="Specialization" className="p-2 rounded border dark:bg-gray-700" />
              <input name="year" value={profile.year} onChange={handleChange} placeholder="Year" className="p-2 rounded border dark:bg-gray-700" />
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded text-sm">
              <p>No activity yet.</p>
            </div>
          )}
        </div>

        <div className="mt-6 flex space-x-4">
          <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save</button>
          <button onClick={handleExport} className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100 dark:hover:bg-gray-700">Export</button>
        </div>
      </div>

      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.7s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default UserProfile;

