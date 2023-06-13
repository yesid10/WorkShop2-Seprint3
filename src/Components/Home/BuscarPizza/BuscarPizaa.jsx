import React, { useState, useContext, useEffect } from "react";
import { get } from "../../../serviceshome/apipizza";
import { searchParamsContext } from "../../../Routes/AppRouter";
import Menu from "../../menu/Menu";
import LogoPizzza from "../../../assets/Images/PizzaLogoBuscador.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import "./stylesbuscarpizza.scss";
const BuscarPizza = () => {
  const [home, setHome] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showNotFound, setShowNotFound] = useState(false);

  const { user } = useContext(searchParamsContext);
  console.log(user);

  const getHome = async () => {
    const homeData = await get("home");
    setHome(homeData);
    console.log(homeData);
  };

  const handleclick = (id) => {
    const pizza = id;
    console.log(pizza);
    const findpizza = home.find((item) => item.id === pizza);
    console.log(findpizza);
  };

  useEffect(() => {
    getHome();
  }, []);

  const handleSearch = () => {
    const filteredResults = home.filter((item) =>
      item.nombre.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
    setShowNotFound(filteredResults.length === 0);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setShowNotFound(false);
  };

  return (
    <main>
      <div className="header__bienvenida">
        <h1>Home</h1>
        {/*usuari@ */}
        <p>!Que bueno verte {user.nombre} !</p>
        <figure className="header__usuario">
          <img src={user.imagen} alt={user.nombre} />
        </figure>
      </div>
      <div className="main__buscador">
        <input
          type="text"
          placeholder="Pizza hawaiana,sicialianas..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height=""
            width="23px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
          </svg>
        </button>
      </div>
      {!searchQuery && (
        <div className="main__buscalapizza">
          <img src={LogoPizzza} alt="Not Found" />
          <p>Busca la pizza que más te gusta</p>
        </div>
      )}
      {showNotFound && searchQuery && (
        <div className="main__pizzanoencontrada">
          <img src={LogoPizzza} alt="Not Found" />
          <p>Pizza no encontrada</p>
        </div>
      )}
      {searchResults.length > 0 && (
        <div>
          {searchResults.map((item, index) => (
            <Link
              to={"/detallepizza"}
              style={{ textDecoration: "none" }}
              key={index}
            >
              <div onClick={() => handleclick(item.id)}>
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
                      src={item.image1}
                      alt={item.nombre}
                    />
                    <h2>{item.nombre}</h2>
                    <button>
                      <strong>
                        <h4>${item.precio}</h4>
                      </strong>
                      <h3>MXN</h3>
                    </button>
                  </div>
                  <div className="contenedor__item">
                    <img
                      className="contenedor__img"
                      src={item.image2}
                      alt={item.nombre}
                    />
                    <h2>{item.nombre}</h2>
                    <button>
                      <strong>
                        <h4>${item.precio}</h4>
                      </strong>
                      <h3>MXN</h3>
                    </button>
                  </div>
                  <div className="contenedor__item">
                    <img
                      className="contenedor__img"
                      src={item.image3}
                      alt={item.nombre}
                    />
                    <h2>{item.nombre}</h2>
                    <button className="precio">
                      <strong>
                        <h4>${item.precio}</h4>
                      </strong>
                      <h3>MXN</h3>
                    </button>
                  </div>
                </Carousel>
              </div>
            </Link>
          ))}
        </div>
      )}
      <Menu />
    </main>
  );
};

export default BuscarPizza;
