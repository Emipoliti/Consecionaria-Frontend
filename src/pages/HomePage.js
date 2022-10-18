import React from "react";
import "../styles/components/pages/HomePages.css";

const HomePage = (props) => {
  return (
    <main className="holder">
      <div className="homeimg">
        <img src="./Img/Consecionaria.webp" alt="Concecionaria" />
      </div>
      <div className="columnas">
        <div className="bienvenidos">
          <h2>Bienvenidos.</h2>
          <p>
            {" "}
            Desde nuestros inicios fuimos testigos y protagonistas de la
            evolución de la industria automotriz argentina y pioneros en la
            venta de autos en la Ciudad de Entre Rios. Hoy, a más de 80 años de
            nuestro nacimiento, nos transformamos en el grupo de concesionarios
            más importante del país forjando nuestro liderazgo en la industria.
          </p>
        </div>

        <section className="testimonios">
          <h2>Testimonios:</h2>
          <div>
            <span className="cita">Simplemente Excelente</span>
            <p className="autor">Juan Perez</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
