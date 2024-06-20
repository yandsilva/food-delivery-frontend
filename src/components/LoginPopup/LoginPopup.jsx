import React, { useState } from "react";

import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Cadastro");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Nome completo" required />
          )}

          <input type="email" placeholder="Seu email" required />
          <input type="password" placeholder="Senha" required />
        </div>
        <button>{currState === "Cadastro" ? "Criar conta" : "Entrar"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            Ao continuar, concordo com os termos de uso e políticas de
            privacidade
          </p>
        </div>
        {currState === "Login" ? (
          <p>
            Criar uma nova conta?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Clique aqui</span>
          </p>
        ) : (
          <p>
            Já tem uma conta?{" "}
            <span onClick={() => setCurrState("Login")}>Entre aqui</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
