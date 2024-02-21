import { CartCard } from "../components/CartCard";
import { useCart } from "../context/CartContext";

export const Cart = () => {
  const { total, cartList } = useCart();
  console.log(total);

  return (
    <main>
      <h2>
        Cart items: {cartList.length} / ${total}
      </h2>
      {cartList.map((product) => (
        <CartCard key={product.id} product={product} />
      ))}
    </main>
  );
};
