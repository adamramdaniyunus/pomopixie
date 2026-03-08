import React from 'react'

const DurationSettings = ({
    value,
    handleDurationBtn,
    type,
    label
}) => {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="font-bold text-sm uppercase">{label}</span>
      <div className="flex items-center space-x-3">
        <button 
          onClick={() => handleDurationBtn(type, 'decrease')}
          className="w-8 h-8 flex items-center justify-center bg-pomo-orange/20 border-2 border-pomo-text rounded-lg font-pixel text-xl"
        >
          -
        </button>
        <span className="font-pixel text-2xl w-8 text-center">{value}</span>
        <button 
          onClick={() => handleDurationBtn(type, 'increase')}
          className="w-8 h-8 flex items-center justify-center bg-pomo-orange/20 border-2 border-pomo-text rounded-lg font-pixel text-xl"
        >
          +
        </button>
      </div>
    </div>
  )
}

export default DurationSettings