import React from "react";
import ImgCliente from "../assets/pexels-andrea-piacquadio-3785079.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import "swiper/css";
import "swiper/css/navigation";
import "./CardCliente.css";

const CardCliente = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      spaceBetween={50}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="card_cliente">
          <img className="card_cliente_img" src={ImgCliente} alt="Cliente" />
          <p className="card_cliente_p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
            quidem, nobis repellendus magnam odio id iure unde voluptatem
            tempore maxime similique facere eos. Libero ut recusandae voluptates
            veniam quod mollitia.
          </p>
          <h3 className="card_cliente_Name">John Doe</h3>
          <p className="card_cliente_pro">School Teacher</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card_cliente">
          <img className="card_cliente_img" src={ImgCliente} alt="Cliente" />
          <p className="card_cliente_p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
            quidem, nobis repellendus magnam odio id iure unde voluptatem
            tempore maxime similique facere eos. Libero ut recusandae voluptates
            veniam quod mollitia.
          </p>
          <h3 className="card_cliente_Name">John Doe</h3>
          <p className="card_cliente_pro">School Teacher</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card_cliente">
          <img className="card_cliente_img" src={ImgCliente} alt="Cliente" />
          <p className="card_cliente_p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
            quidem, nobis repellendus magnam odio id iure unde voluptatem
            tempore maxime similique facere eos. Libero ut recusandae voluptates
            veniam quod mollitia.
          </p>
          <h3 className="card_cliente_Name">John Doe</h3>
          <p className="card_cliente_pro">School Teacher</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CardCliente;
