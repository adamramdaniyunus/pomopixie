import cn from '../../utils/cn';
import { motion } from 'motion/react'

const Mascot = ({
    state  = 'idle',
    skin = {
        name: 'basic'
    },
    className
}) => {
    let bodyColor = "bg-[#F4D06F]";
    let accentColor = "bg-[#FF79C6]";
    let borderColor = "border-[#3A1F04]";
    let screenColor = "bg-[#282A36]";
    let faceColor = "bg-[#8BE9FD]";
    let faceBorder = "border-[#8BE9FD]";

    // Apply attribute from skin
    // skin must have this two things for the attribute
    if(skin.name !== 'basic') {
        bodyColor = skin.bodyColor;
        accentColor = skin.accentColor;
    }

    // Eye rendering based on state
    const renderEyes = () => {
        const stateEyes = {
            'resting': <div className='flex gap-6'>
                <div className={cn('w-4 h-4 border-t-[4px] rounded-full', faceBorder)}></div>
                <div className={cn('w-4 h-4 border-t-[4px] rounded-full', faceBorder)}></div>
            </div>,
            'sleepy':  <div className="flex gap-6 mt-2">
                <div className={cn("w-4 h-1.5", faceColor)} />
                <div className={cn("w-4 h-1.5", faceColor)} />
            </div>,
            'celebrating':   <div className="flex gap-5">
                <div className="relative w-5 h-5">
                    <div className={cn("absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1.5", faceColor)} />
                    <div className={cn("absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1.5", faceColor)} />
                </div>
                <div className="relative w-5 h-5">
                    <div className={cn("absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1.5", faceColor)} />
                    <div className={cn("absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1.5", faceColor)} />
                </div>
            </div>,
            'focusing':  <div className="flex gap-5 mt-1">
                <div className={cn("w-5 h-2.5 rotate-12", faceColor)} />
                <div className={cn("w-5 h-2.5 -rotate-12", faceColor)} />
            </div>,
            'idle':  <div className="flex gap-6 mt-1">
                <motion.div 
                    className={cn("w-3.5 h-3.5", faceColor)}
                    animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 1] }}
                />
                <motion.div 
                    className={cn("w-3.5 h-3.5", faceColor)}
                    animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 1] }}
                />
            </div>
        }


        return stateEyes[state]
    }

    const renderMouth = () => {
        const stateMouth = {
            'celebrating': <div className={cn("w-6 h-4 rounded-b-full mt-1", faceColor)} />,
            'resting': <div className={cn("w-4 h-3 border-b-[4px] rounded-full mt-1", faceBorder)} />,
            'sleepy': <div className={cn("w-2 h-2 border-t-[3px] rounded-full mt-2", faceBorder)} />,
            'focusing':  <div className={cn("w-2 h-2 rounded-full mt-1", faceColor)} />,
            'idle': <div className={cn("w-4 h-1.5 mt-2", faceColor)} />
        }

        return stateMouth[state]
    }


   return (
    <motion.div 
      className={cn("relative w-32 h-32 flex items-center justify-center mt-4", className)}
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Antenna */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-0">
        <div className={cn("w-4 h-4 border-4 rounded-full z-10", accentColor, borderColor)} />
        <div className={cn("w-2 h-4 border-x-4 -mt-1", bodyColor, borderColor)} />
      </div>
      
      {/* Hands */}
      <motion.div 
        className={cn("absolute top-1/2 -translate-y-1/2 -left-4 w-4 h-6 border-4 rounded-l-full z-0 origin-right", bodyColor, borderColor)}
        animate={state === 'celebrating' ? { rotate: [0, -45, 0, -45, 0] } : { rotate: 0 }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.div 
        className={cn("absolute top-1/2 -translate-y-1/2 -right-4 w-4 h-6 border-4 rounded-r-full z-0 origin-left", bodyColor, borderColor)}
        animate={state === 'celebrating' ? { rotate: [0, 45, 0, 45, 0] } : { rotate: 0 }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      
      {/* Legs */}
      <div className={cn("absolute -bottom-4 left-8 w-4 h-5 border-4 border-t-0 rounded-b-sm z-0", bodyColor, borderColor)} />
      <div className={cn("absolute -bottom-4 right-8 w-4 h-5 border-4 border-t-0 rounded-b-sm z-0", bodyColor, borderColor)} />
      
      {/* Robot Body */}
      <div className={cn("absolute inset-0 border-4 rounded-2xl shadow-[4px_4px_0px_0px_rgba(58,31,4,1)] z-10 flex items-center justify-center", bodyColor, borderColor)}>
        
        {/* Screen Face Area */}
        <div className={cn("w-20 h-16 border-4 rounded-xl flex flex-col items-center justify-center relative overflow-hidden", screenColor, borderColor)}>
          
          {/* Screen scanline effect */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none" />
          
          {/* Eyes */}
          <div className="z-10">
            {renderEyes()}
          </div>

          {/* Blush */}
          {(state === 'resting' || state === 'celebrating') && (
            <div className="flex gap-10 absolute top-[55%] left-1/2 -translate-x-1/2 z-10 pointer-events-none">
              <motion.div 
                className="w-3 h-1.5 bg-[#FF79C6] rounded-full opacity-80" 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="w-3 h-1.5 bg-[#FF79C6] rounded-full opacity-80" 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          )}

          {/* Mouth */}
          <div className="z-10">
            {renderMouth()}
          </div>
          
          {/* Zzz for sleepy state */}
          {state === 'sleepy' && (
            <motion.div 
              className={cn("absolute top-1 right-2 text-[10px] font-bold", "text-[#8BE9FD]")}
              animate={{ y: [0, -10], opacity: [1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Z
            </motion.div>
          )}
        </div>
        
        {/* Shine/Highlight on the body */}
        <div className="absolute top-2 left-2 w-2 h-8 bg-white/40 rounded-full" />
      </div>

      {/* Skins Additions */}
      {/* Chef Hat Accessory */}
      {skin === 'chef' && (
        <div className={cn("absolute -top-10 left-1/2 -translate-x-1/2 w-12 h-10 bg-white border-4 rounded-t-xl z-30", borderColor)} />
      )}
      
      {/* Ninja Headband */}
      {skin === 'ninja' && (
        <div className={cn("absolute top-4 left-0 right-0 h-4 bg-red-500 border-y-4 flex justify-end z-30", borderColor)}>
          <div className={cn("w-4 h-4 bg-red-500 border-4 -mr-2 mt-1 rotate-45", borderColor)} />
        </div>
      )}
    </motion.div>
  );
}

export default Mascot