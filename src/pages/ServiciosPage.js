import React from "react";
import "../styles/components/pages/ServiciosPages.css";

const ServiciosPage = (props) => {
  return (
    <main className="holder-servicios">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./Img/0 km.jpg" className="d-block w-100" alt="0 km"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>LLevate tu 0km</h5>
                <p>El precio mas bajo del Pais. Somos Auto Design</p>
              </div>
          </div>
          <div className="carousel-item">
            <img src="./Img/Used-Car.jpg" className="d-block w-100" alt="Usados"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Usados Seleccionados</h5>
                <p>El precio mas bajo del Pais. Somos Auto Design</p>
              </div>
          </div>
          <div className="carousel-item">
            <img src="./Img/Motos usadas.jpg" className="d-block w-100" alt="Motos usadas"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Motos 0km y usadas</h5>
                <p>El precio mas bajo del Pais. Somos Auto Design</p>
              </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        
      
    </main>
  );
};

export default ServiciosPage;
