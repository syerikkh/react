import React from 'react'
import { Label } from './Label'
import { ShareIcon } from './Icons/ShareIcon'

export const WorkText = () => {
    return (
        <div class="lg:p-12 p-8 flex flex-col gap-6 lg:max-w-[50%] dark:bg-[#111827]">
            <div class="lg:text-xl font-semibold dark:text-[#F9FAFB]">Fiskil</div>
            <div class="font-normal lg:text-base text-gray-600 dark:text-[#D1D5DB]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</div>
            <div class="flex gap-2 flex-wrap">
                <Label label="React" /> <Label label="Next.js" /> <Label label="Typescript" /> <Label label="Nest.js" /> <Label label="PostgreSQL" /> <Label label="Tailwindcss" /> <Label label="Figma" /> <Label label="Cypress" /> <Label label="Storybook" /> <Label label="Git" />
            </div>
            <ShareIcon />
        </div>
    )
}


