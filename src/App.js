import { Switch, Route } from 'react-router-dom'
import './App.scss'
import NavBar from './component/NavBar'
import HomePage from './page/HomePage'
import AboutPage from './page/AboutPage'
import PortfolioPage from './page/PortfolioPage'
import ContactPage from './page/ContactPage'
import { useState } from 'react'

function App() {
  const [navToggle, setNavToggle] = useState(false)

  const navClick = () => {
    setNavToggle(!navToggle)
  }

  return (
    <div className="App">
      <div className={`sidebar ${navToggle && 'nav-toggle'}`}>
        <NavBar />
      </div>
      <button type="button" className="nav-btn" onClick={navClick}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </button>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/portfolio" exact>
              <PortfolioPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
            <Route path="*" exact>
              <HomePage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App
