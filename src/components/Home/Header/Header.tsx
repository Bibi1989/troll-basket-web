import React from "react";
import Title from "ui/Title";

import Icon from "ui/Icon";
import address from "assets/images/address.svg";
import order from "assets/images/myOrders.svg";
import cartsImage from "assets/images/carts.svg";

import "./style.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Header: React.FC = () => {
  const carts = useSelector(({ products: { carts } }: any) => carts);
  const history = useHistory();

  return (
    <div>
      <Title>
        <h1>Troll Basket</h1>
      </Title>
      <div className="top-taps">
        <div className="tab tab-1">
          <Icon icon={address} />
          <p>Lagos</p>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="border"></div>
        <div className="tab tab-2">
          <Icon icon={order} />
          <p>My Orders</p>
        </div>
        <div className="border"></div>
        <div className="tab tab-3" onClick={() => history.push("/cart")}>
          <Icon icon={cartsImage} showBadge={true} badge={carts?.length} />
          <p>Carts</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
