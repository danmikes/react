import { FaGithub, FaLinkedin, FaYoutube, FaResearchgate } from 'react-icons/fa'

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          <p>Daniel Mikes</p>
          <span> geologist &rarr; developer</span>
        </h1>
        <p className="h-sub-text">
          "this is the way"
        </p>
        <div className="icons">
          <a href="https://github.com/danmikes" className="icon-holder" >
            <FaGithub className="icon gh" />
          </a>
          <a href="https://linkedin.com/in/dmikes" className="icon-holder" >
            <FaLinkedin className="icon li" />
          </a>
          <a href="https://youtube.com" className="icon-holder" >
            <FaYoutube className="icon yt" />
          </a>
          <a href="https://researchgate.net/profile/Daniel-Mikes" className="icon-holder" >
            <FaResearchgate className="icon rg" />
          </a>
        </div>
      </header>
    </div>
  )
}

export default HomePage
