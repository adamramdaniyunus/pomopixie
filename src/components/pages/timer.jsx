import Badge from '../ui/badge'
import PixelButton from '../ui/button'
import { Pause, PlayIcon, SkipForward, Square, SquareStop, StopCircle } from 'lucide-react'
import Mascot from '../ui/mascot'
import { useTimer } from '../../hooks/useTimer'

const TimerScreen = ({
    duration,
    mode,
    onChangeMode,
    label
}) => {
    const { 
        formattedTime,
        start,
        pause,
        reset,
        status,
        resume
    } = useTimer(duration)

    // icon mapping
    const statusIcon = {
        idle: PlayIcon,
        paused: PlayIcon,
        running: Pause,
        finished: StopCircle
    };

    const Icon = statusIcon[status];

    /**
     * Function for controller button start, paused, and resume
     */

    const handleMainButton = () => {
        if (status === 'idle') start();
        else if (status === 'running') pause();
        else if (status === 'paused') resume();
        else if (status === 'finished') start();
    }

    /**
     * Function for skip session
     * this function will use in skip button
     * if user click button it will be changes mode ex: foucs -> rest and reset timer
     */
    const handleSkipSession = () => {
        reset();
    }

    // state mascot
    const uiStateConfig = {
        work_mode: {
            running: "focusing",
            paused: "idle",
            finished: "celebrating"
        },
        rest_mode: {
            running: "resting",
            paused: "idle",
            finished: "celebrating"
        },
        deep_mode: {
            running: "focusing",
            paused: "idle",
            finished: "celebrating"
        }
    };

    const mascotState = uiStateConfig[mode][status] || "idle";

  return (
    <div className='flex flex-col items-center justify-center gap-2'>
        <Badge label={label} className={'uppercase'}/>

        {/* Timer Section */}
        <h1 className='text-8xl font-pixel text-pomo-text'>
            {formattedTime()}
        </h1>

        {/* Avatar Here */}
        <div className='mb-10'>
            <Mascot state={mascotState} />
        </div>

        <div className='flex gap-4 items-center'>
            <PixelButton onClick={() => handleMainButton()} variant='secondary' className='w-20 h-12 text-center flex items-center justify-center'>
                <Icon className='w-6 h-6'/>
            </PixelButton>

            <PixelButton onClick={reset} variant='primary' className='w-20 h-12 text-center flex items-center justify-center'>
                <Square className='w-6 h-6' />
            </PixelButton>

            <PixelButton onClick={handleSkipSession} variant='primary' className='w-20 h-12 text-center flex items-center justify-center'>
                <SkipForward className='w-6 h-6'/>
            </PixelButton>
        </div>
    </div>
  )
}

export default TimerScreen