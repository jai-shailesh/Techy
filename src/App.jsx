import React from 'react'
import './App.css'
import Navbar from './components/pages/Navbar/Navbar'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import Services from './components/pages/Services/Services'
import Testimonials from './components/pages/Testimonials/Testimonials'
import Footer from './components/pages/Footer/Footer'
import Contact from './components/pages/Contact/Contact'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
