import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const SocialMedia = () => {
  return (
   <div className='app__social'>
    <a href='https://github.com/rengvz' target='_blank' rel='noreferrer'>
      <BsGithub />
    </a>
    <a href='https://www.linkedin.com/in/gavin-garza/' target='_blank' rel='noreferrer'>
      <BsLinkedin />
    </a>
   </div>
  )
}

export default SocialMedia