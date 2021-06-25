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
import { getProduct } from "redux/products/action";
import Review from "components/Details/Review";

const DetailsPage = () => {
  const product = useSelector(({ products: { product } }: any) => product);

  const { id } = useParams<any>();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  console.log(product);

  return (
    <div className="home">
      <Header />
      <Image {...product} />
      <Review />
    </div>
  );
};

export default DetailsPage;
