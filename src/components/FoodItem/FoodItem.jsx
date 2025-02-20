import { useContext, useEffect, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const FoodItem = ({ id, name, price, description, image }) => {
  const { url, USER_ID } = useContext(StoreContext);
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    const fetchCartItem = async () => {
      try {
        const response = await axios.get(`${url}/api/cart/getcart`, {
          params: {
            userId: USER_ID,
          },
        });

        const item = response.data.find((item) => item.foodId === id);
        if (item) {
          setQuantity(item.quantity);
        }
      } catch (error) {
        console.error("Error fetching cart item:", error);
      }
    };

    fetchCartItem();
  }, [url, id]);

  const handleAddToCart = async () => {
    try {
      const response = await axios.post(`${url}/api/cart/updated`, {
        userId: USER_ID,
        foodId: id,
        quantity: "increment",
      });
      console;

      if (response.status === 200) {
        setQuantity(response.data.quantity);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleRemoveFromCart = async () => {
    try {
      const response = await axios.post(`${url}/api/cart/updated`, {
        userId: USER_ID,
        foodId: id,
        quantity: "decrement",
      });
      if (response.status === 200) {
        setQuantity(response.data.quantity);
      }
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={url + "/images/" + image}
          alt=""
        />
        {quantity === 0 ? (
          <img
            className="add"
            onClick={handleAddToCart}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={handleRemoveFromCart}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{quantity}</p>
            <img onClick={handleAddToCart} src={assets.add_icon_green} alt="" />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">R${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
