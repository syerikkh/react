import { RedirectType } from 'next/navigation';
import React, { useState } from 'react'

export const Toggle = () => {

    const [toggle, setToggle] = useState(false);

    const change = () => {
        setToggle(!toggle)

    }
    console.log(toggle);
    return (
        <div class="flex justify-center items-center mt-4">
            <button id="on" class={`${toggle ? "bg-red-500" : "bg-green-500"} p-2 rounded-lg`} onClick={change}>
                {toggle ? "OFF" : "ON"}
            </button>

        </div>
    )
}
