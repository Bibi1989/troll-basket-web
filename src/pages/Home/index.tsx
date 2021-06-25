import React from "react";
import Header from "components/Home/Header";
import SearchBar from "components/Home/SearchBar";

import Carousel from "components/Home/Carousel";
import Categories from "components/Home/Categories";
import Products from "components/Home/Products";
import BottomNavbar from "components/BottomNavbar";

import "./style.css";

const HomePage = () => {
  return (
    <div className="home">
      <div className="home-content">
        <Header />
        <SearchBar />
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
