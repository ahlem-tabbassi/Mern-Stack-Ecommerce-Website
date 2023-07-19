import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, description, price, name, id }) => {
  const truncatedDescription = description ? description.substring(0, 100) : "";

  return (
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{truncatedDescription}...</p>

        <p className="info__price">${price}</p>

        <Link to={`/product/${id}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
