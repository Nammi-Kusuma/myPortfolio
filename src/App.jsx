import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills.jsx'
import Footer from './components/Footer/Footer'
import Animation from './components/Animation/Animation'
import Contact from './components/Contact/Contact.jsx'

function App() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Skills />
      {/* <Animation/> */}
      <Contact/>
      <Footer />
    </>
  )
}

export default App
