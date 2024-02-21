import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
// eslint-disable-next-line react/prop-types
import "./productCard.css";
// eslint-disable-next-line react/prop-types
export const ProductCard = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { cartList, addToCart, removeFromCart } = useCart();
  const { id, name, image, price } = product;
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productIsInCart = cartList.find((cartItem) => cartItem.id === id);

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id]);
  return (
    <div className="card">
      <img src={image} alt={name} className="thumbnail" />
      <h4>{name}</h4>
      <div className="actionBtn">
        <span>${price}</span>
        {isInCart ? (
          <button className="remove" onClick={() => removeFromCart(product)}>
            Remove
          </button>
        ) : (
          <button className="add" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
