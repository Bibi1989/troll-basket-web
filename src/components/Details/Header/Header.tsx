import React from "react";
import Title from "ui/Title";

import Icon from "ui/Icon";
import arrowLeft from "assets/images/arrowLeft.svg";
import search from "assets/images/search.svg";
import carts from "assets/images/carts.svg";

import "./style.css";
import { useHistory } from "react-router-dom";

const Header: React.FC = () => {
  const history = useHistory();
  return (
    <div className="details">
      <Icon
        icon={arrowLeft}
        style={{ borderRadius: 4 }}
        onClick={() => history.goBack()}
      />
      <div className="details-top-bar">
        <p>Details</p>
      </div>
      <div className="details-icons">
        <Icon icon={search} style={{ marginRight: 20 }} />
        <Icon icon={carts} />
      </div>
    </div>
  );
};

export default Header;
