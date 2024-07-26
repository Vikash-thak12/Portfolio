import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerator'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='md:pb-16 md:pt-28 pb-36 pt-20' id='home'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vh] md:max-w-2xl lg:max-w-[60vw] rounded-2xl flex flex-col items-center justify-center py-5'>
                    <h2 className='uppercase tracking-widest text-xl text-center font-bold text-blue-100 max-w-96'>Welcome to the webpage</h2>
                    <TextGenerateEffect
                        className='text-center text-xl md:text-5xl lg:text-6xl px-4'
                        words='Transforming Concepts into Seamless User Experiences'
                    />

                    <p className='text-center font-semibold tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                        Hi, I&apos;m Vikash Thakur, A NextJs Developer from Nepal.
                    </p>

                    <a href="#about">
                        <MagicButton 
                        position='right'
                        icon={<FaLocationArrow />}
                        title="Show my work" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero
