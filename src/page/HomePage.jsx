import ServiceSection from '../component/ServiceSection'
import react from '../image/react.png'
import fullstack from '../image/fullstack.png'
import spring from '../image/spring.png'
import app from '../image/app.png'
import { FaGithub, FaLinkedin, FaResearchgate } from 'react-icons/fa'
import { useEffect } from 'react'

function HomePage() {
  useEffect(() => {
    document.title = "Mikes Consult | home";
  }, []);

  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          <p>Daniel Mikes</p>
          <span>Consultor</span>
        </h1>
        <div className="icons">
          <a href="https://github.com/danmikes" className="icon-holder" >
            <FaGithub className="icon gh" />
          </a>
          <a href="https://linkedin.com/in/dmikes" className="icon-holder" >
            <FaLinkedin className="icon li" />
          </a>
          <a href="https://researchgate.net/profile/Daniel-Mikes" className="icon-holder" >
            <FaResearchgate className="icon rg" />
          </a>
        </div>
      </header>

      <div className="service-container">
        <ServiceSection
          image={spring}
          title={'Coaching'}
          items={['Cohesion', 'Communication', 'Conflict', 'Instruction']} />
        <ServiceSection
          image={app}
          title={'Codebase'}
          items={['Design', 'Functionality', 'Structure', 'User Experience']} />
        <ServiceSection
          image={fullstack}
          title={'Management'}
          items={['Coordination', 'Project Planning', 'Project Management', 'Technical Advice']} />
        <ServiceSection
          image={react}
          title={'Workflow'}
          items={['Coding', 'Feedback', 'Requirements', 'Support']} />
      </div>
    </div>
  )
}

export default HomePage
