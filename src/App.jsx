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

function App() {

  /**
   * State local manage local state here
   */

  const [focusDuration, setFocusDuration] = useState(25)
  const [breakDuration, setBreakDuration] = useState(5)
  const [screen, setScreen] = useState("home")

  const navigationButton = [
    {id: "home", name: "Home", desc: "Back to home", icon: <LayoutGrid className='w-8 h-8'/>, color: "bg-pomo-text"},
    {id: "timer", name: "timer", desc: "Start timer", icon: <TimerIcon className='w-8 h-8'/>, color: "bg-pomo-text"},
    {id: "stats", name: "Stats", desc: "See statistic", icon: <BarChart3 className='w-8 h-8'/>, color: "bg-pomo-text"},
    {id: "shop", name: "Shop", desc: "Buy some skin here", icon: <ShoppingBag className='w-8 h-8'/>, color: "bg-pomo-text"},
    {id: "profile", name: "Profile", desc: "Edit your profile", icon: <User className='w-8 h-8'/>, color: "bg-pomo-text"},
  ]

  const screenSection = [
    {id: "home", screen: <MainScreen focusDuration={focusDuration}/>},
    {id: "timer", screen: <>hello from timer</>},
    {id: "settings", screen: <SettingsPage focusDuration={focusDuration} setFocusDuration={setFocusDuration} breakDuration={breakDuration} setBreakDuration={setBreakDuration}/>},
  ]
  

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

  return (
   <div className="flex flex-col justify-between min-h-screen gap-5 bg-pomo-bg">
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
        {handleRenderScreen(screen)}
      </main>

      {/* Footer section */}
      <footer className='sticky bottom-0 bg-pomo-bg shadow-md py-2'>
        <nav className='flex justify-center w-full px-4'>
          {navigationButton.map((item) => (
            <PixelButton
              key={item.id}
              className={`
                flex flex-col justify-center items-center
                opacity-50 border-none w-full shadow-none
                uppercase
                hover:translate-y-[-7px]
                transition-all
                ease-in-out
                ${screen === item.id && 'bg-pomo-text rounded-md opacity-100 text-white'}`}
              variant='default'
              title={item.desc}
              onClick={() => handleWidgetBtn(item.id)}
            >
              {item.icon}
              <span className='text-sm'>{item.name}</span>
            </PixelButton>
          ))}
        </nav>
      </footer>
   </div>
  )
}

export default App