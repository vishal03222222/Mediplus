import React from 'react';

// Placeholder Chart Component (replace with an actual charting library like Chart.js or ApexCharts if needed)
const Chart = () => {
  return (
    <div className="flex items-center justify-center h-full w-full bg-gray-800 rounded-lg">
      {/* This represents where the chart would be. Replace with a chart component */}
      <p className="text-gray-500">Chart goes here</p>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Recommendations</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 rounded-md">Optimization opportunities</button>
          <button className="px-4 py-2 bg-transparent text-gray-400 hover:text-white">PwHz</button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-64 px-4 py-2 bg-gray-800 rounded-md outline-none placeholder-gray-400 text-white"
        />
      </div>

      {/* Chart Container */}
      <div className="bg-gray-800 rounded-lg p-4">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-blue-400">Min PP</span>
          <span className="text-sm text-blue-200">Max f2</span>
          <span className="text-sm text-blue-100">Waste</span>
        </div>

        {/* Chart Placeholder */}
        <div className="h-96">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
