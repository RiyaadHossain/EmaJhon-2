import React from "react";
import "./Product.css";
import { BsFillCartFill } from 'react-icons/bs';

const Product = ({ product }) => {
  const { img, name, price, ratings, seller } = product;
  console.log(product);
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <div className="card-body">
        <div>
          <h3>{name}</h3>
          <p>Price: ${price}</p>
        </div>
        <div className="cart-info">
          <small>
            <strong>Manufacture:</strong> {seller}
          </small>
          <small>
            <strong>Rating:</strong> {ratings}
          </small>
        </div>
      </div>
      <button className="btn">Add to Cart <BsFillCartFill/></button>
    </div>
  );
};

export default Product;
