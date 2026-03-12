import React from 'react'
import Badge from '../ui/badge'
import PixelButton from '../ui/button'
import { PlayIcon, SkipForward, Square, SquareStop, StopCircle } from 'lucide-react'
import Mascot from '../ui/mascot'

const TimerScreen = ({
    focusDuration
}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
        <Badge label={'focusing'} className={'uppercase'}/>

        {/* Timer Section */}
        <h1 className='text-8xl font-pixel text-pomo-text'>
            13:11
        </h1>

        {/* Avatar Here */}
        <div className='mb-10'>
            <Mascot />
        </div>

        <div className='flex gap-4 items-center'>
            <PixelButton variant='secondary' className='w-20 h-12 text-center flex items-center justify-center'>
                <PlayIcon className='w-6 h-6'/>
            </PixelButton>

            <PixelButton variant='primary' className='w-20 h-12 text-center flex items-center justify-center'>
                <Square className='w-6 h-6' />
            </PixelButton>

            <PixelButton variant='primary' className='w-20 h-12 text-center flex items-center justify-center'>
                <SkipForward className='w-6 h-6'/>
            </PixelButton>
        </div>
    </div>
  )
}

export default TimerScreen