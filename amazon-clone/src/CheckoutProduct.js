import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [state, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkout__product">
      <img src={image} className="checkout__product__image" />
      <div className="checkout__product__info">
        <p className="checkout__product__title">{title}</p>
        <p className="checkout__product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout__product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove item</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
