import React, {useState} from 'react'
import HeroSection from '../../components/Homepage/Hero/index'
import Youtube from '../../components/Homepage/Youtube/index'
import Jjt from '../../components/Homepage/JJT/index';
import KilasFooter from './kilasfooter';
import Calender from '../../components/Homepage/Calender/index'
import Kartu from './kartu';
import Mengenai from './mengenai';
import { motion } from 'framer-motion';
import ScrollArrow from '../../components/Homepage/scrollToTop/index';




const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    
  
    return (
    <React.StrictMode>
   <motion.div initial= "hidden" animate="show">
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <Youtube />
        <Mengenai />
        <Jjt />
        <Calender />
        <Kartu />
        <KilasFooter />
        <ScrollArrow />
   </motion.div>
   </React.StrictMode>
  )
  
 
}

export default Home

