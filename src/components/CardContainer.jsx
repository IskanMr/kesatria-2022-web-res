import { motion } from 'framer-motion';

import styles from '../styles/JalanTeknik.module.css';
import '../styles/_fonts.scss';

export function CardContainer({ Children }) {
    return (
        <>
                {Children.map((child) => {
                    return (
                        <>
                            {' '}
                            <motion.div
                                initial={{ y: 0, opacity: 0 }}
                                animate={{ y: -10, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <div className={`${styles.cardContainer}`}>
                                    <div
                                        className={`${styles.carouselItem} md:h-[70.5vh]`}
                                    >
                                        {child}
                                    </div>{' '}
                                </div>{' '}
                            </motion.div>
                        </>
                    );
                })}
        </>
    );
}
