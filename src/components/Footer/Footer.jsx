import React from "react";

import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            culpa cumque accusamus ea et maiores, debitis a doloremque modi est
            recusandae dicta ut, alias eveniet odio molestias dolorem, totam
            odit.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>EMPRESA</h2>
          <ul>
            <li>Inicio</li>
            <li>Sobre nós</li>
            <li>Delivery</li>
            <li>Politicas de privacidade</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>ENTRAR EM CONTATO</h2>
          <ul>
            <li>+55(14)9999-9999</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Tomato.com - Todos os direitos reservados
      </p>
    </div>
  );
};

export default Footer;
