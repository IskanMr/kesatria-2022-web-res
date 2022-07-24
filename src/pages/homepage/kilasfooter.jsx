import React from 'react'
import Kilas from '../../components/Homepage/KilasBalik/index'
import styles from "./KilasFooter.module.css"

function KilasFooter() {
  return (
    <>
    <div className={`${styles.Bg10}`}> 
        <Kilas />
        <Footer />
    </div>
    </>
  )
}

export default KilasFooter