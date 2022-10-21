import React from "react";
import "../styles/components/pages/ContactoPages.css";

const ContactoPage = (props) => {
  return (
    <main className="holder-contacto">
      <div id="container">
       <div className="contacto-rapido">
        <h2>Contacto Rapido:</h2>

        <form action="" method="" className="formulario">
          <p>
            <label for="nombre">Nombre</label>
            <input type="text" name=""></input>
          </p>
          <p>
            <label for="email">Email</label>
            <input type="text" name=""></input>
          </p>
          <p>
            <label for="telefono">Telefono</label>
            <input type="text" name=""></input>
          </p>
          <p>
            <label for="mensaje">Mensaje</label>
            <textarea name=""></textarea>
          </p>
          <p className="acciones">
            <input type="submit" value="ENVIAR"></input>
          </p>
        </form>
      </div>
      <div className="datos">
        <h2>Otras vias de comunicacion:</h2>
        <section className="lista">
        <ul>
          <li> <img src="./Img/wsp.webp" ></img></li>
          <li><img src="./Img/fb.jpg" ></img> </li>
          <li><img src="./Img/ig.webp" ></img></li>
          <li><img src="./Img/gmail.png" ></img></li>
          <li><img src="./Img/skype.png" ></img></li>
        </ul>
        </section>
       
      </div>
      </div>
    
    </main>
  );
};

export default ContactoPage;
