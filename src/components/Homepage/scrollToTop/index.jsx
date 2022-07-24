
import React, {useState} from 'react';
import {FaChevronUp} from 'react-icons/fa';
import styles from './TopElements.module.css';


export function ScrollArrow  () {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <div className={`${styles.kotak10}`}>
        <FaChevronUp className={`${styles.scrollTop}`} onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}/>
        </div>
  );
}

