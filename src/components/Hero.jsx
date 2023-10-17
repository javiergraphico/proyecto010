import React from 'react'

import ImagHeroMedia from '../assets/yoge_movil_1_unsplash.webp'
import './hero.css'

const Hero = () => {
  return (
    <header className='header'>
        <div className='header_grid contenedor'>
          <div className='header_conten_img'>
            <img src={ImagHeroMedia} className='header_img' alt='hero' />
          </div>
          
          <div className='header_content'>
            <h1 className='header_h1'>Reputation. <br /> Respect. Result .</h1>
            <p className='header_p'>We know what is to defend rights. We work with people, for people and with the full respect to the law. Contact for more details!</p>
            <button className='header_btn'>Free Consultation</button>
          </div>
          

        </div>
        <div className='header_triangulo'></div>
        <div className='header_cuadrado'></div>
        {/* <div className='header_circulo'></div> */}
        <div className='header_circulo_2'></div>
      
    </header>
  )
}

export default Hero