import { useState } from 'react'
import './App.css'
import {
  Coffee,
  Egg,
  LayoutGrid,
  Sprout,
  TimerIcon,
  User
} from "lucide-react"
import {twMerge} from "tailwind-merge"
import {clsx} from "clsx"
import PixelButton from './components/ui/button'

function App() {

  /**
   * State local manage local state here
   */

  const [focusDuration, setFocusDuration] = useState(25)

  // merge class
  function cn(...inputs) {
    return twMerge(clsx(inputs));
  }

  const modes = [
    {id: "work_mode", name: "Work Mode", desc: "Standard productivity", icon: <Egg className='w-8 h-8'/> , color: 'bg-pomo-orange/20'},
    {id: "deep_focused", name: "Deep Focused", desc: "Strict focus mode", icon: <Sprout className='w-8 h-8'/> , color: 'bg-pomo-yellow'},
    {id: "rest_mode", name: "Break Time", desc: "Coffee time", icon: <Coffee className='w-8 h-8'/> , color: 'bg-pomo-orange'},
    {id: "stats", name: "Stats", desc: "Track productivity", icon: <TimerIcon className='w-8 h-8'/> , color: 'bg-pomo-yellow/40'},
  ]
  

  /**
   * Logic Functions
   */

  /**
   * Function for button navigation
   * when button clicked it will redirect to menu page
   */
  const handleNavigationBtn = () => {
    console.log("clicked");
  }

  /**
   * Function for button profile
   * when button clicked it will be redirect to profile menu
   */
  const handleProfileBtn = () => {
    console.log("clicked");
  }

  return (
   <div className="flex flex-col min-h-screen gap-5 bg-pomo-bg">
      {/* Header section */}
      <nav className="flex gap-4 justify-between items-center px-6 py-4"> 
        <button className='text-2xl' onClick={handleNavigationBtn}>
            <LayoutGrid/>
        </button>

        <div>
          <h1 className='uppercase tracking-widest text-2xl font-pixel'>pomopixie</h1>
        </div>

        <button onClick={handleProfileBtn}>
          <User/>
        </button>
      </nav>

      {/* Main content section */}
      <main className='flex flex-col px-4 gap-0.5'>

        <h1 className='font-pixel text-4xl uppercase tracking-wider'>Ready to focus?</h1>
        <span className='text-sm'>Pick a mode to start your journey</span>

        {/* Mode list */}
        <div className='grid grid-cols-2 mt-8 gap-4'>
          {modes.map((mode) => (
            <div key={mode.id} className={cn('rounded-xl items-center justify-center hover:scale-105 gap-2 transition-all ease-in-out border-pomo-text border-4 flex flex-col p-4', mode.color)}>
              <div className="p-3 bg-white/50 rounded-xl border-2 border-pomo-text/10">
                {mode.icon}
              </div>
              <span className='font-pixel text-xl'>
                {mode.name}
              </span>
              <p className='text-[10px] text-pomo-text/40 leading-tight uppercase text-center'>{mode.desc}</p>
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
      </main>

      {/* Footer section */}
      <footer className='sticky bottom-0 bg-pomo-bg shadow-md px-4 py-2'>
        Footer here
      </footer>
   </div>
  )
}

export default App
