import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footerDesign">
      <div className="Contacto-footer">
        <h3>CONTACTO</h3>
        <p>calle falsa 133</p>
        <p>C1435DSD | CABA</p>
      </div>
      <div className="Politicas-footer">
        <h3>POLITICAS DE PRIVACIDAD</h3>
        <p> Todos los derechos reservados para fifa y goats</p>
      </div>
      <div className="Seguinos-footer">
        <h3>SEGUINOS EN</h3>
        <li className="footerIcon">
          <Link to="#">
            <i className="icon1 bi bi-github"></i>
          </Link>
          <Link to="#">
            <i className="icon1 bi bi-twitter"></i>
          </Link>
        </li>
        <li className="footerIcon2">
          <Link to="#">
            <i className="icon1 bi bi-linkedin"></i>
          </Link>
          <Link to="#">
            <i className="icon1 bi bi-instagram"></i>
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Footer;
