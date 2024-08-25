"use client";

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";


// Register necessary Chart.js components
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const MachineStatus = () => {
  const [data, setData] = useState([]);

  // Example Machine Content
  const MachineContent = [
    { label: "Active", time: "2h 4m", color: "rgb(21, 128, 61)" },
    { label: "Loading", time: "0m", color: "rgb(255, 207, 0)" },
    { label: "Setup", time: "0m", color: "rgb(0, 128, 255)" },
    { label: "Stalled", time: "8h 22m", color: "rgb(153, 27, 27)" },
  ];

  useEffect(() => {
    // Simulate fetching data
    const fetchedData = [
      {
        mode: "MEM",
        program: "MEM 09001",
        tool: "1",
      },
      {
        partcount: "188",
        partgoal: "0",
        spindle: "0",
      },
    ];
    setData(fetchedData);
  }, []);

  // Data for the line chart representing the bullet chart
  const bulletData = {
    labels: ["0%", "20%", "40%", "60%", "80%", "100%"], 
    datasets: [
      {
        label: "Actual",
        data: [0, 10, 40, 50, 0, 100], 
        borderColor: "rgba(21, 128, 61, 1)", // Green color
        borderWidth: 5,
        pointRadius: 0, 
        fill: false,
      },
      {
        label: "Target",
        data: [0, 24, 0, 0, 0, 40],
        borderColor: "rgba(153, 27, 27, 1)", // Red color
        borderWidth: 5,
        pointRadius: 0, 
        fill: false,
      },
      
    ],
  };

  const bulletOptions = {
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}%`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-gray-800 m-1 rounded mb-1 ">
      <div className="flex">
        <h2 className="text-[14px] font-bold text-gray-300 mx-4">HALO - 01</h2>
        <h2 className="text-[14px] text-white border border-gray-300 rounded px-2 mx-24 mt-1 w-fit">
          IDLE
        </h2>
      </div>
      <div className="flex my-6">
        <div className="flex w-full">
          <div className="flex flex-col w-1/2 p-2 rounded-md space-y-4">
            {/* First Section */}
            {data.length > 0 && (
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-4">
                  <div className="flex flex-col w-1/3">
                    <div className="flex-grow border border-gray-500 py-1 rounded-t-md flex items-center justify-center">
                      <span className="text-[12px] text-gray-200">MODE</span>
                    </div>
                    <div className="flex-grow bg-gray-800 border border-gray-500 rounded-b-md flex items-center justify-center py-1">
                      <span className="text-[12px] text-gray-200">{data[0].mode}</span>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/3 ml-4">
                    <div className="flex-grow border border-gray-500 rounded-t-md flex items-center justify-center py-1">
                      <span className="text-[12px] text-gray-200">PROGRAM</span>
                    </div>
                    <div className="flex-grow bg-gray-800 border border-gray-500 rounded-b-md flex items-center justify-center py-1">
                      <span className="text-[12px] text-gray-200">{data[0].program}</span>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/3 ml-4">
                    <div className="flex-grow border border-gray-500 rounded-t-md flex items-center justify-center py-1">
                      <span className="text-[12px] text-gray-200">TOOL</span>
                    </div>
                    <div className="flex-grow bg-gray-800 border border-gray-500 rounded-b-md flex items-center justify-center py-1">
                      <span className="text-[12px] text-gray-200">{data[0].tool}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Second Section */}
            {data.length > 1 && (
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex space-x-4">
                  <div className="flex flex-col w-1/3">
                    <div className="flex-grow border border-gray-500 rounded-t-md flex items-center justify-center">
                      <span className="text-[12px] text-white">PART COUNT</span>
                    </div>
                    <div className="flex-grow bg-gray-800 border border-gray-500 rounded-b-md flex items-center justify-center">
                      <span className="text-[12px] text-white">{data[1].partcount}</span>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/3 ml-4">
                    <div className="flex-grow border border-gray-500 rounded-t-md flex items-center justify-center py-1">
                      <span className="text-[12px] text-white">PART GOAL</span>
                    </div>
                    <div className="flex-grow bg-gray-800 border border-gray-500 rounded-b-md flex items-center justify-center py-1">
                      <span className="text-[12px] text-white">{data[1].partgoal}</span>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/3 ml-4">
                    <div className="flex-grow border border-gray-500 rounded-t-md flex items-center justify-center py-1">
                      <span className="text-[12px] text-white">SPINDLE</span>
                    </div>
                    <div className="flex-grow bg-gray-800 border border-gray-500 rounded-b-md flex items-center justify-center py-1">
                      <span className="text-[12px] text-white">{data[1].spindle}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Productivity Container */}
          <div className="flex flex-col w-1/2 p-2 space-y-4">
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4 w-full">
                {MachineContent.slice(0, 2).map((item, index) => (
                  <div key={index} className="w-full bg-gray-800 rounded-md flex items-center">
                    <div className="w-1 h-14 rounded-xl mr-2" style={{ backgroundColor: item.color }}></div>
                    <div>
                      <div className="font-bold text-[12px] text-gray-300">{item.label}</div>
                      <div className="text-gray-400 text-[14px]">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4 w-full">
                {MachineContent.slice(2).map((item, index) => (
                  <div key={index} className="w-full bg-gray-800 rounded-md flex items-center">
                    <div className="w-1 h-14 rounded-xl mr-2" style={{ backgroundColor: item.color }}></div>
                    <div>
                      <div className="font-bold text-[12px] text-gray-300">{item.label}</div>
                      <div className="text-gray-400 text-[14px]">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
 
        {/* Bullet Chart Section */}
        <div className="w-full mt-2">
          <div className="h-32 w-full bg-gray-800 p-4  border border-gray-700">
            <Line data={bulletData} options={bulletOptions} />
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default MachineStatus;
