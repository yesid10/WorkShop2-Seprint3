import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./cupones.scss";

const Cupones = () => {
  const cupones = [
    {
      id: 1,
      image: "https://i.ibb.co/f2w9s1z/cupon.png",
      info: "Cupon para Frontends",
      discount: "45% OFF",
    },
    {
      id: 2,
      image: "https://i.ibb.co/f2w9s1z/cupon.png",
      info: "Cupon pizza CSS",
      discount: "25% OFF",
    },
    {
      id: 3,
      image: "https://i.ibb.co/f2w9s1z/cupon.png",
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
            <img src={cupon.image} alt="Cupón de descuento" />
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
