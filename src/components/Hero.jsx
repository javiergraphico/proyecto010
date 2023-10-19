
import ImageMobil from '../assets/mobil_portada.webp'
import BtnButtons from './button/BtnButtons'
import { motion } from "framer-motion"
import './hero.css'

const AnimateCiculo = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: -0,
    opacity: 1,
    transition: {
      duration: 2,
      straggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    x: -200,
    transition: {
      duration: 8,
      repeat: Infinity,
    }
  }
}

const AnimateCuadrado = {
  initial: {
    x: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 3,
      straggerChildren: 0.2,
    },
  },
  scrollButton: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 8,
      repeat: Infinity,
    }
  }
}

const Hero = () => {
  return (
    <header className='header'>
        <div className='header_grid contenedor'>
          <picture className='header_conten_img'>
            <img src={ImageMobil} className='header_img' alt='hero' sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            600px" width="550" height="550" loading='lazy' />
          </picture>
          
          <div className='header_content'>
            <h1 className='header_h1'>Reputation. <br /> Respect. Result .</h1>
            <p className='header_p'>We know what is to defend rights. We work with people, for people and with the full respect to the law. Contact for more details!</p>
            <BtnButtons text='Free Consultation' />
          </div>
          

        </div>
        <motion.div variants={AnimateCiculo} animate="scrollButton" className='header_triangulo'></motion.div>
        <motion.div className='header_cuadrado' variants={AnimateCuadrado} animate="scrollButton"></motion.div>
        <motion.div variants={AnimateCuadrado} className='header_circulo_2' animate="scrollButton"></motion.div>
      
    </header>
  )
}

export default Hero