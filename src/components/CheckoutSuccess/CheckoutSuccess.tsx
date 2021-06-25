import React from "react";

import checkout from "assets/images/checkout.svg";

import "./style.css";

const CheckoutSuccess = () => {
  return (
    <div className="checkout-screen">
      <div></div>
      <div className="checkout-content">
        <img src={checkout} alt="checkout" />
        <h3>Checkout Succesful</h3>
        <span>Your checkout is now successful.</span>
      </div>
      <button>Got It</button>
    </div>
  );
};

export default CheckoutSuccess;
