import React from 'react';
import { ArrowDropUp, ArrowDropDown, HelpOutline } from '@mui/icons-material';

const stats = [
  { label: 'Active', value: '20%', change: '+20%', changeColor: 'text-green-400', icon: <ArrowDropUp className="text-green-400" /> },
  { label: 'Setup', value: '0%', change: '', changeColor: 'text-gray-400', icon: null },
  { label: 'Stall', value: '80%', change: '+20%', changeColor: 'text-green-400', icon: <ArrowDropUp className="text-green-400" /> },
  { label: 'Machine Hours', value: '10.4hr', change: '-36hr', changeColor: 'text-red-400', icon: <ArrowDropDown className="text-red-400" /> },
  { label: 'Time Stalled', value: '502min', change: '2276min', changeColor: 'text-green-400', icon: <ArrowDropUp className="text-green-400" /> },
  { label: 'Parts Made', value: '0', change: '', changeColor: 'text-gray-400', icon: null },
];

const Header = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 p-1  gap-3 ">
      {stats.map((stat, index) => (
        <div key={index} className="relative bg-gray-800  rounded-lg">
          <HelpOutline className="absolute top-2 right-2 text-gray-400 cursor-pointer h-4 w-4" />
          <div className="text-xl md:text-2xl font-extrabold m-2">{stat.value}</div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              {stat.icon && <span className="ml-1">{stat.icon}</span>}
            </div>
            {stat.change && <div className={`text-sm md:text-base ${stat.changeColor}`}>{stat.change}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Header;
 