import { useEffect, useRef, useState } from "react"


/**
 * function for calculate timer with real time
 * @param {*} minutes 
 */
export const useTimer = (minutes = 5) => {
    const [timer, setTimer] = useState(minutes * 60)
    const [status, setStatus] = useState('idle');
    const endTimeRef = useRef(null)
    const frameRef = useRef();

    useEffect(() => {
        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        }
    }, []);

    const update = () => {
        if (!endTimeRef.current) return;

        const remaining = endTimeRef.current - Date.now();
        const seconds = Math.max(0, Math.floor(remaining / 1000));

        setTimer(seconds);

        if (remaining <= 0) {
            setStatus('finished');
            return;
        }

        if (remaining > 0) {
            frameRef.current = requestAnimationFrame(update);
        }
    }

    /**
     * Function start timer, pause, and reset timer
     * it will start and calculate timer
     * it will pause timer
     * it will reset timer
     */

    const start = () => {

        if(status === 'running') return;

        const duration = minutes * 60 * 1000;
        endTimeRef.current = Date.now() + duration;
        setStatus('running');
        frameRef.current =  requestAnimationFrame(update);
    }

    const pause = () => {
        if (!endTimeRef.current) return;

        const remaining = endTimeRef.current - Date.now();
        setTimer(Math.floor(remaining / 1000));

        cancelAnimationFrame(frameRef.current);
        setStatus('paused')
    };

    const reset = () => {
        cancelAnimationFrame(frameRef.current);
        setTimer(minutes * 60);
        setStatus('idle')
    };

    const resume = () => {
        if (status === 'running') return;

        endTimeRef.current = Date.now() + timer * 1000;
        setStatus('running');

        frameRef.current = requestAnimationFrame(update);
    } 

    const formattedTime = () => {
        const mins = Math.floor(timer / 60);
        const secs = timer % 60;

        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    return { 
        timer,
        formattedTime,
        start,
        pause,
        reset,
        resume,
        status
    };
}