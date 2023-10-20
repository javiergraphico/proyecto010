import React, { useState } from 'react';
import { motion } from "framer-motion"
import './experiencia.css'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Experiencia = () => {

  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación se activará solo una vez cuando se haga visible
    threshold: 0.1, // La animación se activará cuando el 10% del elemento sea visible
  });
  // Actualizar el estado cuando la sección es visible
  React.useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section ref={ref} className='experiencia'>
      
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
              {isVisible && <CountUp delay={2} start={1689} end={1998} duration={0.9} separator="" />}
            </h3>
            <p className='experiencia_p'>
              COMPANY <br /> ESTABLISHED
            </p>
          </div>

          <div className='experiencia_card'>
            <h3 className='experiencia_h3'>
            {isVisible && <CountUp delay={2} start={447} end={547} duration={1} />}
            </h3>
            <p className='experiencia_p'>
              CASES <br /> WON
            </p>
          </div>

          <div className='experiencia_card'>
            <h3 className='experiencia_h3'>
              {isVisible && <CountUp delay={2} end={45} duration={1} />}+
            </h3>
            <p className='experiencia_p'>
              BUSINESS <br /> PARTNERS
            </p>
          </div>

          <div className='experiencia_card'>
            <h3 className='experiencia_h3'>
              {isVisible && <CountUp delay={2} end={1500} duration={1} separator="" />}
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