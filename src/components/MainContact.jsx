import React from 'react'
import { Label } from './Label'
import { MailIcon } from './Icons/MailIcon'
import { CopyIcon } from './Icons/CopyIcon'
import { GithubIcon } from './Icons/GithubIcon'
import { TwitterIcon } from './Icons/TwitterIcon'
import { FigmaSmallIcon } from './Icons/FigmaSmallIcon'
import { ContactIcon } from './Icons/ContactIcon'

export const MainContact = () => {
    return (
        <div class="lg:py-24 lg:px-20 py-16 px-4 lg:w-[1440px]">
            <div class="lg:px-8 flex flex-col lg:gap-24 gap-6 justify-center items-center">
                <div class="lg:max-w-[576px] lg:flex">
                    <Label label="Get in touch" text="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect." />
                </div>
                <div class="flex justify-center items-center flex-col gap-4">
                    <div class="flex gap-5 lg:text-4xl text-lg font-semibold justify-center items-center">
                        <MailIcon />
                        <h1>reachsagarshah@gmail.com</h1>
                        <CopyIcon />
                    </div>
                    <div class="flex gap-5 lg:text-4xl text-lg font-semibold justify-center items-center">
                        <ContactIcon />
                        <h1>+91 8980500565</h1>
                        <CopyIcon />
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center gap-2 text-base text-gray-600">
                    <p>You may also find me on these platforms!</p>
                    <div class="flex gap-2">
                        <GithubIcon />
                        <TwitterIcon />
                        <FigmaSmallIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
