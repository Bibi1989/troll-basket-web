import React, { CSSProperties } from "react";
import Title from "ui/Title";

import Icon from "ui/Icon";
import arrowLeft from "assets/images/arrowLeft.svg";
import search from "assets/images/search.svg";
import cartsImage from "assets/images/carts.svg";

import "./style.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

type Props = {
  showIcon?: boolean;
  title?: string;
  style?: CSSProperties;
};

const Header: React.FC<Props> = ({
  showIcon = true,
  title = "Details",
  style,
}) => {
  const history = useHistory();

  const carts = useSelector(({ products: { carts } }: any) => carts);

  const cartsLength = carts?.length;

  return (
    <div className="details" style={style}>
      <Icon
        icon={arrowLeft}
        style={{ borderRadius: 4 }}
        onClick={() => history.goBack()}
      />
      <div className="details-top-bar">
        <p>{title}</p>
      </div>
      {showIcon ? (
        <div className="details-icons">
          <Icon icon={search} style={{ marginRight: 20 }} />
          <Icon
            icon={cartsImage}
            onClick={() => history.push("/cart")}
            showBadge={true}
            badge={cartsLength}
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Header;
