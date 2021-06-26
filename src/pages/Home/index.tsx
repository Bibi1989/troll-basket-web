import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import { searchItem } from "redux/products/action";
import Header from "components/Home/Header";
import SearchBar from "components/Home/SearchBar";
import Carousel from "components/Home/Carousel";
import Categories from "components/Home/Categories";
import Products from "components/Home/Products";
import BottomNavbar from "components/BottomNavbar";

import "./style.css";

const HomePage = () => {

  const dispatch = useDispatch();

  const handleInput = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchItem(value));
  };

  return (
    <div className="home">
      <div className="home-content">
        <Header />
        <SearchBar onChange={handleInput} />
        <Carousel />
        <Categories />
        <Products />
      </div>
      <div className="bottom-nav">
        <BottomNavbar />
      </div>
    </div>
  );
};

export default HomePage;
