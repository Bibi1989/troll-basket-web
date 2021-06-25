import React, { useState } from "react";
import Checkout from "components/Cart/Checkout";
import ModifyQuantity from "components/Cart/ModifyQuantity";
import RecentlyViewed from "components/Cart/RecentlyViewed";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/Details/Header";
import { ProductsProps } from "components/Home/Products/Item/Card";
import { deleteCartItem } from "redux/products/action";

const CartsPage = () => {
  // list of items to checkout
  const [subtotal, setSubtotal] = useState(100);
  const [total, setTotal] = useState(200);

  const dispatch = useDispatch();

  const carts = useSelector(({ products: { carts } }: any) => carts);

  // sets the list of items to checkout

  const handlePlus = () => {};

  const handleMinus = () => {};

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
      <Checkout subtotal={subtotal} total={total} />
      <RecentlyViewed />
    </div>
  );
};

export default CartsPage;
