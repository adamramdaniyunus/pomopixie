import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import {motion} from "motion/react"

const PixelButton = ({ children, className, onClick, variant = 'default', ...params }) => {
  const variants = {
    primary: "bg-pomo-orange text-pomo-white",
    secondary: "bg-pomo-yellow text-pomo-text",
    danger: "bg-pomo-orange text-pomo-white opacity-90",
    default: "bg-pomo-bg text-pomo-text"
  };

   // merge class
  function cn(...inputs) {
    return twMerge(clsx(inputs));
  }


  return (
    <motion.button 
      onClick={onClick}
      whileTap={{ scale:0.95, y:0 }}
      className={cn("pixel-button hover:brightness-125 hover:scale-110 transition-all duration-200", variants[variant], className)}
      {...params}
    >
      {children}
    </motion.button>
  );
};


export default PixelButton