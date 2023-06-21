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
          <a href="https://www.facebook.com/athul.krishna.714" target='_blank' rel="noreferrer"><FaFacebookF/></a>
          <a href="https://www.instagram.com/athul_maliyakkal/"target='_blank' rel="noreferrer"><FiInstagram/></a>
          <a href="https://api.whatsapp.com/send?phone=9947107295" target='_blank' rel="noreferrer"><BsWhatsapp/></a>
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
