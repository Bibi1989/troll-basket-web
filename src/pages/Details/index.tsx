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
import Toastr from "ui/Toastr";
import { useState } from "react";

const DetailsPage = () => {
  const product = useSelector(({ products: { product } }: any) => product);

  const [visible, setVisible] = useState(false);

  const { id } = useParams<any>();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  const handleAddToCart = () => {
    const manipulatedProduct = {
      ...product,
      price: parseInt(product?.price.split("-")[0].trim().split(",").join("")),
      quantity: 1,
    };
    dispatch(addCartItem(manipulatedProduct));
    setVisible(true);
  };

  return (
    <div className="home">
      <Toastr
        visible={visible}
        backgroundColor="#D3FDE9"
        color="#023B20"
        borderColor="#93ECC1"
        onClose={() => setVisible(false)}
        message="Item added to cart successfully"
      />
      <Header />
      <Image {...product} />
      <Review />
      <AddToCart {...product} onClick={handleAddToCart} />
    </div>
  );
};

export default DetailsPage;
