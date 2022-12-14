import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import { AppWrap } from '../../wrapper'
import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  const [time] = useState(new Date())
  const [greetingString, setGreetingString] = useState('')
  const [nightDayEmoji, setNightDayEmoji] = useState('☀️')

  useEffect(() => {
    if (time.getHours() < 12 && time.getHours() > 2) {
      setGreetingString('Good morning')
    } else if (time.getHours() >= 12 && time.getHours() < 17) {
      setGreetingString('Good afternoon')
    } else {
      setGreetingString('Good evening')
      setNightDayEmoji('🌙')
    }
  }, [])

  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>{nightDayEmoji}</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>{greetingString}, I'm </p>
              <h1 className='head-text' style={{color: 'black'}}>Gavin</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Based in Tokyo 🗼</p>
            <p className='p-text'>Frontend Web Developer</p>
            <p className='p-text'>Welcome to my portfolio</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img className='prof-img' src={images.profile2} alt='profile_bg' />
        <motion.img
          whileInView={{ scale: [0, 1]}}
          duration={{ duration: 1, ease: 'easeInOut' }}

          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={ scaleVariants.whileInView }
        className='app__header-circles'
      >
        {[images.reactLogo, images.vueLogo, images.figma].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle' />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')