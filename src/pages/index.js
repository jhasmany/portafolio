import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './index.css'
import Slide from '../components/Slide'
import Nav from '../components/Nav'
import About from '../components/About'
import Skills from '../components/Skills'
import Portafolio from '../components/Portafolio'
import Contact from '../components/Contact'

export default function Home() {

  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Slide />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/portfolio">
            <Portafolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
