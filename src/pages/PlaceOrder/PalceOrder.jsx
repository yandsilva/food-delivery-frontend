import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PalceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Informação para entrega</p>
        <div className="multi-fields">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Sobrenome" />
        </div>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Rua" />
        <div className="multi-fields">
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="Estado" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Cep" />
          <input type="text" placeholder="País" />
        </div>
        <input type="text" placeholder="Telefone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Totais do carrinho</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>R${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Entrega Grátis</p>
              <p>R${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b>
                R${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button>FINALIZAR PAGAMENTO</button>
        </div>
      </div>
    </form>
  );
};

export default PalceOrder;
