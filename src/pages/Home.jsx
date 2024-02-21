import { ProductCard } from "../components/ProductCard";
import "./home.css";
export const Home = () => {
  const products = [
    {
      id: 1,
      name: "SONY WH-CH720N",
      image: "/assets/images/headphone1.jpg",
      price: 279,
    },
    {
      id: 2,
      name: "boAt Rockerz 551",
      image: "/assets/images/headphone2.jpg",
      price: 167,
    },
    {
      id: 3,
      name: "SONY WH-CH520",
      image: "/assets/images/headphone3.jpg",
      price: 292,
    },
    {
      id: 4,
      name: "JBL Tune 760NC",
      image: "/assets/images/headphone4.jpg",
      price: 175,
    },
    {
      id: 5,
      name: "SONY WH-CH720N",
      image: "/assets/images/headphone5.jpg",
      price: 137,
    },
    {
      id: 6,
      name: "SONY WH-XB910N",
      image: "/assets/images/headphone6.jpg",
      price: 174,
    },
  ];
  return (
    <section className="homeContainer">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};
