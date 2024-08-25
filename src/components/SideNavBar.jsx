
import React from 'react';
import { Home, Dashboard, Settings, Layers, BarChart, Build, PhotoLibrary } from '@mui/icons-material';

const SideNavBar = () => {
  return (
    <div className="bg-gray-800 h-screen w-14 flex flex-col justify-between items-center py-6">
      <div className="flex p-40 flex-col items-center">
        <NavItem icon={<Home />} color="text-white" />       
        <NavItem icon={<Dashboard />} />
        <NavItem icon={<Layers />} />
        <NavItem icon={<BarChart />} />
        <NavItem icon={<Build />} />
        <NavItem icon={<PhotoLibrary />} />  
      </div>
      <div>
        <NavItem icon={<Settings />} />
      </div>
    </div>
  );
};

const NavItem = ({ icon, color = "text-gray-400" }) => {  // 
  return (
    <div className={`${color} mb-6 cursor-pointer hover:text-white`}>
      {icon}
    </div>
  );
};

export default SideNavBar;
