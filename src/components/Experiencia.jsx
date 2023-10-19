import { motion } from "framer-motion"
import './experiencia.css'

const Experiencia = () => {
  return (
    <section className='experiencia'>
      <article className='contenedor'>
        <h2 className='experiencia_title'>20 Years Of Experience In Various Cases</h2>
        <p className='experiencia_parafo'>We’re proud that our law firm offers top-notch legal services for a nationwide affordable pricing! With us you’ll never feel like the lawyers are just robbers in suits, besides, we win 98% of all cases. So with us, your chances of winning are as high as they possibly can be!</p>
        <motion.div 
          className='contenedor_experiencia'
          initial={{opacity: 0.7, scale: 0.9}}
          transition={{duration: 1, ease: "easeInOut"}}
          whileInView={{opacity: 1, scale: 1}}
          drag 
          >
          <div className='experiencia_card'>
            <h3 className='experiencia_h3'>
              1998
            </h3>
            <p className='experiencia_p'>
              COMPANY <br /> ESTABLISHED
            </p>
          </div>

          <div className='experiencia_card'>
            <h3 className='experiencia_h3'>
              547
            </h3>
            <p className='experiencia_p'>
              CASES <br /> WON
            </p>
          </div>

          <div className='experiencia_card'>
            <h3 className='experiencia_h3'>
              45+
            </h3>
            <p className='experiencia_p'>
              BUSINESS <br /> PARTNERS
            </p>
          </div>

          <div className='experiencia_card'>
            <h3 className='experiencia_h3'>
              1500
            </h3>
            <p className='experiencia_p'>
              TRUSTING <br /> CLIENTS
            </p>
          </div>
        </motion.div>
      </article>
    </section>
  )
}

export default Experiencia