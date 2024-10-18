import { Hobby } from './Hobby'

import bodySrc from './bodybuilding.jpeg'
import gameSrc from './game.jpg'
import guitarSrc from './guitar.jpg'

export const HobbyContainer = () => {
    const myHobbies = [
        {
            title: 'Strength/Hypertrophy Training',
            description: 'I enjoy weight training and exercise science.',
            imgSrc: bodySrc
        },
        {
            title: 'Playing Guitar',
            description: 'I enjoy playing guitar and recording music.',
            imgSrc: guitarSrc
        },
        {
            title: 'Game Development',
            description: 'I like programming video games. Primarily platform shooters and Japanese-style RPGs.',
            imgSrc: gameSrc
        },
    ]

    return (
        <>
            {
                myHobbies.map((hobby, index) => {
                    return(
                        <Hobby key={index} {...hobby} />
                    )
                })
            }
        </>
    )
}