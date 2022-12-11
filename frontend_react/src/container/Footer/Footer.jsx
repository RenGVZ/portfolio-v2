import React, { useState } from 'react'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'

import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false)
        setIsFormSubmitted(true)
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <h2 className='head-text'>Let's get in touch!</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:gavin.rene.g@gmail.com' className='p-text'>
            gavin.rene.g@gmail.com
          </a>
        </div>
        {/* <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel:+81 070 4479 6011' className='p-text'>
            tel:+81 070 4479 6011
          </a>
        </div> */}

        {!isFormSubmitted ? (
          <div className='app__footer-form app__flex'>
            <div className='app__flex'>
              <input
                type='text'
                className='p-text'
                placeholder='Your name'
                name='name'
                value={name}
                onChange={handleChangeInput}
              />
            </div>
            <div className='app__flex'>
              <input
                type='email'
                className='p-text'
                placeholder='Your email'
                name='email'
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <textarea
                className='p-text'
                placeholder='Your message'
                value={message}
                name='message'
                onChange={handleChangeInput}
              />
            </div>
            <button type='button' className='p-text' onClick={handleSubmit}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        ) : (
          <div>
            <h3 className='head-text'>Thanks for getting in touch!</h3>
          </div>
        )}
      </div>
      <div className='copyright'>
        <p className='p-text'>@2022 GAVIN GARZA</p>
        <p className='p-text'>All rights reserved</p>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
)
