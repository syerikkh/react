import React from 'react'

export const Label = (props) => {
    return (
        <div class="flex flex-col justify-center items-center  gap-4 text-gray-600">
            <div class="py-1 px-5 rounded-xl bg-[#E5E7EB]">{props.label}</div>
            <div class="text-xl font-normal text-center">{props.text}</div>
        </div>
    )
}
