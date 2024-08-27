import React, { useState } from 'react';
import { Home, Dashboard, Settings, Layers, BarChart, Build, PhotoLibrary, Menu } from '@mui/icons-material';

const SideNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-800 h-screen w-14 md:w-20 flex flex-col justify-between items-center py-6 relative">
      {/* Mobile Menu Toggle */}
      <div className="md:hidden absolute top-2 left-2 cursor-pointer text-white" onClick={toggleNav}>
        <Menu />
      </div>

      {/* Sidebar Items */}
      <div className={`flex flex-col items-center space-y-6 md:space-y-8 transition-all duration-300 ${isOpen ? 'block' : 'hidden'} md:flex`}>
        <NavItem icon={<Home />} color="text-white" />
        <NavItem icon={<Dashboard />} />
        <NavItem icon={<Layers />} />
        <NavItem icon={<BarChart />} />
        <NavItem icon={<Build />} />
        <NavItem icon={<PhotoLibrary />} />
      </div>

      {/* Settings Icon */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:flex`}>
        <NavItem icon={<Settings />} />
      </div>
    </div>
  );
};

const NavItem = ({ icon, color = "text-gray-400" }) => {
  return (
    <div className={`${color} cursor-pointer hover:text-white`}>
      {icon}
    </div>
  );
};

export default SideNavBar;
