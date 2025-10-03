'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function CarruselInspirador() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div id="carouselExample" className="carousel slide w-50" data-bs-ride="carousel">
        <div className="carousel-inner rounded shadow">
          <div className="carousel-item active">
            <img src="/images/img1.jpg" className="d-block w-100" alt="Imagen 1" />
          </div>
          <div className="carousel-item">
            <img src="/images/img2.jpg" className="d-block w-100" alt="Imagen 2" />
          </div>
          <div className="carousel-item">
            <img src="/images/img3.jpg" className="d-block w-100" alt="Imagen 3" />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
}
