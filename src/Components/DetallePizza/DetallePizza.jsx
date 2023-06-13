import React, { useContext, useState } from 'react'
import { searchParamsContext } from '../../Routes/AppRouter';
import './DetallePizza.scss'
import { Carousel } from 'react-responsive-carousel';
import { BsBagPlus, BsFillStarFill } from 'react-icons/bs';
import { MdArrowBackIosNew } from 'react-icons/md';
import { HiMinusSm } from 'react-icons/hi';
import { FaPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const DetallePizza = () => {
  const { pizza } = useContext(searchParamsContext);

  console.log(pizza)
  
 
  const { count, setCount, precioFinal, setPrecioFinal, setNombrePizza } = useContext(searchParamsContext);
  const {precio, nombre} = pizza;
  setNombrePizza(nombre);
  setPrecioFinal(precio*count)


  const handleMinus = () => {
    setCount(count - 1);
    if (count < 1) {
      setCount(0)
      Swal.fire(
        'Oops!',
        'Se detecto un valor negativo!',
        'error'
      )
    }
  }
  const handlePlus = () => {
    setCount(count + 1);
  }





  return (

    <div className='detallePizza'>
      <div className='detallePizza__info'>
        <div className='detallePizza__title'>
          <MdArrowBackIosNew style={{ color: '#fff', fontWeight: 'bold' }} />
          <p>
            Todas las Pizzas
          </p>
        </div>
        <div >
          <Carousel
            showThumbs={false}
            autoPlay={true}
            interval={2500}
            infiniteLoop={true} // Agregado para el bucle infinito
          >
            <div className='detallePizza__images'>
              <img
                src={pizza.image1}
                alt={pizza.nombre}
              />
              <div></div>
            </div>
            <div className='detallePizza__images'>
              <img
                src={pizza.image2}
                alt={pizza.nombre}
              />
              <div></div>
            </div>
            <div className='detallePizza__images'>
              <img
                src={pizza.image3}
                alt={pizza.nombre}
              />
              <div></div>
            </div>
          </Carousel>
        </div>
        <div className='detallePizza__description'>
          <h3>{pizza.nombre}</h3>
          <div>
            <button> <span>${precioFinal}</span> MXN </button>
            <div>
              <BsFillStarFill style={{ color: '#fff' }} />
              445 Reviews
            </div>
          </div>
          <h5>Descripción</h5>
          <p>{pizza.descripcion}</p>
        </div>

        <div className="detallePizza__comentarios">
          <figure>
            <img src={pizza.foto} alt="" />
          </figure>
          <div>
            <section >
              <p>{pizza.usuario}</p>
              <span>4d ago</span>
            </section>
            <figure>
              <BsFillStarFill style={{ color: '#fb7401', fontSize: '.7rem', marginRight: '.5rem' }} />
              <BsFillStarFill style={{ color: '#fb7401', fontSize: '.7rem', marginRight: '.5rem' }} />
              <BsFillStarFill style={{ color: '#fb7401', fontSize: '.7rem', marginRight: '.5rem' }} />
            </figure>
            <p>{pizza.comentario}</p>
          </div>
        </div>
      </div>
      <div className='detallePizza__footer'>
        <HiMinusSm onClick={handleMinus} style={{ color: '#fff', cursor: 'pointer', fontSize: '1.5rem' }} />
        <span>{count}</span>
        <FaPlus onClick={handlePlus} style={{ color: '#fff', cursor: 'pointer' }} />
        <div>
          <BsBagPlus style={{ color: '#fff' }} />
        </div>
        <Link to={'/carrito'}>
          <button>Pagar</button>
        </Link>
      </div>
    </div>
  )

}

export default DetallePizza