import { motion } from "framer-motion"
import './servicios.css'

const Servicios = () => {
  return (
    <section className='servicios'>
      <div className='contenedor'>
        <motion.article 
          className='servicios_content'
          initial={{opacity: 0.7, scale: 0.9}}
          transition={{duration: 1, ease: "easeInOut"}}
          whileInView={{opacity: 1, scale: 1}}
          drag 
          >
            <div className='servicios_card'>
              <div className='servicios_content_icons'>
                {/* icon bag */}
                <svg className='servicios_item_icon' xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                </svg>
              </div>
              <h3 className='servicios_h3'>Business Law</h3>
              <p className='servicios_p'>Business requires strong legislative background to operate well.</p>
            </div>

            <div className='servicios_card'>
              <div className='servicios_content_icons'>
                  {/* user icon */}
                  <svg className='servicios_item_icon' xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                  </svg>
              </div>
              <h3 className='servicios_h3'>Civil Litigation</h3>
              <p className='servicios_p'>Business requires strong legislative background to operate well.</p>
            </div>

            <div className='servicios_card'>
              <div className='servicios_content_icons'>
                  {/* sombrilla */}
                <svg className='servicios_item_icon' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0a.5.5 0 0 1 .5.5v.514C12.625 1.238 16 4.22 16 8c0 0 0 .5-.5.5-.149 0-.352-.145-.352-.145l-.004-.004-.025-.023a3.484 3.484 0 0 0-.555-.394A3.166 3.166 0 0 0 13 7.5c-.638 0-1.178.213-1.564.434a3.484 3.484 0 0 0-.555.394l-.025.023-.003.003s-.204.146-.353.146-.352-.145-.352-.145l-.004-.004-.025-.023a3.484 3.484 0 0 0-.555-.394 3.3 3.3 0 0 0-1.064-.39V13.5H8h.5v.039l-.005.083a2.958 2.958 0 0 1-.298 1.102 2.257 2.257 0 0 1-.763.88C7.06 15.851 6.587 16 6 16s-1.061-.148-1.434-.396a2.255 2.255 0 0 1-.763-.88 2.958 2.958 0 0 1-.302-1.185v-.025l-.001-.009v-.003s0-.002.5-.002h-.5V13a.5.5 0 0 1 1 0v.506l.003.044a1.958 1.958 0 0 0 .195.726c.095.191.23.367.423.495.19.127.466.229.879.229s.689-.102.879-.229c.193-.128.328-.304.424-.495a1.958 1.958 0 0 0 .197-.77V7.544a3.3 3.3 0 0 0-1.064.39 3.482 3.482 0 0 0-.58.417l-.004.004S5.65 8.5 5.5 8.5c-.149 0-.352-.145-.352-.145l-.004-.004a3.482 3.482 0 0 0-.58-.417A3.166 3.166 0 0 0 3 7.5c-.638 0-1.177.213-1.564.434a3.482 3.482 0 0 0-.58.417l-.004.004S.65 8.5.5 8.5C0 8.5 0 8 0 8c0-3.78 3.375-6.762 7.5-6.986V.5A.5.5 0 0 1 8 0zM6.577 2.123c-2.833.5-4.99 2.458-5.474 4.854A4.124 4.124 0 0 1 3 6.5c.806 0 1.48.25 1.962.511a9.706 9.706 0 0 1 .344-2.358c.242-.868.64-1.765 1.271-2.53zm-.615 4.93A4.16 4.16 0 0 1 8 6.5a4.16 4.16 0 0 1 2.038.553 8.688 8.688 0 0 0-.307-2.13C9.434 3.858 8.898 2.83 8 2.117c-.898.712-1.434 1.74-1.731 2.804a8.687 8.687 0 0 0-.307 2.131zm3.46-4.93c.631.765 1.03 1.662 1.272 2.53.233.833.328 1.66.344 2.358A4.14 4.14 0 0 1 13 6.5c.77 0 1.42.23 1.897.477-.484-2.396-2.641-4.355-5.474-4.854z"/>
                </svg>
              </div>
              <h3 className='servicios_h3'>Insurance Defence</h3>
              <p className='servicios_p'>Business requires strong legislative background to operate well.</p>
            </div>
        </motion.article>
        <article className='servicios_content_text'>
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
        </article>

      </div>
      

    </section>
  )
}

export default Servicios