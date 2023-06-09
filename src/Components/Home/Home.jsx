import React, { useEffect, useState, useContext } from "react";
import { get } from "../../services/apipizza";
import "./home.scss";
import Cupones from "../cupones/Cupones";
import { Link } from "react-router-dom";
import { searchParamsContext } from "../../Routes/AppRouter";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  const [home, sethome] = useState([]);

  const { user, setpizza } = useContext(searchParamsContext);
  console.log(user);
  const getHome = async () => {
    const gethome = await get("Home");
    sethome(gethome);
    console.log(home);
  };

  const handleclick = (id) => {
    const pizza = id;
    console.log(pizza);
    const findpizza = home.find((item) => item.id === pizza);
    console.log(findpizza);
    setpizza(findpizza);
  };

  useEffect(() => {
    getHome();
  }, []);

  return (
    <header className="header">
      <div className="header__bienvenida">
        <h1>Home</h1>
        {/*usuari@ */}
        <p>!Que bueno verte {user.nombre} !</p>
        <figure>
          <img src={user.imagen} alt={user.nombre} />
        </figure>
      </div>
      <div className="header__disponibles">
        <h2>Pizzas disponibles</h2>
        <p>Ver todas</p>
      </div>
      <Cupones />
      <div className="header__pizzas">
        {home.map((front, index) => (
          <Link
            to={"/detallepizza"}
            style={{ textDecoration: "none" }}
            key={index}
          >
            <div onClick={() => handleclick(front.id)}>
              <Carousel
                showThumbs={false}
                autoPlay={true}
                interval={2500}
                infiniteLoop={true} // Agregado para el bucle infinito
                className="custom-carousel"
              >
                <div className="contenedor__item">
                  <img
                    className="contenedor__img"
                    src={front.image1}
                    alt={front.nombre}
                  />
                  <h2>{front.nombre}</h2>
                  <button>
                    <strong>
                      <h4>${front.precio}</h4>
                    </strong>
                    <h3>MXN</h3>
                  </button>
                </div>
                <div className="contenedor__item">
                  <img
                    className="contenedor__img"
                    src={front.image2}
                    alt={front.nombre}
                  />
                  <h2>{front.nombre}</h2>
                  <button>
                    <strong>
                      <h4>${front.precio}</h4>
                    </strong>
                    <h3>MXN</h3>
                  </button>
                </div>
                <div className="contenedor__item">
                  <img
                    className="contenedor__img"
                    src={front.image3}
                    alt={front.nombre}
                  />
                  <h2>{front.nombre}</h2>
                  <button>
                    <strong>
                      <h4>${front.precio}</h4>
                    </strong>
                    <h3>MXN</h3>
                  </button>
                </div>
              </Carousel>
            </div>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Home;
