import React, { useState, useEffect } from 'react'
import { urlFor, client } from '../../client'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper'
import './About.scss'

const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query)
      .then((data) => setAbouts(data))
  }, [])

  return (
    <>
      <div className='bio-section'>
        <h2 className='head-text'>
          Crafting Intuitive
          <span> Web Experiences</span>
          <br />
          <span> One Line of Code </span>
          at a Time
        </h2>
        <p className='p-text'>
          Hi there! I have over 4 years of experience as a Web Developer, specializing in frontend technologies such as React and Vue.
          I also have extensive experience in Web Design and Full Stack Application Development. In my current role, I work on a variety of exciting projects, using my skills and knowledge to create intuitive, engaging user experiences.
          In my free time, I enjoy staying up to date with the latest developments in web technology, kickboxing and exploring the vibrant city of Tokyo.
          Here is a more detailed look at my most specialized skills.
        </p>
      </div>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
)
