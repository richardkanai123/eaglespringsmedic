'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const AnimatedText = () => {
    return (
        <TypeAnimation
            omitDeletionAnimation={true}
            preRenderFirstString={true}
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'We are Optimal!',
                800,
                'We are Compassionate!',
                1000,
                'We are Personalized!',
                1200,
            ]}
            wrapper="span"
            speed={40}
            style={{
                display: 'inline-block',
                color: 'inherit'
            }}
            repeat={Infinity}
        />
    )
}

export default AnimatedText