import React from 'react'
import { PiBagSimple } from 'react-icons/Pi';
import { CiUser } from 'react-icons/Ci';
import { BsUmbrella } from 'react-icons/Bs';
import './servicios.css'

const Servicios = () => {
  return (
    <section className='servicios'>
      <div className='contenedor'>
        <div className='servicios_content'>
            <div className='servicios_card'>
              <div className='servicios_content_icons'>
                  <PiBagSimple className='servicios_item_icon' />
              </div>
              <h3 className='servicios_h3'>Business Law</h3>
              <p className='servicios_p'>Business requires strong legislative background to operate well.</p>
            </div>

            <div className='servicios_card'>
              <div className='servicios_content_icons'>
                  <CiUser className='servicios_item_icon' />
              </div>
              <h3 className='servicios_h3'>Civil Litigation</h3>
              <p className='servicios_p'>Business requires strong legislative background to operate well.</p>
            </div>

            <div className='servicios_card'>
              <div className='servicios_content_icons'>
                  <BsUmbrella className='servicios_item_icon' />
              </div>
              <h3 className='servicios_h3'>Insurance Defence</h3>
              <p className='servicios_p'>Business requires strong legislative background to operate well.</p>
            </div>
        </div>
        <div className='servicios_content_text'>
          <div className='servicios_content_title'>
            <h2 className='servicios_h2'>Why You Can Trust Legalor, <span style={{color: 'rgb(0, 41, 107)'}}>Our Values</span></h2>
          </div>
          <div className='servicios_content_paragraph'>
            <p>We value justice, honesty and time. We are always at your service as we are in charge of your defence. Any detail will be noticed and it can be essential for your case.</p>
            <br />
            <p>During our work we gathered a team of devoted experts with rich experience in juridical help. We put a great emphasis on business law, because in today’s rapidly-changing environment, people require assistance in business spheres. Our experience allows us to be confident and stand by our words.</p>
            <br />
            <p>Our company was established in 2004. We started as a small legal consultancy. We have proved our competence and had many satisfied clients. We expanded our activity and started providing many other juridical services to meet wider clients needs.</p>
            <br />
            <button className='servicios_btn'>Read More</button>
          </div>
        </div>

      </div>
      

    </section>
  )
}

export default Servicios