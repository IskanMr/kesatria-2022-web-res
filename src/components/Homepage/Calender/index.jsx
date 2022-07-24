<<<<<<< HEAD
import React from 'react'
import {VscDebugStackframeDot } from "react-icons/vsc";
import { motion } from "framer-motion/dist/es/index";
import styles from "./CalenderElements.module.css"
import awan50 from "../../../assets/images/homepage/awan6.png"

import awan3 from "../../../assets/images/homepage/awan5.png"
import {youtube1Animation, youtube2Animation } from "../../../utils/animation";

import { useScroll } from "../UseScroll/useScroll";

export function Calender() {
  const [element, controls] = useScroll();
return (
<div className={`${styles.myBg5}`} id='calender'>
  <div className={`${styles.ship}`} ref={element}>
    <motion.div className={`${styles.Awan50}`}
      variants={youtube2Animation}  
      animate={controls}
      transition={{
      delay: 0.5,
      type: "tween",
      duration: 1.8,
      }}
    >
    <img src={awan50} alt='pic'/>
    </motion.div>

    <motion.div className={`${styles.Awan3}`}
    variants={youtube1Animation}  
    animate={controls}
    transition={{
    delay: 0.5,
    type: "tween",
    duration: 1.8,
    }}
    >
    <img src={awan3} alt='pic'/>
    </motion.div>

    <div className={`${styles.Container}`}>
    <div className={`${styles.calendar}`}>
    <div className={`${styles.monthIndicator}`}>
      <div className={`${styles.time}`}> Agustus 2022 </div>
    </div>

    <div className={`${styles.myBg6}`}>
    <div className= {`${styles.dayOfWeek}`}>
      <div>Sen</div>
      <div>Sel</div>
      <div>Rab</div>
      <div>Kam</div>
      <div>Jum</div>
      <div>Sab</div>
      <div>Min</div>
    </div>
    
    <div className={`${styles.dateGrid}`}>
      <button type='button'>
        <time>1</time>
      </button>
      <button type='button'>
        <time>2</time>
      </button>
      <button type='button'>
        <time>
          <div className={`${styles.hari}`}>
            3
          </div>
        </time>
      </button>
      <button type='button'>
        <time>
        <div className={`${styles.hari}`}>
            4
          </div>
        </time>
      </button>
      <button type='button'>
        <time>5</time>
      </button>
      <button type='button'>
        <time>6</time>
      </button>
      <button type='button'>
        <time >7</time>
      </button>
      <button type='button'>
        <time >8</time>
      </button>
      <button type='button'>
        <time >9</time>
      </button>
      <button type='button'>
        <time>10</time>
      </button>
      <button type='button'>
        <time>11</time>
      </button>
      <button type='button'>
        <time>12</time>
      </button>
      <button type='button'>
        <time>13</time>
      </button>
      <button type='button'>
        <time>14</time>
      </button>
      <button type='button'>
        <time>15</time>
      </button>
      <button type='button'>
        <time>16</time>
      </button>
      <button type='button'>
        <time>17</time>
      </button>
      <button type='button'>
        <time>18</time>
      </button>
      <button type='button'>
        <time>19</time>
      </button>
      <button type='button'>
        <time >20</time>
      </button>
      <button type='button'>
        <time>21</time>
      </button>
      <button type='button'>
        <time>22</time>
      </button>
      <button type='button'>
        <time >23</time>
      </button>
      <button type='button'>
        <time>24</time>
      </button>
      <button type='button'>
        <time>25</time>
      </button>
      <button type='button'>
        <time>26</time>
      </button>
      <button type='button'>
        <time>27</time>
      </button>
      <button type='button'>
        <time>28</time>
      </button>
      <button type='button'>
        <time>29</time>
      </button>
      <button type='button'>
        <time>30</time>
      </button>
      <button type='button'>
        <time>31</time>
      </button>
    </div>
    </div>
  </div>

    <div className={`${styles.keterangan}`}>
       PPSMB KESATRIA 2022
    </div>
    </div>
    <VscDebugStackframeDot className={`${styles.icon20}`}/>
  </div>
</div>
  )
}
=======
import React from 'react';
import { VscDebugStackframeDot } from 'react-icons/vsc';
import { motion } from 'framer-motion';
import styles from './CalenderElements.module.css';
import awan50 from '../../../assets/images/homepage/awan6.png';
import awan3 from '../../../assets/images/homepage/awan5.png';
import { youtube1Animation, youtube2Animation } from '../../../utils/animation';
import { useScroll } from '../UseScroll/useScroll';

function Calender() {
    const [element, controls] = useScroll();
    return (
        <div className={`${styles.myBg5}`} id='calender'>
            <div className={`${styles.ship}`} ref={element}>
                <motion.div
                    className={`${styles.Awan50}`}
                    variants={youtube2Animation}
                    animate={controls}
                    transition={{
                        delay: 0.5,
                        type: 'tween',
                        duration: 1.8,
                    }}
                >
                    <img src={awan50} />
                </motion.div>

                <motion.div
                    className={`${styles.Awan3}`}
                    variants={youtube1Animation}
                    animate={controls}
                    transition={{
                        delay: 0.5,
                        type: 'tween',
                        duration: 1.8,
                    }}
                >
                    <img src={awan3} />
                </motion.div>

                <div className={`${styles.Container}`}>
                    <div className={`${styles.calendar}`}>
                        <div className={`${styles.month - indicator}`}>
                            <div className={`${styles.time}`}>
                                {' '}
                                Agustus 2022{' '}
                            </div>
                        </div>

                        <div className={`${styles.myBg6}`}>
                            <div className={`${styles.day - of - week}`}>
                                <div>Sen</div>
                                <div>Sel</div>
                                <div>Rab</div>
                                <div>Kam</div>
                                <div>Jum</div>
                                <div>Sab</div>
                                <div>Min</div>
                            </div>

                            <div className={`${styles.date - grid}`}>
                                <button>
                                    <time>1</time>
                                </button>
                                <button>
                                    <time>2</time>
                                </button>
                                <button>
                                    <time>
                                        <div className={`${styles.hari}`}>
                                            3
                                        </div>
                                    </time>
                                </button>
                                <button>
                                    <time>
                                        <div className={`${styles.hari}`}>
                                            4
                                        </div>
                                    </time>
                                </button>
                                <button>
                                    <time>5</time>
                                </button>
                                <button>
                                    <time>6</time>
                                </button>
                                <button>
                                    <time>7</time>
                                </button>
                                <button>
                                    <time>8</time>
                                </button>
                                <button>
                                    <time>9</time>
                                </button>
                                <button>
                                    <time>10</time>
                                </button>
                                <button>
                                    <time>11</time>
                                </button>
                                <button>
                                    <time>12</time>
                                </button>
                                <button>
                                    <time>13</time>
                                </button>
                                <button>
                                    <time>14</time>
                                </button>
                                <button>
                                    <time>15</time>
                                </button>
                                <button>
                                    <time>16</time>
                                </button>
                                <button>
                                    <time>17</time>
                                </button>
                                <button>
                                    <time>18</time>
                                </button>
                                <button>
                                    <time>19</time>
                                </button>
                                <button>
                                    <time>20</time>
                                </button>
                                <button>
                                    <time>21</time>
                                </button>
                                <button>
                                    <time>22</time>
                                </button>
                                <button>
                                    <time>23</time>
                                </button>
                                <button>
                                    <time>24</time>
                                </button>
                                <button>
                                    <time>25</time>
                                </button>
                                <button>
                                    <time>26</time>
                                </button>
                                <button>
                                    <time>27</time>
                                </button>
                                <button>
                                    <time>28</time>
                                </button>
                                <button>
                                    <time>29</time>
                                </button>
                                <button>
                                    <time>30</time>
                                </button>
                                <button>
                                    <time>31</time>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.keterangan}`}>
                        PPSMB KESATRIA 2022
                    </div>
                </div>
                <VscDebugStackframeDot className={`${styles.icon20}`} />
            </div>
        </div>
    );
}

export default Calender;
>>>>>>> 4a2179a47825880ad716a63eade67b0cdb815550
