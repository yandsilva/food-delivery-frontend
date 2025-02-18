import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);

  // Função para adicionar item ao carrinho

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.response);
  };

  const loadCartData = async (token) => {
    if (!token) return;

    try {
      const response = await axios.get(`${url}/api/cart`, {
        headers: { token },
      });
      setCartItems(response.data);
    } catch (error) {
      console.error("Error ao carregar carrinho", error);
    }
  };

  useEffect(() => {
    const initialize = async () => {
      await fetchFoodList();
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        await loadCartData();
      }
    };
    initialize();
  }, [token]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
