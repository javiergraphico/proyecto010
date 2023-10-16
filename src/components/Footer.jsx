import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import { FaBehance } from 'react-icons/Fa';
import { FiInstagram } from 'react-icons/Fi';
import { FaLinkedinIn} from 'react-icons/Fa';
import { RiTwitterXFill } from 'react-icons/Ri';

import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <ScrollToTop smooth top="4000" width="20" height="20" />
      <div className='contenedor'>
        <div className='footer_contenedor'>
          <div className='footer_conten_logo'>
            <h3 className='footer_logo'>Legalor</h3>
            <p className='footer_p_logo'>Your reliable protection in jurisprudence. Our qualification provides the opportunity solve the problems of any complexity.</p>
          </div>

          <div className='footer_conten_links'>
            <h3 className='footer_h3'>Quick Links</h3>
            <ul className='footer_ul'>
              <a className='footer_link' href="#">Home</a>
              <a className='footer_link' href="#">About</a>
              <a className='footer_link' href="#">Services</a>
              <a className='footer_link' href="#">News</a>
              <a className='footer_link' href="#">Contacts</a>
            </ul>
          </div>

          <div className='footer_conten_info'>
            <h3 className='footer_h3'>Contact Info</h3>
            <p className='footer_info_p'>Address: 123 Main Street, Anytown, USA</p>
            <p className='footer_info_p'>info@javiergraphico.com</p>
            <p className='footer_info_p'>800 456-7890</p>
            <br />
            <p className='footer_info_p'>Mon-Thu: 9:30 - 21:00</p>
            <p className='footer_info_p'>Fri: 6:30 - 22:00</p>
            <p className='footer_info_p'>Sat: 10:00 - 22:00</p>
          </div>
          
          <div className='footer_conten_news'>
            <h3 className='footer_h3'>Newsletter</h3>
            <form>
              <input className='footer_input' type="text" placeholder='Your Email Address'/>
              <button className='footer_button'>Sign Up</button>
            </form>
            <p className='footer_news_p'>Be the first to find out about exclusive deals, the latest Lookbooks, and top trends.</p>
          </div>
        </div>
        <hr />
        <div className='footer_conten_copyright'>
          <p className='footer_copyright_p'>© 2023 Copyright Javiergraphico. All Rights Reserved | Privacy Policy</p>
          <div className='footer_social'>
            <a className='footer_icon' href="#"><FaBehance /></a>
            <a className='footer_icon' href="#"><RiTwitterXFill /></a>
            <a className='footer_icon' href="#"><FaLinkedinIn /></a>
            <a className='footer_icon' href="#"><FiInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer