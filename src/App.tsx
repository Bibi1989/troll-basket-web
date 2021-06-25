import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import HomePage from "pages/Home";
import { getProducts } from "redux/products/action";

import "./App.css";
import DetailsPage from "pages/Details";
import CartsPage from "pages/Carts";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/detail/:id" component={DetailsPage} />
          <Route path="/cart" component={CartsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
