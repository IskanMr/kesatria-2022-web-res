import React from 'react'
import { homeObjOne } from '../Components/About/Data';
import AboutSection from '../Components/About';
import '../pages/mengenai.css'

function Mengenai() {
  return (
        <>
            <div className='Bg21'>
            <AboutSection {...homeObjOne} />
            </div>
        </>
  )
}

export default Mengenai