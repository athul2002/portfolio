import React from 'react'
import './Navbar.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
const Navbars = () => {
  const[activeNav,setActiveNav]=useState('#')
    return(
    <nav>
      <a href="/#" className={activeNav==='/#'?'active':''} onClick={()=>setActiveNav('/#')}><AiOutlineHome/></a>
      <a href="#about" className={activeNav==='#about'?'active':''} onClick={()=>setActiveNav('#about')}><AiOutlineUser/></a>
      <a href="#experience" className={activeNav==='#experience'?'active':''} onClick={()=>setActiveNav('#experience')}><BiBook/></a>
      <a href="#contact" className={activeNav==='#contact'?'active':''} onClick={()=>setActiveNav('#contact')}><BiMessageSquareDetail/></a>
    </nav>
    );
};


export default Navbars
