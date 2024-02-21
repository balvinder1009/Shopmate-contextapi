import { Routes, Route } from "react-router-dom";
import { Home, Cart } from "../pages";
export const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} title="Home">
          Home
        </Route>
        <Route path="cart" element={<Cart />} title="Cart">
          Cart
        </Route>
      </Routes>
    </main>
  );
};
