import React from 'react'
import { UpworkIcon } from './Icons/UpworkIcon'
import { Label } from './Label'

export const MainExperience = () => {
    return (
        <div class="py-24 px-20 w-[1440px] bg-gray-50">
            <div class="px-8 flex flex-col gap-12 justify-center items-center">
                <div class="flex justify-center items-center flex-col gap-4">
                    <Label label="Experience" text="Here is a quick summary of my most recent experiences:" />
                    <div class="flex flex-col gap-12">
                        <div class="p-8 flex gap-12 justify-center shadow-[0px_2px_2px_0px_grey] rounded-xl">
                            <UpworkIcon />
                            <div class="flex flex-col gap-4">
                                <h1 class="text-xl font-semibold">Sr. Frontend Developer</h1>
                                <div class="text-base font-normal text-gray-600">
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                                    <li>Sed quis justo ac magna.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </div>
                            </div>
                            <div class="flex pos">
                                <p1 class="text-base font-normal text-gray-600">Nov 2021 - Present</p1>
                            </div>
                        </div>
                        <div class="p-8 flex gap-12 justify-center shadow-[0px_2px_2px_0px_grey] rounded-xl">
                            <UpworkIcon />
                            <div class="flex flex-col gap-4">
                                <h1 class="text-xl font-semibold">Team Lead</h1>
                                <div class="text-base font-normal text-gray-600">
                                    <li>Sed quis justo ac magna.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Sed quis justo ac magna.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                </div>
                            </div>
                            <div class="flex pos">
                                <p1 class="text-base font-normal text-gray-600">Jul 2017 - Oct 2021</p1>
                            </div>
                        </div>

                        <div class="p-8 flex gap-12 shadow-[0px_2px_2px_0px_grey] rounded-xl justify-between">
                            <UpworkIcon />
                            <div class="flex flex-col gap-4 max-w-[384px]">
                                <h1 class="text-xl font-semibold">Full Stack Developer</h1>
                                <div class="text-base font-normal text-gray-600">
                                    <li class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                </div>
                            </div>
                            <div class="flex pos">
                                <p1 class="text-base font-normal text-gray-600">Dec 2015 - May 2017</p1>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}


