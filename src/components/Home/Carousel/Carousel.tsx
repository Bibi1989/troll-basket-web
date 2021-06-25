import React from "react";
import Button from "ui/Button";

import "./style.css";

const style = {
  backgroundColor: "#227eff",
  color: "white",
};

const Carousel = () => {
  return (
    <div className="container">
      <div className="card">
        <p className="text">
          Having any <span>issues</span> with your order?
        </p>
        <Button style={style} label="Contact Us" />
      </div>
    </div>
  );
};

export default Carousel;
