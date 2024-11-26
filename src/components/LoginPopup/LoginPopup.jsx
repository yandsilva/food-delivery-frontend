import { useContext, useState } from "react";

import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);

    if (response.data) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data);
    }

    console.log(response.data);
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
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
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Nome completo"
              required
            />
          )}

          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Seu email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Senha"
            required
          />
        </div>
        <button type="submit">
          {currState === "Login" ? "Entrar" : "Criar conta"}
        </button>
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
