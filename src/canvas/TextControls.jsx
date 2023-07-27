import React from 'react';
import { useSnapshot } from 'valtio';

import state from '../store';

const TextControls = () => {
  const snap = useSnapshot(state);

  const handleTextChange = (type, value) => {
    if (type === 'front') {
      state.frontText = value;
    } else if (type === 'back') {
      state.backText = value;
    }
  };

  const handlePositionChange = (type, index, value) => {
    if (type === 'front') {
      state.frontTextPosition[index] = value;
    } else if (type === 'back') {
      state.backTextPosition[index] = value;
    }
  };

  const handleRotationChange = (type, index, value) => {
    if (type === 'front') {
      state.frontTextRotation[index] = value;
    } else if (type === 'back') {
      state.backTextRotation[index] = value;
    }
  };

  const handleScaleChange = (type, index, value) => {
    if (type === 'front') {
      state.frontTextScale[index] = value;
    } else if (type === 'back') {
      state.backTextScale[index] = value;
    }
  };

  const handleFontChange = (type, value) => {
    if (type === 'front') {
      state.frontTextFont = value;
    } else if (type === 'back') {
      state.backTextFont = value;
    }
  };

  const handleColorChange = (type, value) => {
    if (type === 'front') {
      state.frontTextColor = value;
    } else if (type === 'back') {
      state.backTextColor = value;
    }
  };

  return (
    <div className="absolute left-full ml-3 flex flex-wrap space-y-2  overflow-y-scroll w-40 h-80">
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">FT:</span>
        <input
          type="text"
          value={snap.frontText}
          onChange={(event) => handleTextChange('front', event.target.value)}
        />
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">FX:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('front', 0, snap.frontTextPosition[0] - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('front', 0, snap.frontTextPosition[0] + 0.01)}
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">FY:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('front', 1, snap.frontTextPosition[1] - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('front', 1, snap.frontTextPosition[1] + 0.01)}
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">FZ:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('front', 2, snap.frontTextPosition[2] - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('front', 2, snap.frontTextPosition[2] + 0.01)}
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">FRX:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleRotationChange('front', 0, snap.frontTextRotation[0] - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleRotationChange('front', 0, snap.frontTextRotation[0] + 0.01)}
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">FRY:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleRotationChange('front', 1, snap.frontTextRotation[1] - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleRotationChange('front', 1, snap.frontTextRotation[1] + 0.01)}
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">FRZ:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleRotationChange('front', 2, snap.frontTextRotation[2] - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleRotationChange('front', 2, snap.frontTextRotation[2] + 0.01)}
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">FSX:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleScaleChange('front', 0, snap.frontTextScale[0] - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleScaleChange('front', 0, snap.frontTextScale[0] + 0.01)}
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">FSY:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleScaleChange('front', 1, snap.frontTextScale[1] - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleScaleChange('front', 1, snap.frontTextScale[1] + 0.01)}
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">FSZ:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleScaleChange('front', 2, snap.frontTextScale[2] - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleScaleChange('front', 2, snap.frontTextScale[2] + 0.01)}
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">FF:</span>
        <input
          type="text"
          value={snap.frontTextFont}
          onChange={(event) => handleFontChange('front', event.target.value)}
        />
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">FC:</span>
        <input
          type="color"
          value={snap.frontTextColor}
          onChange={(event) => handleColorChange('front', event.target.value)}
        />
      </div>

      {/*  Back text controls */}
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">BT:</span>
        <input
          type="text"
          value={snap.backText}
          onChange={(event) => handleTextChange('back', event.target.value)}
        />
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">BX:</span>
         <button
            className="border border-gray-300 rounded-md p-2"
            onClick={() => handlePositionChange('back', 0, snap.backTextPosition[0] - 0.01)}
         >
            -
         </button>
         <button
            className="border border-gray-300 rounded-md p-2"
            onClick={() => handlePositionChange('back', 0, snap.backTextPosition[0] + 0.01)}
         >
            +
         </button> 
      </div> 
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">BY:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('back', 1, snap.backTextPosition[1] - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('back', 1, snap.backTextPosition[1] + 0.01)}
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">BZ:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('back', 2, snap.backTextPosition[2] - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handlePositionChange('back', 2, snap.backTextPosition[2] + 0.01)}
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">BRX:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleRotationChange('back', 0, snap.backTextRotation[0] - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleRotationChange('back', 0, snap.backTextRotation[0] + 0.01)}
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">BRY:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleRotationChange('back', 1, snap.backTextRotation[1] - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleRotationChange('back', 1, snap.backTextRotation[1] + 0.01)}
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">BRZ:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleRotationChange('back', 2, snap.backTextRotation[2] - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleRotationChange('back', 2, snap.backTextRotation[2] + 0.01)}
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">BSX:</span>
         <button
            className="border border-gray-300 rounded-md p-2"
            onClick={() => handleScaleChange('back', 0, snap.backTextScale[0] - 0.01)}
         >
            -
         </button>
         <button
            className="border border-gray-300 rounded-md p-2"
            onClick={() => handleScaleChange('back', 0, snap.backTextScale[0] + 0.01)}
         >
            +
         </button> 
      </div> 
      <div className="flex items-center space-x-2">
         <span className="text-gray-700">BSY:</span> 
         <button 
            className="border border-gray-300 rounded-md p-2" 
            onClick={() => handleScaleChange('back', 1, snap.backTextScale[1] - 0.01)} 
         > 
            - 
         </button> 
         <button 
            className="border border-gray-300 rounded-md p-2" 
            onClick={() => handleScaleChange('back', 1, snap.backTextScale[1] + 0.01)} 
         > 
            + 
         </button> 
      </div> 
      <div className="flex items-center space-x-2">
      <span className="text-gray-700">BSZ:</span>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleScaleChange('back', 2, snap.backTextScale[2] - 0.01)}
        >
          -
        </button>
        <button
          className="border border-gray-300 rounded-md p-2"
          onClick={() => handleScaleChange('back', 2, snap.backTextScale[2] + 0.01)}
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">BF:</span>
        <input
          type="text"
          value={snap.backTextFont}
          onChange={(event) => handleFontChange('back', event.target.value)}
        />
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">BC:</span>
        <input
          type="color"
          value={snap.backTextColor}
          onChange={(event) => handleColorChange('back', event.target.value)}
        />
      </div>
    </div>
  );
};

export default TextControls;
