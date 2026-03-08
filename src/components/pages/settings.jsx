import { Bell, ChevronRight, Globe, Palette, Volume2 } from 'lucide-react';
import DurationSettings from '../ui/duration-settings'
import PixelCard from '../ui/card';

const SettingsPage = ({
    focusDuration,
    breakDuration,
    setFocusDuration,
    setBreakDuration
}) => {

    const menus = [
        {icon: <Palette className="w-5 h-5" />, label: 'Change Theme', value: 'Cozy Pastel' },
        {icon: <Bell className="w-5 h-5" />, label: 'Notifications', value: 'Enabled' },
        {icon: <Volume2 className="w-5 h-5" />, label: 'Sound Effects', value: 'On' },
        {icon: <Globe className="w-5 h-5" />, label: 'Language', value: 'English' },
    ]

    /**
     * Logic for increment 
     * when user clicked this button it will be increase or decrease the value
     */
    const handleDurationBtn = (type, action) => {
        const setValue = type === "break" ? setBreakDuration : setFocusDuration;

        setValue((prev) => {
            if (action === "increase") return prev + 1;
            if (action === "decrease" && prev > 0) return prev - 1;
            return prev;
        });
    };

  return (
    <>
        <h1 className='font-pixel text-4xl uppercase tracking-wider'>Settings</h1>

        <div className=''>
            <h1 className='font-pixel text-2xl uppercase tracking-wider my-5'>timer settings</h1>
            <PixelCard>
                <DurationSettings label="focus durations" value={focusDuration} handleDurationBtn={handleDurationBtn} type="focus"/>
                <hr className='opacity-20'/>
                <DurationSettings label="break durations" value={breakDuration} handleDurationBtn={handleDurationBtn} type="break"/>
            </PixelCard>

            <h1 className='font-pixel text-2xl uppercase tracking-wider my-5'>general</h1>

            <div className='flex flex-col gap-3'>
                {menus.map((item, index)=>(
                    <PixelCard key={index}  className="flex items-center justify-between py-3">
                        <div className="flex items-center space-x-4">
                            <div className="p-2 bg-pomo-clay/30 rounded-lg">{item.icon}</div>
                            <span className="font-bold text-sm uppercase">{item.label}</span>
                        </div>
                        <div className="flex items-center space-x-2 opacity-50">
                            <span className="text-xs font-bold uppercase">{item.value}</span>
                            <ChevronRight className="w-4 h-4" />
                        </div>
                    </PixelCard>
                ))}
            </div>
        </div>
    </>
  )
}

export default SettingsPage