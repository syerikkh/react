import React from 'react'
import { UpworkIcon } from './Icons/UpworkIcon'
import { Label } from './Label'

export const MainExperience = () => {
    return (
        <div class="lg:py-24 lg:px-20 lg:w-[1440px] py-16 px-4 bg-gray-50">
            <div class="lg:px-8 lg:flex lg:flex-col lg:gap-12 lg:justify-center lg:items-center">
                <div class="lg:flex lg:justify-center lg:items-center lg:flex-col lg:gap-4">
                    <Label label="Experience" text="Here is a quick summary of my most recent experiences:" />
                    <div class="lg:flex lg:flex-col lg:gap-12 flex flex-col gap-6">
                        <div class="p-8 lg:flex lg:gap-12 flex gap-4 flex-col lg:flex-row lg:justify-center shadow-[0px_2px_2px_0px_grey] rounded-xl justify-center">
                            <UpworkIcon />
                            <div class="lg:flex lg:hidden block">
                                <p1 class="text-base font-normal text-gray-600">Nov 2021 - Present</p1>
                            </div>
                            <div class="flex flex-col gap-4">
                                <h1 class="lg:text-xl font-semibold">Sr. Frontend Developer</h1>
                                <div class="text-base font-normal text-gray-600">
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                                    <li>Sed quis justo ac magna.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </div>
                            </div>
                            <div class="lg:flex hidden lg:block">
                                <p1 class="text-base font-normal text-gray-600">Nov 2021 - Present</p1>
                            </div>
                        </div>
                        <div class="p-8 flex lg:gap-12 gap-6 lg:flex-row flex-col justify-center shadow-[0px_2px_2px_0px_grey] rounded-xl">
                            <UpworkIcon />
                            <div class="lg:flex lg:hidden block">
                                <p1 class="text-base font-normal text-gray-600">Jul 2017 - Oct 2021</p1>
                            </div>
                            <div class="flex flex-col gap-4">
                                <h1 class="lg:text-xl font-semibold">Team Lead</h1>
                                <div class="text-base font-normal text-gray-600">
                                    <li>Sed quis justo ac magna.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Sed quis justo ac magna.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </div>
                            </div>
                            <div class="lg:flex lg:block hidden">
                                <p1 class="lg:text-base font-normal text-gray-600">Jul 2017 - Oct 2021</p1>
                            </div>
                        </div>

                        <div class="p-8 flex lg:gap-12 gap-6 lg:flex-row flex-col shadow-[0px_2px_2px_0px_grey] rounded-xl lg:justify-between">
                            <UpworkIcon />
                            <div class="lg:flex lg:hidden block">
                                <p1 class="text-base font-normal text-gray-600">Dec 2015 - May 2017</p1>
                            </div>
                            <div class="flex flex-col gap-4 lg:max-w-[384px]">
                                <h1 class="lg:text-xl font-semibold">Full Stack Developer</h1>
                                <div class="text-base font-normal text-gray-600">
                                    <li class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                </div>
                            </div>
                            <div class="lg:flex lg:block hidden">
                                <p1 class="text-base font-normal text-gray-600">Dec 2015 - May 2017</p1>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}


