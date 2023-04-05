import {Tooltip} from "antd";
import React from "react";

import "./styles.css";

const Product = ({product, onAddToCart}) => {
  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <div className="cardRoot">
      <img className="mediaContainer" src={product.image.url} alt="Logo" />
      <div className="cardContainer">
        <div className="tittle">{product.name}</div>
        <div className="decorativeLine" />
        <div className="priceContainer">
          <div className="price">ALL{product.price.formatted}</div>
          <Tooltip title="Shto produktin ne shporte">
            <button onClick={handleAddToCart}>Shto ne shporte</button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Product;
