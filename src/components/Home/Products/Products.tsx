import React from "react";
import { useSelector } from "react-redux";
import ProductCard, { ProductsProps } from "./Item/Card";

import "./style.css";

const Products: React.FC = () => {
  const products = useSelector(({ products: { products } }: any) => products);
  return (
    <div className="product">
      {products?.map((product: ProductsProps) => (
        <ProductCard {...product} />
      ))}
    </div>
  );
};

export default Products;
