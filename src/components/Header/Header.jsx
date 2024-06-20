import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Encomende aqui a sua comida preferida</h2>
        <p>
          Escolha entre um menu diversificado com uma deliciosa variedade de
          pratos artesanais com os melhores ingredientes e experiência
          culinária. Nossa missão é satisfazer seus desejos e elevar sua
          experiência gastronômica, um deliciosa refeição de cada vez
        </p>
        <button>Ver cardápio</button>
      </div>
    </div>
  );
};

export default Header;
