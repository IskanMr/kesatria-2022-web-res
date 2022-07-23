import React from 'react'
import Kilas from '../../components/Homepage/KilasBalik'
import styles from "../pages/kilasfooter.css"

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