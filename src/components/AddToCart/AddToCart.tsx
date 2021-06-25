import React from "react";
import { useSelector } from "react-redux";

import "./style.css";

type Props = {
  id: string;
  name: string;
  price: string;
  description: string;
  image?: string;
  stock: number;
  onClick?: () => void;
};

const AddToCart: React.FC<Props> = (props) => {
  const isInCart = useSelector(({ products: { isInCart } }: any) => isInCart);
  return (
    <div className="review-btn">
      <button
        disabled={isInCart}
        style={{ width: "100%", backgroundColor: isInCart ? "#dddddd" : "" }}
        onClick={props?.onClick}
      >
        Add to cart
      </button>
      <button style={{ width: "100%" }}>Wishlist</button>
    </div>
  );
};

export default AddToCart;
