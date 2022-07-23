import React from 'react'
import Agenda from '../../components/Homepage/Card';
import styles from '../pages/kartu.css'

function Kartu() {
  return (
        <>
            <div className={`${styles.Bg20}`}>
            <Agenda />
            </div>
        </>
  )
}

export default Kartu