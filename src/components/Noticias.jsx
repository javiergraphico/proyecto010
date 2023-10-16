import React from 'react'
import { BiPlusCircle } from 'react-icons/Bi';
import './noticias.css'

const Noticias = () => {
  return (
    <div className='noticias'>
      <h2 className='noticia_h2'>Recent News</h2>
      <div className='contenedor'>
        <div className='noticias_contenedor'>
          <div className='noticias_card'>
            <div className='noticias_content_legal'>
              <p className='noticias_p_legal'>Legal</p>
            </div>
            <h3 className='noticias_h3'>Could we be held responsible for our parents’ bills?</h3>
            <p className='noticias_p'>In Family law it is well known that Parents have a duty to support their children. This is the basis by which the state can impose child support on divorcing parents.</p>
            <div className='noticias_content_date'>
              <p className='noticias_p_date'>Admin</p>
              <hr className='noticias_hr'></hr>
              <p className='noticias_p_date'>May 29, 2019</p>
            </div>
            <BiPlusCircle className='noticias_icon_plus' />
          </div>

          <div className='noticias_card'>
            <div className='noticias_content_legal'>
              <p className='noticias_p_legal'>Legal</p>
            </div>
            <h3 className='noticias_h3'>Could we be held responsible for our parents’ bills?</h3>
            <p className='noticias_p'>In Family law it is well known that Parents have a duty to support their children. This is the basis by which the state can impose child support on divorcing parents.</p>
            <div className='noticias_content_date'>
              <p className='noticias_p_date'>Admin</p>
              <hr className='noticias_hr'></hr>
              <p className='noticias_p_date'>May 29, 2019</p>
            </div>
            <BiPlusCircle className='noticias_icon_plus' />
          </div>

          <div className='noticias_card'>
            <div className='noticias_content_legal'>
              <p className='noticias_p_legal'>Legal</p>
            </div>
            <h3 className='noticias_h3'>Could we be held responsible for our parents’ bills?</h3>
            <p className='noticias_p'>In Family law it is well known that Parents have a duty to support their children. This is the basis by which the state can impose child support on divorcing parents.</p>
            <div className='noticias_content_date'>
              <p className='noticias_p_date'>Admin</p>
              <hr className='noticias_hr'></hr>
              <p className='noticias_p_date'>May 29, 2019</p>
            </div>
            <BiPlusCircle className='noticias_icon_plus' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Noticias