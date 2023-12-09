import React from 'react'
import { Label } from './Label'
import { ShareIcon } from './Icons/ShareIcon'

export const WorkText = () => {
    return (
        <div class="p-12 flex flex-col gap-6 max-w-[50%]">
            <div class="text-xl font-semibold">Fiskil</div>
            <div class="font-normal text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</div>
            <div class="flex gap-2 flex-wrap">
                <Label label="React" /> <Label label="Next.js" /> <Label label="Typescript" /> <Label label="Nest.js" /> <Label label="PostgreSQL" /> <Label label="Tailwindcss" /> <Label label="Figma" /> <Label label="Cypress" /> <Label label="Storybook" /> <Label label="Git" />
            </div>
            <ShareIcon />
        </div>
    )
}


