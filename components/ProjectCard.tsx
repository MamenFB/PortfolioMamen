"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface Props {
    image: string;
    title: string;
    text: string;
    deployUrl: string;
}

const ProjectCard = ({ image, title, text, deployUrl }: Props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }

    return (
        <div onClick={handleFlip} className='w-[380px] h-[200px] rounded-md cursor-pointer'>
            <motion.div
                className='flip-card-inner w-full h-full'
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}  
                transition={{ duration: 0.6 }}
                onAnimationComplete={() => setIsAnimating(false)}
            >
                <div
                    style={{ backgroundImage: `url(${image})` }}
                    className='w-full h-full group relative flip-card-front bg-cover bg-center rounded-lg p-4'>
                        <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-60 group-hover:opacity-20 transition-opacity duration-300'/> 
                        <div className='absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center justify-center font-bold text-white text-shadow'>
                         Clic para más info
                        </div>
                </div>
                <div
                    style={{ backgroundImage: `url(${image})` }}
                    className='w-full h-full group relative flip-card-back bg-cover bg-center rounded-lg p-4'>
                        <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]'/>
                        <div className='flex flex-col gap-8 py-3 z-[30]'>
                            <h1 className='text-white text-2xl font-semibold'>{title}</h1>
                            <p className='text-white bg-purple-800 rounded-md p-2'>
                                {text}
                            </p>
                            <a href={deployUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white underline font-bold">
                                Deploy <FaExternalLinkAlt />
                            </a>
                        </div>
                </div>
            </motion.div>
        </div>
    );
}

export default ProjectCard;
