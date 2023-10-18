import React from 'react'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Experiencia from './components/Experiencia'
import Practica from './components/Practica'
import Testimonio from './components/Testimonio'
import Noticias from './components/Noticias'
import Footer from './components/Footer'



function App() {
  return (
      <main>
        <Hero />
        <Servicios />
        <Experiencia />
        <Practica />
        <Testimonio />
        <Noticias />
        <Footer />
      </main>
  )
}

export default App
