import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/components/layout/Nav.css";

const Nav = (props) => {
  return (
    <nav>
      <div>
        <ul>
          <li className="activo">
            <NavLink exact to="/">
              Home
            </NavLink>{" "}
          </li>
          <li className="activo">
            <NavLink exact to="/nosotros">
              Nosotros
            </NavLink>{" "}
          </li>
          <li className="activo">
            <NavLink exact to="/novedades">
              Novedades
            </NavLink>{" "}
          </li>
          <li className="activo">
            <NavLink exact to="/servicios">
              Servicios
            </NavLink>{" "}
          </li>
          <li className="activo">
            <NavLink exact to="/galeria">
              Galeria
            </NavLink>{" "}
          </li>
          <li className="activo">
            <NavLink exact to="/contacto">
              Contacto
            </NavLink>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
