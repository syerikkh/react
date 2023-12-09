import React, { Children } from 'react'
import { ExperienceCard } from './ExperienceCard'
import { FigmaIcon } from './Skills Icons/FigmaIcon'

const experiences = [
    {
        icon: <FigmaIcon />,
        title: "asdasdasdasd",
        lists: [
            {
                list: "asdasdasd"
            }
        ],
        date: "asdasdasdas"
    }
]
const lists = [
    {
        list: "asdasdasdasd",
    },
    {
        list: "asdadsadas"
    }
]

export const Experiences = () => {
    const experienceSets = [];
    // const listSets = [];
    experiences.forEach((exp) => {
        // listSets.push(<ExperienceCard list={exp.lists} />)
        experienceSets.push(<ExperienceCard icon={exp.icon} title={exp.title} list={exp.lists[0].list} date={exp.date} />)
    })
    return (
        <div>
            {experienceSets}
        </div>
    )
}
