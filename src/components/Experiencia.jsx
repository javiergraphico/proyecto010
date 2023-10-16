import React from 'react'
import './experiencia.css'

const Experiencia = () => {
  return (
    <div className='experiencia'>
      <div className='contenedor'>
        <h2 className='experiencia_title'>20 Years Of Experience In Various Cases</h2>
        <p className='experiencia_parafo'>We’re proud that our law firm offers top-notch legal services for a nationwide affordable pricing! With us you’ll never feel like the lawyers are just robbers in suits, besides, we win 98% of all cases. So with us, your chances of winning are as high as they possibly can be!</p>
        <div className='contenedor_experiencia'>
          <div className='experiencia_card'>
            <h2 className='experiencia_h3'>
              1998
            </h2>
            <h4 className='experiencia_p'>
              COMPANY <br /> ESTABLISHED
            </h4>
          </div>

          <div className='experiencia_card'>
            <h2 className='experiencia_h3'>
              547
            </h2>
            <h4 className='experiencia_p'>
              CASES <br /> WON
            </h4>
          </div>

          <div className='experiencia_card'>
            <h2 className='experiencia_h3'>
              45+
            </h2>
            <h4 className='experiencia_p'>
              BUSINESS <br /> PARTNERS
            </h4>
          </div>

          <div className='experiencia_card'>
            <h2 className='experiencia_h3'>
              1500
            </h2>
            <h4 className='experiencia_p'>
              TRUSTING <br /> CLIENTS
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiencia