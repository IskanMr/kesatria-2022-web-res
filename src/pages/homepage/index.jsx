import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../../components/Homepage/Hero/index';
import { Youtube } from '../../components/Homepage/Youtube/index';
import { AboutSection } from '../../components/Homepage/About';
import { Jjt } from '../../components/Homepage/JJT/index';
import { Kilas } from '../../components/Homepage/KilasBalik';
import { Calender } from '../../components/Homepage/Calender/index';
import { Cards } from '../../components/Homepage/Card';

export function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <React.StrictMode>
            <motion.div
                className='overflow-hidden'
                initial='hidden'
                animate='show'
            >
                <HeroSection />
                <Youtube />
                <AboutSection />
                <Jjt />
                <Calender />
                <Cards />
                <Kilas />
            </motion.div>
        </React.StrictMode>
    );
}
