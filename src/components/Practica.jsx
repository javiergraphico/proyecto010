import React from 'react'
import { BsUmbrella } from 'react-icons/Bs';
import { CiUser } from 'react-icons/Ci';
import { PiBagSimple } from 'react-icons/Pi';
import { PiBookOpenLight } from 'react-icons/Pi';
import { HiOutlineHome } from 'react-icons/Hi';
import { TbMoneybag } from 'react-icons/Tb';
import './Practica.css'

const Practica = () => {
  return (
    <div className='practica'>
      <div className='contenedor'>
        <h2 className='practica_h2'>Our Legal Practice Areas</h2>
        <div className='practica_contenedor'>
          <div className='practica_card'>
              <div className='practica_content_icons'>
                <CiUser className='practica_item_icon' />
              </div>
              <h3 className='practica_h3'>Family Law</h3>
              <p className='practica_p'>We aim to support families in resolving their own disputes. We ensure professional consultancy and result.</p>
          </div>

          <div className='practica_card'>
              <div className='practica_content_icons'>
                <PiBagSimple className='practica_item_icon' />
              </div>
              <h3 className='practica_h3'>Business Law</h3>
              <p className='practica_p'>We aim to support families in resolving their own disputes. We ensure professional consultancy and result.</p>
          </div>

          <div className='practica_card'>
              <div className='practica_content_icons'>
                <PiBookOpenLight className='practica_item_icon' />
              </div>
              <h3 className='practica_h3'>Civil Litigation</h3>
              <p className='practica_p'>We aim to support families in resolving their own disputes. We ensure professional consultancy and result.</p>
          </div>

          <div className='practica_card'>
              <div className='practica_content_icons'>
                <BsUmbrella className='practica_item_icon' />
              </div>
              <h3 className='practica_h3'>Insurance Defence</h3>
              <p className='practica_p'>We aim to support families in resolving their own disputes. We ensure professional consultancy and result.</p>
          </div>

          <div className='practica_card'>
              <div className='practica_content_icons'>
                <HiOutlineHome className='practica_item_icon' />
              </div>
              <h3 className='practica_h3'>Land & Assets</h3>
              <p className='practica_p'>We aim to support families in resolving their own disputes. We ensure professional consultancy and result.</p>
          </div>

          <div className='practica_card'>
              <div className='practica_content_icons'>
                <TbMoneybag className='practica_item_icon' />
              </div>
              <h3 className='practica_h3'>Finance Law</h3>
              <p className='practica_p'>We aim to support families in resolving their own disputes. We ensure professional consultancy and result.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Practica