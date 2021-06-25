import React from "react";
import rectangle from "assets/images/products/Rectangle1.png";

import "./style.css";

type Props = {
  id: string;
  name: string;
  price: string;
  description: string;
  image?: string;
  stock: number;
};

const Image: React.FC<Props> = ({
  id,
  name,
  price,
  stock,
  description,
  image,
}) => {
  return (
    <div className="detail-image">
      <img src={image} alt="product" />
      <div className="detail-content">
        <p>{name}</p>
        <p>{description}</p>
        <h3>{price} /Piece</h3>
      </div>
    </div>
  );
};

export default Image;
