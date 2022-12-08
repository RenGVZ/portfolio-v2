import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {/* Add for testimonials */}
      {/* {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => ( */}
      {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className='app__navigation-dot'
          style={ active === item ? { backgroundColor: '#313BAC' } : {  } }
        />
      ))}
    </div>
  )
}

export default NavigationDots
