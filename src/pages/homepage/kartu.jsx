import React from 'react'
import {Agenda} from '../../components/Homepage/Card/index';
import styles from './Kartu.module.css'

export function Kartu() {
  return (
        <>
            <div className={`${styles.Bg20}`}>
            <Agenda />
            </div>
        </>
  )
}

