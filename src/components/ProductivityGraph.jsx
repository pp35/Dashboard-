"use client";

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const data = {
  labels: ['07/26', '07/27', '07/28', '07/29'],
  datasets: [
    {
      label: 'Productivity (Solid Line)',
      data: [0, 10, 20, 30],
      fill: false,
      borderColor: '#22c55e',
      borderWidth: 2,
      tension: 0.1,
    },
    {
      label: 'Productivity (Dotted Line)',
      data: [0, 15, 25, 35],
      fill: false,
      borderColor: '#22c55e',
      borderWidth: 2,
      borderDash: [5, 5], // Dotted line style
      tension: 0.1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Disable legend
    },
    tooltip: {
      callbacks: {
        label: (context) => `${context.dataset.label || 'Value'}: ${context.raw}%`, // Display percentages in tooltip
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
         // X-axis title
      },
    },
    y: {
      title: {
        display: true,
        // Y-axis title
      },
      ticks: {
        stepSize: 10, // Set increment between y-axis ticks
        callback: (value) => `${value}%`, // Format y-axis ticks as percentages
      },
      min: 0, // Set minimum value for y-axis
      max: 100, // Set maximum value for y-axis
    },
  },
};

const ProductivityGraph = () => {
  return (
    <div className="bg-gray-800 p-5 rounded-lg">
    <div  style={{ height: '200px' }}>
      <Line data={data} options={options} />
    </div>
    </div>
  );
};

export default ProductivityGraph;
