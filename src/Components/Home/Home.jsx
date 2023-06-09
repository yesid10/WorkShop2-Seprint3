import React, { useEffect, useState, useContext } from "react";
import { get } from "../../services/apipizza";
import "./home.scss";
import Cupones from "../cupones/Cupones";
import { Link } from "react-router-dom";
import { searchParamsContext } from "../../Routes/AppRouter";

const Home = () => {
  const [frontends, setFrontends] = useState([]);
  const [javascripts, setjavascript] = useState([]);

  const { user, setpizza } = useContext(searchParamsContext);
  console.log(user);
  const getfrontends = async () => {
    const getfrontend = await get("frontends");
    setFrontends(getfrontend);
    console.log(frontends);
  };
  const getjavascripts = async () => {
    const getjavascript = await get("javascript");
    setjavascript(getjavascript);
    console.log(javascripts);
  };

  const handleclick = (id) => {
    const pizza = id;
    console.log(pizza);
    const findpizza = frontends.find((item) => item.id === pizza);
    console.log(findpizza);
    setpizza(findpizza);
  };

  useEffect(() => {
    getfrontends();
    getjavascripts();
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
        {frontends.map((front, index) => (
          <Link to={"/detallepizza"} style={{ textDecoration: "none" }}>
            <div key={index} onClick={() => handleclick(front.id)}>
              <div className="contenedor__item">
                <img
                  className="contenedor__img"
                  src={front.image}
                  alt={front.name}
                />
              </div>
              <h2>{front.nombre}</h2>
              <button>
                <strong>
                  <h4>${front.precio} </h4>
                </strong>
                <h3>MXN</h3>
              </button>
            </div>
          </Link>
        ))}
      </div>

      <div className="header__pizzas">
        {javascripts.map((java, index) => (
          <Link to={"/detallepizza"} style={{ textDecoration: "none" }}>
            <div key={index} onClick={() => handleclick(java.id)}>
              <div className="contenedor__item">
                <img
                  className="contenedor__img"
                  src={java.image}
                  alt={java.name}
                />
              </div>
              <h2>{java.nombre}</h2>
              <button>
                <strong>
                  <h4>${java.precio} </h4>
                </strong>
                <h3>MXN</h3>
              </button>
            </div>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Home;
