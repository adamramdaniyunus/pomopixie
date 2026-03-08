import React from 'react'
import cn from "../../utils/cn"

const PixelCard = ({ children, className, onClick }) => (
  <div 
    onClick={onClick}
    className={cn(
      "pixel-card transition-transform active:scale-[0.98]", 
      onClick && "cursor-pointer hover:bg-pomo-bg/20",
      className
    )}
  >
    {children}
  </div>
);

export default PixelCard