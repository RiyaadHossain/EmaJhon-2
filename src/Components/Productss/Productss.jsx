import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Productss.css";

const Productss = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div className="main">
      <div className="product-container">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      <div className="cart">
        <Cart />
      </div>
    </div>
  );
};

export default Productss;
