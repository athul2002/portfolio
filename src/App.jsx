import React from 'react'
import Header from './components/header/Header'
import Navbars from './components/nav/Navbars'
import About from './components/about/About'
import Experience from './components/experience.jsx/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const app = () => {
  return (
    <div>
      <Header/>
      <Navbars/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default app

