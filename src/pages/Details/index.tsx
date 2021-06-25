import React from "react";

import Carousel from "components/Home/Carousel";
import Categories from "components/Home/Categories";
import Products from "components/Home/Products";
import BottomNavbar from "components/BottomNavbar";

import "./style.css";
import Header from "components/Details/Header";
import Image from "components/Details/Image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { addCartItem, getProduct } from "redux/products/action";
import Review from "components/Details/Review";
import AddToCart from "components/AddToCart";

const DetailsPage = () => {
  const product = useSelector(({ products: { product } }: any) => product);

  const { id } = useParams<any>();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  const handleAddToCart = () => {
    const manipulatedProduct = {
      ...product,
      price: parseInt(product?.price.split("-")[0].trim().split(",").join("")),
    };
    dispatch(addCartItem(manipulatedProduct));
  };

  return (
    <div className="home">
      <Header />
      <Image {...product} />
      <Review />
      <AddToCart {...product} onClick={handleAddToCart} />
    </div>
  );
};

export default DetailsPage;
