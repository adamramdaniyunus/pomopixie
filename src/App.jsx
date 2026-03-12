import { useState } from 'react'
import './App.css'
import {
  BarChart3,
  LayoutGrid,
  ShoppingBag,
  TimerIcon,
  User
} from "lucide-react"
import PixelButton from './components/ui/button'
import MainScreen from './components/pages/main'
import SettingsPage from './components/pages/settings'
import { motion } from 'motion/react'
import cn from './utils/cn'


function App() {

  /**
   * State local manage local state here
   */

  const [focusDuration, setFocusDuration] = useState(25)
  const [mode, setMode] = useState("work_mode")
  const [breakDuration, setBreakDuration] = useState(5)
  const [screen, setScreen] = useState("home")


  /**
   * Logic Functions
   */

  /**
   * Function for button navigation
   * when button clicked it will redirect to menu page
   */
  const handleNavigationBtn = () => {
    setScreen("settings");
  }

  /**
   * Function for button profile
   * when button clicked it will be redirect to profile menu
   */
  const handleProfileBtn = () => {
    console.log("clicked");
  }

  /**
   * Function for handle render screen
   * Edit here when u want add render screen
   */
  const handleRenderScreen = (screenId) => {
    const renderScreen = screenSection.find((prev) => prev.id === screenId);
    if(!renderScreen) return
    return renderScreen.screen
  }

  /**
   * Function for handle footer navigation
   * when user click the button it will render screen
   */
  const handleWidgetBtn = (screenId) => {
    // avoid re render same screen
    if(screenId === screen) return;
    setScreen(screenId)
  }

  /**
   * Function for handle card mode
   * when user clicked the button it will be redirect into timer page with mode selected
   */
  const handleModeBtn = (modeId) => {
    setMode(modeId)
    setScreen('timer')
  }

  const navigationButton = [
    {id: "home", name: "Home", desc: "Back to home", icon: <LayoutGrid className='w-8 h-8'/>, color: "bg-pomo-text"},
    {id: "timer", name: "timer", desc: "Start timer", icon: <TimerIcon className='w-8 h-8'/>, color: "bg-pomo-text"},
    {id: "stats", name: "Stats", desc: "See statistic", icon: <BarChart3 className='w-8 h-8'/>, color: "bg-pomo-text"},
    {id: "shop", name: "Shop", desc: "Buy some skin here", icon: <ShoppingBag className='w-8 h-8'/>, color: "bg-pomo-text"},
    {id: "profile", name: "Profile", desc: "Edit your profile", icon: <User className='w-8 h-8'/>, color: "bg-pomo-text"},
  ]

  const screenSection = [
    {id: "home", screen: <MainScreen focusDuration={focusDuration} handleModeBtn={handleModeBtn}/>},
    {id: "timer", screen: <>hello from timer</>},
    {id: "settings", screen: <SettingsPage focusDuration={focusDuration} setFocusDuration={setFocusDuration} breakDuration={breakDuration} setBreakDuration={setBreakDuration}/>},
  ]
  

  return (
   <div className="flex flex-col justify-center items-center min-h-screen gap-5 bg-pomo-text/70 overflow-x-hidden">
      <main className='max-w-[360px] max-h-[600px] flex flex-col justify-between bg-pomo-bg'>
        {/* Header section */}
        <nav className="flex gap-4 justify-between items-center px-6 py-4 sticky top-0 bg-pomo-bg z-50"> 
          <button className='text-2xl hover:scale-110 transition-all ease-in-out' onClick={handleNavigationBtn}>
              <LayoutGrid/>
          </button>

          <div>
            <h1 className='uppercase tracking-widest text-2xl font-pixel'>pomopixie</h1>
          </div>

          <button onClick={handleProfileBtn} className='text-2xl hover:scale-110 transition-all ease-in-out'>
            <User/>
          </button>
        </nav>

        {/* Main content section */}
        <main className='flex flex-col px-4 gap-0.5 overflow-auto'>
          {handleRenderScreen(screen)}
        </main>

        {/* Footer section */}
        <footer className='sticky bottom-0 bg-pomo-bg shadow-md py-2'>
          <nav className='flex justify-center w-full px-4 gap-4'>
            {navigationButton.map((item) => {
              const isActive = item.id === screen

              return(
                <PixelButton
                  key={item.id}
                  className={`
                    flex flex-col justify-center items-center
                    border-none w-14 h-16 shadow-none
                    uppercase
                    duration-300
                    transition-all`}
                  variant='default'
                  title={item.desc}
                  onClick={() => handleWidgetBtn(item.id)}
                >
                  {isActive && (
                    <motion.div 
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-pomo-text rounded-xl"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                    <motion.div 
                      className={cn("relative z-10 flex flex-col items-center space-y-1", isActive ? "text-pomo-white" : "text-pomo-text/40 hover:text-pomo-text/60")}
                      whileHover={!isActive ? { y: -2 } : {}}
                      whileTap={{ scale: 0.9 }}
                    >
                      {item.icon}
                      <span className="text-sm uppercase tracking-tighter">{item.name}</span>
                    </motion.div>
                </PixelButton>
              )
            })}
          </nav>
        </footer> 
      </main>
   </div>
  )
}

export default App