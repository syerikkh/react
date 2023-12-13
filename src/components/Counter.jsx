import React, { useState } from 'react'

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const add = () => {
        setCounter(counter + 1);
    }
    const decrease = () => {
        if (counter === 0) {
            return;
        } else { setCounter(counter - 1); }
    }
    // const refresh = () => {
    //     window.location.reload();
    // }
    return (
        <div class="flex gap-2 justify-center items-center">
            <button class="bg-black text-white p-3 rounded-xl" onClick={decrease}> - </button>
            {counter}
            <button class="bg-black text-white p-3 rounded-xl" onClick={add}> + </button>
            {/* <button class="bg-black text-white p-3 rounded-xl" onClick={refresh}>Refresh</button> */}
        </div>
    )
}
