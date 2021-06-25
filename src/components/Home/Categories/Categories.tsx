import React from "react";
import { products } from "./data/data";
import CategoryCard from "./Item/Card";

import "./style.css";

const Categories = () => {
  return (
    <div className="category">
      {products.map((product) => (
        <CategoryCard {...product} />
      ))}
    </div>
  );
};

export default Categories;
