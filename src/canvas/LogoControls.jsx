import React from 'react';
import { useSnapshot } from 'valtio';

import state from '../store';

const LogoControls = () => {
  const snap = useSnapshot(state);

  const handlePositionChange = (index, value) => {
    state.logoPosition[index] = value;
  };

  const handleScaleChange = (value) => {
    state.logoScale = value;
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">X:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange(0, snap.logoPosition[0] - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange(0, snap.logoPosition[0] + 0.01)}
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Y:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange(1, snap.logoPosition[1] - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange(1, snap.logoPosition[1] + 0.01)}
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">Z:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange(2, snap.logoPosition[2] - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange(2, snap.logoPosition[2] + 0.01)}
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">S:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleScaleChange(snap.logoScale - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleScaleChange(snap.logoScale + 0.01)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default LogoControls;
