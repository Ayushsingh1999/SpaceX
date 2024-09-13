import React, { useState } from 'react';
import logo from "../assets/logo/SpaceX_logo.png";
import backgroundImage from "../assets/background/spaceX.jpg";
import Dashboard from './Dashboard';
import Rockets from './Rockets';



const Card = () => {
  const [view, setView] = useState("dashboard");

  return (
    <div className="flex w-11/12 overflow-hidden rounded-lg shadow-lg h-5/6">
      {/* White Section */}
      <div className="flex-col w-1/5 bg-white flex items-center pt-10">
        <img src={logo} alt="SpaceX Logo" className="w-44 mb-16" />
        <nav className="space-y-2">
          <button
            className={`block text-gray-600 text-lg font-medium ${view === 'dashboard' ? 'underline' : ''}`}
            onClick={() => setView('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={`block text-gray-600 text-lg font-medium ${view === 'rockets' ? 'underline' : ''}`}
            onClick={() => setView('rockets')}
          >
            Rockets
          </button>
        </nav>
      </div>

      {/* Background Image Section with Overlaid Content */}
      <div
        className="relative flex-none w-4/5 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay for Content */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center p-8">
          {view === 'dashboard' ? <Dashboard /> : <Rockets />}
        </div>
      </div>
    </div>
  );
};

export default Card;
