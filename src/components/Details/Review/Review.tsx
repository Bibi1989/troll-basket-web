import React from "react";
import Icon from "ui/Icon";

import arrowRight from "assets/images/arrowRight.svg";
import avatar from "assets/images/avatar.svg";
import Button from "ui/Button";

import "./style.css";

const Review = () => {
  const handleAddToCart = () => {};
  return (
    <div>
      <div className="product-desc">
        <p>Product Description</p>
        <Icon icon={arrowRight} style={{ backgroundColor: "transparent" }} />
      </div>
      <div className="review-title">
        <p>Product Description</p>
        <span>View all</span>
      </div>

      <div className="review-desc">
        This is the best product I have used in a long while and the size fits
        perfectly and I love the colors!!!!!
      </div>

      <div className="review-user">
        <img src={avatar} alt="avatar" />
        <span>Segun Arinze</span>
      </div>

      <div className="review-btn">
        <button style={{ width: "100%" }}>Add to cart</button>
        <button style={{ width: "100%" }}>Wishlist</button>
      </div>
    </div>
  );
};

export default Review;
