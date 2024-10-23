'use client';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ParallaxText() {
    const words = `Let’s create something remarkable together — where passion meets precision.`.split(' ');

    return (
        <div className="relative min-h-[200vh] phone-hide py-20">
            <div className="sticky top-[30%] flex justify-center items-center flex-wrap">
                {words.map((word, index) => (
                    <Word key={index} word={word} />
                ))}
            </div>
        </div>
    );
}

function Word({ word }) {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5, // Animacja uruchamia się, gdy 50% słowa jest w widoku
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: 100 }, // Słowo zaczyna niewidoczne i poniżej widoku
        visible: { 
            opacity: 1, 
            y: 0, // Słowo pojawia się na swoim miejscu
            transition: { duration: 0.5, ease: 'easeInOut' }
        },
    };

    return (
        <motion.span
            ref={ref}
            className="inline-block mx-2 text-9xl lg:max-text-[250px] md:text-[200px] font-bold"
            initial="hidden"
            animate={controls}
            variants={variants}
        >
            {word}
        </motion.span>
    );
}
