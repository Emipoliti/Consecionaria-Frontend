import React from "react";
import "../styles/components/pages/ContactoPages.css";

const ContactoPage = (props) => {
  return (
    <main className="holder">
      <div className="holder-contacto">
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
        <p>
          Tambien puede contactarse con nosotros utilizando los siguientes
          medios.
        </p>

        <ul>
          <li>Telefono: 343-5257753</li>
          <li>Email: autodesign2022@gmail.com</li>
          <li>Facebook: Auto Design 2022.</li>
          <li>Twitter: autodesign.</li>
          <li>Skype</li>
        </ul>
      </div>
    </main>
  );
};

export default ContactoPage;
