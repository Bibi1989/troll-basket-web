import React from "react";
import { useHistory } from "react-router-dom";
import CategoryIcon from "ui/CategoryIcon";

export type ProductsProps = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  location: string;
  stock: number;
};

const ProductCard: React.FC<ProductsProps> = ({
  id,
  name,
  description,
  image,
  price,
  location,
  stock,
}) => {
  const history = useHistory();

  return (
    <div className="product-card" onClick={() => history.push(`/detail/${id}`)}>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <p>{name}</p>
      <h3>{price}</h3>
      <span>MOQ {stock} (pieces)</span>
    </div>
  );
};

export default ProductCard;
