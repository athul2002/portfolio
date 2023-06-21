import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.jpg'
import IMG8 from '../../assets/portfolio8.png'
import IMG9 from '../../assets/portfolio9.jpg'

const data=[
  {
    id:1,
    image:IMG1,
    title:'Portfolio',
    description:'My Portfolio generated using React',
    github:'https://github.com/athul2002/portfolio',
    demo:'https://athul-portfolio-site.netlify.app/',
  },
  {
    id:2,
    image:IMG2,
    title:'News24 App',
    description:'A news app that displays daily news',
    github:'https://github.com/athul2002/news24-app',
    demo:''
  },
  {
    id:3,
    image:IMG3,
    title:'Taesting Cafe',
    description:'Website made for taking orders of a cafe',
    github:'https://github.com/athul2002/startinapp',
    demo:'https://taestingcafe.netlify.app/'
  },
  {
    id:4,
    image:IMG4,
    title:'Design Builders',
    description:'Website made for a construction company',
    github:'https://github.com/athul2002/design-builders-ksd',
    demo:'https://designbuilders.in/'
  },
  {
    id:5,
    image:IMG5,
    title:'Analysis of SDG scores (ML)',
    description:'ML model for analysis of SDG scores of states',
    github:'https://github.com/PrateekUp/AnalysisOfSDGscores2020-21DataScience',
    demo:'https://www.youtube.com/watch?v=EhPBAZufTIQ'
  },
  {
    id:6,
    image:IMG6,
    title:'Face Recognition App',
    description:'Face recongition app using clarifai API',
    github:'https://github.com/athul2002/facerecognitionapp',
    demo:''
  },
  {
    id:7,
    image:IMG7,
    title:'Octant Visualiser',
    description:'Streamlit app for Octant Visualisation',
    github:'https://github.com/athul2002/octant-visualiser',
    demo:'https://octant-visualiser-53o51cnzzp.streamlit.app/'
  },
  {
    id:8,
    image:IMG8,
    title:'PSAT',
    description:'Web Based Interface for PSAT',
    github:'https://github.com/athul2002/psat',
    demo:'https://psat-web.streamlit.app/'
  },
  {
    id:9,
    image:IMG9,
    title:'Score Card Generator',
    description:'Score Card Generator from commentary',
    github:'https://github.com/athul2002/score-card-generator',
    demo:''
  },

]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({id,image,title,description,github,demo})=>{
            return(
              <article key={id} className='portfolio_item'>
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
                <h3>{title}</h3>
                <small>{description}</small>
                <div className="portfolio_item-cta">
                  <a href={github}  rel="noreferrer" target='_blank' className="btn">Github</a>

                  {demo===''?'':<a href={demo} className="btn btn-primary" rel="noreferrer" target='_blank'>Live Demo</a>}
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
