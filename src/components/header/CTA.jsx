import React from 'react'
import CV from '../../assets/cv.pdf'
const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download='Athul_Resume.pdf' className='btn'>Downlaod CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Connect</a>
    </div>
  )
}

export default CTA
