import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Portfolio from './Components/Portfolio'
import Aboutme from './Components/Aboutme'
import Footer from './Components/Footer'
import ContactMe from './Components/ContactMe'

function App() {
  
  return (
    <>
    <section id="Home"><Navbar/></section>
    <section id="Portfolio"><Portfolio/></section>
    <section id="AboutMe"><Aboutme/></section>
     <section id="contactMe"><ContactMe/></section>
     <Footer/>
     
    </>
  )
}

export default App
