import { Link, NavLink } from "react-router-dom";
import logo from "../assets/sample_logo.png";
import "./header.css";
import { useCart } from "../context/CartContext";
export const Header = () => {
  const { cartList } = useCart();
  return (
    <header>
      <Link style={{ textDecoration: "none" }} className="logoCol" to="/">
        <img src={logo} alt="logo" className="logo" />
        <h4>Shopmate</h4>
      </Link>
      <nav className="navigation">
        <NavLink style={{ textDecoration: "none" }} className="home" to="/">
          Home
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/cart">
          Cart
        </NavLink>
      </nav>

      <div className="cartItems">
        <h4>Cart:</h4>
        <span>{cartList.length}</span>
      </div>
    </header>
  );
};
