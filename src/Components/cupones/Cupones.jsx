import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./cupones.scss";
import Cupon from "../../assets/Images/cupon.png";
const Cupones = () => {
  const cupones = [
    {
      id: 1,
      info: "Cupon para Frontends",
      discount: "45% OFF",
    },
    {
      id: 2,
      info: "Cupon pizza CSS",
      discount: "25% OFF",
    },
    {
      id: 3,
      info: "Cupon para Backends",
      discount: "15% OFF",
    },
  ];

  return (
    <div className="carousel__container">
      <Carousel
        autoPlay // Añade el prop autoPlay para que el carrusel se mueva automáticamente
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        emulateTouch
        swipeable
      >
        {cupones.map((cupon) => (
          <div className="carousel-item" key={cupon.id}>
            <img src={Cupon} alt="Cupón de descuento" />
            <div className="carousel-item__info">
              <h3>{cupon.info}</h3>
              <p>{cupon.discount}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Cupones;
