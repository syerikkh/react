import React, { useEffect, useState } from 'react'

export const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setisRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => { setTime(time + 1) }, 10);
        }
        return () => clearInterval(interval);


    }, [isRunning, time]);

    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const mseconds = Math.floor(time % 100);

    const startAndStop = () => {
        setisRunning(!isRunning);
    }
    const reset = () => {
        setTime(0);
    }
    return (
        <div class="flex justify-center items-center flex-col gap-2 bg-yellow-400 w-[25%] m-auto rounded-xl p-2">
            <div class="text-black p-1 rounded-xl">Stopwatch</div>
            <div class="flex gap-2 text-center justify-center items-center flex-col">
                <p>{hours} : {minutes.toString().padStart(2, "0")}: {seconds.toString().padStart(2, "0")} : {mseconds.toString().padStart(2, "0")}</p>
                <div class="flex gap-2">
                    <button onClick={startAndStop} class="bg-black text-white p-1 rounded-lg">
                        {isRunning ? "Stop" : "Start"}
                    </button>
                    <button onClick={reset} class="bg-black text-white p-1 rounded-lg">Reset</button>
                </div>
            </div>
        </div >
    )
}
