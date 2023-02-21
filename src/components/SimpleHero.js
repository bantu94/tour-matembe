import React from 'react'

const SimpleHero = ({ children }) => {
  return (
    <div className='defaultHero'>
      {children}
    </div>
  )
}

export default SimpleHero