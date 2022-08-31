import React from "react";
import Title from "../components/Title";

import tienda1 from "../images/tienda1.jpeg";
import tienda2 from "../images/tienda2.jpeg";
import tienda3 from "../images/tienda3.jpeg";

const HomePage = () => {
  return (
    <>
      <Title titulo="Pagina de inicio" />
      <main className="row pt-5">
        <article className="col-6">
          <h2 className="text-center">Bienvenidos</h2>
          <p className="fs-3">
            Les doy la bienvenida a la tienda online #1 del mundo, donde podran
            adquirir productos a muy bajo costo.
          </p>
          <p className="fs-3">
            En breve encontraras los productos mas destacados del momento.
          </p>
        </article>
        <article className="col-6">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={tienda1} className="d-block w-100" alt="Tienda 1" />
              </div>
              <div className="carousel-item">
                <img src={tienda2} className="d-block w-100" alt="Tienda 2" />
              </div>
              <div className="carousel-item">
                <img src={tienda3} className="d-block w-100" alt="Tienda 3" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </article>
      </main>
    </>
  );
};

export default HomePage;
