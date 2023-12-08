import React from 'react'

export const Label = (props) => {
    return (
        <div class="flex justify-center items-center flex-col gap-4">
            <div class="py-1 px-5 rounded-xl bg-[#E5E7EB]">{props.label}</div>
            <div class="text-xl font-normal">{props.text}</div>
        </div>
    )
}
