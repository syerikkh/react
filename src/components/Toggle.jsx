import { RedirectType } from 'next/navigation';
import React, { useState } from 'react'

export const Toggle = () => {

    const [toggle, setToggle] = useState(true);

    const change = () => {
        const onButton = document.getElementById("on");

        if (toggle === true) {
            console.log("false")
            onButton.style.backgroundColor = "red";
            onButton.textContent = "OFF"
        } else {
            setToggle(toggle === false)
            console.log("else")
        }

    }

    return (
        <div class="flex justify-center items-center mt-4">
            <button id="on" class="bg-green-500 p-2" onClick={change}>
                ON
            </button>
        </div>
    )
}
