import React, { useState } from "react";
import Checkout from "components/Cart/Checkout";
import ModifyQuantity from "components/Cart/ModifyQuantity";
import RecentlyViewed from "components/Cart/RecentlyViewed";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/Details/Header";
import { ProductsProps } from "components/Home/Products/Item/Card";
import { decrement, deleteCartItem, increment } from "redux/products/action";

const CartsPage = () => {
  const dispatch = useDispatch();

  const carts = useSelector(({ products: { carts } }: any) => carts);

  const total = carts?.reduce(
    (acc: number, cart: any) => (acc += cart.price * cart.quantity),
    0
  );

  const handlePlus = (id: string) => {
    dispatch(increment(id));
  };

  const handleMinus = (id: string) => {
    dispatch(decrement(id));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteCartItem(id));
  };

  return (
    <div className="cart-comp">
      <Header showIcon={false} title="Carts" style={{ marginBottom: 0 }} />
      <div className="main-app">
        {carts?.map((item: any, index: number) => (
          <ModifyQuantity
            key={index}
            {...item}
            // quantity={item.quantity}
            handleMinus={handleMinus}
            handlePlus={handlePlus}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <Checkout subtotal={total} total={total} />
      <RecentlyViewed />
    </div>
  );
};

export default CartsPage;
