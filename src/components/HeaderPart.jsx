import React from 'react'

export const HeaderPart = () => {
    return (
        <header class="h-[68px] flex justify-center py-[16px] px-[80px]">
            <nav class="flex w-[100%] justify-between px-[32px]">
                <div >
                    <img src="/logo.jpg" alt='' />
                </div>
                <div class="flex gap-[24px] items-center">
                    <p1>About</p1>
                    <p1>Work</p1>
                    <p1>Testimonials</p1>
                    <p1>Contact</p1>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18 8V10" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18 26V28" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.9299 10.93L12.3399 12.34" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M23.6599 23.66L25.0699 25.07" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8 18H10" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M26 18H28" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.3399 23.66L10.9299 25.07" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M25.0699 10.93L23.6599 12.34" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <div class="bg-black w-[136px] text-white py-[6px] px-[16px] rounded-xl flex justify-center items-center">Download CV</div>
                </div>
            </nav>
        </header>
    )
}


