import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

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
    <button 
      onClick={onClick}
      className={cn("pixel-button", variants[variant], className)}
      {...params}
    >
      {children}
    </button>
  );
};


export default PixelButton