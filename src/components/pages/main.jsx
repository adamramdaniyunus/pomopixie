import { Coffee, Egg, Sprout, TimerIcon } from "lucide-react"
import PixelButton from "../ui/button"
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const MainScreen = ({focusDuration}) => {

    const modes = [
        {id: "work_mode", name: "Work Mode", desc: "Standard productivity", icon: <Egg className='w-8 h-8'/> , color: 'bg-pomo-orange/20'},
        {id: "deep_focused", name: "Deep Focused", desc: "Strict focus mode", icon: <Sprout className='w-8 h-8'/> , color: 'bg-pomo-yellow'},
        {id: "rest_mode", name: "Break Time", desc: "Coffee time", icon: <Coffee className='w-8 h-8'/> , color: 'bg-pomo-orange'},
        {id: "stats", name: "Stats", desc: "Track productivity", icon: <TimerIcon className='w-8 h-8'/> , color: 'bg-pomo-yellow/40'},
    ]

    // merge class
    function cn(...inputs) {
        return twMerge(clsx(inputs));
    }



    return (
    <>
        <h1 className='font-pixel text-4xl uppercase tracking-wider'>Ready to focus?</h1>
        <span className='text-sm'>Pick a mode to start your journey</span>

        {/* Mode list */}
        <div className='grid grid-cols-2 mt-8 gap-4'>
            {modes.map((item) => (
            <div key={item.id} className={cn('rounded-xl items-center justify-center hover:scale-105 gap-2 transition-all ease-in-out border-pomo-text border-4 flex flex-col p-4', item.color)}>
                <div className="p-3 bg-white/50 rounded-xl border-2 border-pomo-text/10">
                {item.icon}
                </div>
                <span className='font-pixel text-xl'>
                {item.name}
                </span>
                <p className='text-[10px] text-pomo-text/40 leading-tight uppercase text-center'>{item.desc}</p>
            </div>
            ))}
        </div>


        {/* Start timer */}
        <div className='border-dashed border-pomo-text/30 border-4 mt-10 p-4 rounded-lg bg-transparent shadow-none'>
            <div className='flex flex-col items-center space-y-4 py-4'>
            <div className="flex items-center space-x-4 font-pixel text-3xl">
                <span className="opacity-40">00</span>
                <span className="opacity-20">:</span>
                <span>{focusDuration.toString().padStart(2, '0')}</span>
                <span className="opacity-20">:</span>
                <span className="opacity-40">00</span>
            </div>

            <PixelButton className='w-full uppercase' variant='primary'>
                start timer
            </PixelButton>
            </div>
        </div>

    </>
    )
}

export default MainScreen