import React from 'react'
import { Skill } from './Skill'
import { JavascriptIcon } from './Skills Icons/JavascriptIcon'
import { TypescriptIcon } from './Skills Icons/TypescriptIcon'
import { ReactIcon } from './Skills Icons/ReactIcon';
import { NestJsIcon } from './Skills Icons/NestJsIcon';
import { NodeJsIcon } from './Skills Icons/NodeJsIcon';
import { ExpressJsIcon } from './Skills Icons/ExpressJsIcon';
import { SocketIoIcon } from './Skills Icons/SocketIoIcon';
// import { PostgreSQLIcon } from './Skills Icons/PostgreSQLIcon';
import { MongoDBIcon } from './Skills Icons/MongoDBIcon';
import { ScssIcon } from './Skills Icons/ScssIcon';
import { TailwindcssIcon } from './Skills Icons/TailwindcssIcon';
import { FigmaIcon } from './Skills Icons/FigmaIcon';
import { CypressIcon } from './Skills Icons/CypressIcon';
import { StorybookIcon } from './Skills Icons/StorybookIcon';
import { GitIcon } from './Skills Icons/GitIcon';
import { NextJsIcon } from './Skills Icons/NextJsIcon';

const skills = [
    {
        icon: <JavascriptIcon />,
        title: "Javascript"
    },
    {
        icon: <TypescriptIcon />,
        title: "Typescript"
    },
    {
        icon: <ReactIcon />,
        title: "React"
    },
    {
        icon: <NestJsIcon />,
        title: "Next.js"
    },
    {
        icon: <NodeJsIcon />,
        title: "Node.js"
    },
    {
        icon: <ExpressJsIcon />,
        title: "Express.js"
    },
    {
        icon: <NestJsIcon />,
        title: "Nest.js"
    },
    // {
    //     icon: <SocketIoIcon />,
    //     title: "Socket.io"
    // },
    // {
    //     icon: < SocketIoIcon />,
    //     title: "PostgreSQL"
    // },
    // {
    //     icon: <MongoDBIcon />,
    //     title: "MongoDB"
    // },
    // {
    //     icon: <ScssIcon />,
    //     title: "Sass/Scss"
    // },
    // {
    //     icon: <TailwindcssIcon />,
    //     title: "Tailwindcss"
    // },
    // {
    //     icon: <FigmaIcon />,
    //     title: "Figma"
    // },
    // {
    //     icon: <CypressIcon />,
    //     title: "Cypress"
    // },
    // {
    //     icon: <StorybookIcon />,
    //     title: "Storybook"
    // },
    // {
    //     icon: <GitIcon />,
    //     title: "Git"
    // },
];

export const Skills = () => {
    const skillSet = [];
    skills.forEach((skill) => {
        skillSet.push(<Skill icon={skill.icon} title={skill.title} />)
    })

    return (
        <div>
            {skillSet}
        </div>
    )
}


