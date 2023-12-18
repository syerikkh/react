import React from 'react'
import { useState, useEffect } from 'react'

export const Stopwatch = () => {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    const myInterval = () => {
        setInterval(() => {

        }, 100);
    }

    const add = () => {
        setCount(count + 1);
    }
    useEffect(() => {
        if (toggle) {
            add()
        }
    }, [toggle, count]);


    return (
        <div class="flex justify-center mt-4 items-center gap-2">
            {count}
            <button onClick={() => setToggle(!toggle)} class="bg-black p-2 rounded-xl text-white">
                {toggle ? "Stop" : "Start"}
            </button>
        </div>
    )
}
