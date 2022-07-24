import React from 'react'
import { homeObjOne } from '../../components/Homepage/About/Data'
import AboutSection from '../../components/Homepage/About/index'
import styles from './Mengenai.module.css';

function Mengenai() {
  return (
        <>
            <div className={`${styles.Bg21}`}>
            <AboutSection {...homeObjOne} />
            </div>
        </>
  )
}

export default Mengenai