import {memo} from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footerDesign">
      <div className="Contacto-footer">
        <h3>CONTACTO</h3>
        <p>Bradsen 805</p>
        <p>C1435DSD | CABA</p>
      </div>
      <div className="Politicas-footer">
        <h3>POLITICAS DE PRIVACIDAD</h3>
        <p> Todos los derechos reservados para fifa y goats</p>
      </div>
      <div className="Seguinos-footer">
        <h3>SEGUINOS EN</h3>
        <li className="footerIcon">
        <a href="https://www.github.com/javi1227" target={"_blank"}>
            <i className="icon1 bi bi-github"></i>
        </a>
          <a href="https://twitter.com/coderhouse" target={"_blank"}>
            <i className="icon1 bi bi-twitter"></i>
          </a>
        </li>
        <li className="footerIcon2">
        <a href="https://www.linkedin.com/in/javiergarcia1227/" target={"_blank"}>
            <i className="icon1 bi bi-linkedin"></i>
        </a>
          <a href="https://www.instagram.com/coderhouse/" target={"_blank"}>
            <i className="icon1 bi bi-instagram"></i>
          </a>
        </li>
      </div>
    </div>
  );
};

export default memo (Footer);
