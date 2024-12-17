import { useState } from 'react'
import './App.css'
import Home from './components/home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </>
  )
}

export default App
