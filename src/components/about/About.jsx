import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
          <img src={ME} alt="ME" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <a href="#experience">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>
                Experience
              </h5>
              <small>1+ Years</small>
            </article>
            </a>
            <a href="#portfolio">
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>
                Projects
              </h5>
              <small>10+</small>
            </article>
            </a>
          </div>
          <p>
            An Undergrad from Indian Institute of Technology , Patna.
A motivated, hardworking individual who is passionate about problem solving and an enthusiastic learner who is always on the lookout for new opportunities.
Trying to bring out the best version of myself.
Looking to connect with professionals in the tech industry and explore new opportunities
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default About
