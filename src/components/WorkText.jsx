import React from 'react'
import { Label } from './Label'
import { ShareIcon } from './Icons/ShareIcon'

export const WorkText = () => {
    return (
        <div class="lg:p-12 lg:flex lg:flex-col lg:gap-6 lg:max-w-[50%]">
            <div class="lg:text-xl font-semibold">Fiskil</div>
            <div class="font-normal lg:text-base lg:text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</div>
            <div class="lg:flex lg:gap-2 lg:flex-wrap">
                <Label label="React" /> <Label label="Next.js" /> <Label label="Typescript" /> <Label label="Nest.js" /> <Label label="PostgreSQL" /> <Label label="Tailwindcss" /> <Label label="Figma" /> <Label label="Cypress" /> <Label label="Storybook" /> <Label label="Git" />
            </div>
            <ShareIcon />
        </div>
    )
}


