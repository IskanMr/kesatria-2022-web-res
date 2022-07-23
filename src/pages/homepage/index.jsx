import React, {useState} from 'react'
import HeroSection from '../../components/Homepage/Hero'
import Youtube from '../../components/Homepage/Youtube'
import Jjt from '../../components/Homepage/JJT';
import KilasFooter from './kilasfooter';
import Calender from '../../components/Homepage/Calender'
import Kartu from './kartu';
import Mengenai from './mengenai';
import { motion } from 'framer-motion';
import ScrollArrow from '../../components/Homepage/scrollToTop';




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

