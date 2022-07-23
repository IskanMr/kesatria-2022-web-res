import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import Youtube from '../Components/Youtube';
import Jjt from '../Components/JJT';
import KilasFooter from './kilasfooter';
import Calender from '../Components/Calender'
import Kartu from './kartu';
import Mengenai from './mengenai';
import { motion } from 'framer-motion';
import Scroll from '../Components/scroll';
import Store from '../Components/Store';




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
        <Scroll />
   </motion.div>
   </React.StrictMode>
  )
  
 
}

export default Home

