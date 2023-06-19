import React from 'react'
// import Linked from '../../assets/'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/athul-krishna-k-688262223/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/athul2002" target='_blank'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials
