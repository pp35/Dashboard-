"use client";
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const timeToMinutes = (timeStr) => {
  const [hours, minutes] = timeStr.split('h').map((part) => part.trim().replace('m', ''));
  return (parseInt(hours) || 0) * 60 + (parseInt(minutes) || 0);
};

const timeData = ["2h 4m", "0m", "0m", "8h 22m"];

const dataInMinutes = timeData.map(timeToMinutes);

const data = {
  labels: ['Active', 'Loading', 'Setup', 'Stalled'],
  datasets: [
    {
      label: 'Productivity Breakdown',
      data: dataInMinutes,
      backgroundColor: ['#22c55e', '#eab308', '#f97316', '#8B0000'],
      borderWidth: 5, 
      borderColor: '#1f2937', 
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '50%', 
  plugins: {
    legend: {
      display: false, 
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const label = context.label || '';
          const value = context.raw;
          const hours = Math.floor(value / 60);
          const minutes = value % 60;
          return `${label}: ${hours}h ${minutes}m`;
        },
      },
    },
  },
  layout: {
    padding: {
      top: 10,
      bottom: 10,
    },
  },
  elements: {
    arc: {
      borderWidth: 3, 
      borderColor: '#1f2937', 
    },
  },
};

const Productivity = () => {
  return (
    <div className="bg-gray-800 p-2 ml-1 rounded-lg max-w-full">
      <h2 className="text-xl mb-2 text-white">Productivity</h2>
      <div className="relative flex flex-col md:flex-row items-center">
        <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] flex-shrink-0 mx-auto md:mx-0">
          <Doughnut data={data} options={options} />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-4 md:mt-0 md:ml-4 text-white w-full">
          <div className="border-l-4 rounded-sm border-green-500 bg-slate-800 p-2 text-left text-gray-400">
            Active <br /><span className="text-white font-bold">2h 4m</span>
          </div>
          <div className="border-l-4 rounded-sm border-yellow-500 bg-slate-800 p-2 text-left text-gray-400">
            Loading <br /><span className="text-white font-bold">0m</span>
          </div>
          <div className="border-l-4 rounded-sm border-orange-500 bg-slate-800 p-2 text-left text-gray-400">
            Setup <br /><span className="text-white font-bold">0m</span>
          </div>
          <div className="border-l-4 rounded-sm border-red-500 bg-slate-800 p-2 text-left text-gray-400">
            Stalled <br /><span className="text-white font-bold">8h 22m</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productivity;
