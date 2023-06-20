import React from 'react'
import './Footer.css'
import {FaFacebookF} from'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import {FiInstagram} from'react-icons/fi'
const Footer = () => {
  return (
    <div>
      <footer>
        <a href="#" className='footer_logo'>ATHUL</a>
        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer_socials">
          <a href="https://facebook.com"><FaFacebookF/></a>
          <a href="https://facebook.com"><FiInstagram/></a>
          <a href="https://facebook.com"><BsWhatsapp/></a>
        </div>
        <div className="footer_copyright">
          <small>&copy; Athul. All rights reserved.</small>
        </div>
        
      </footer>
    </div>
  )
}
// import './Footer'
export default Footer
