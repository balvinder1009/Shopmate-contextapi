import { useCart } from "../context/CartContext";
import "./cartCard.css";
// eslint-disable-next-line react/prop-types
export const CartCard = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { removeFromCart } = useCart();
  const { name, price, image } = product;
  console.log(product);
  return (
    <div className="tile" key={product.id}>
      <img src={image} alt={name} className="image" />
      <p>{name}</p>
      <span>${price}</span>
      <button onClick={() => removeFromCart(product)} className="remove">
        Remove
      </button>
    </div>
  );
};
