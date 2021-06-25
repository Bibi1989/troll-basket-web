import React from "react";
import "./styles/ModifyQuantity.css";
import DeleteIcon from "assets/images/delete.svg";
import PlusIcon from "assets/images/plus.svg";
import MinusIcon from "assets/images/minus.svg";
import { formatPrice } from "utils/formatPrice";

type Props = {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity?: string;
  handleMinus: () => void;
  handlePlus: () => void;
  handleDelete: (id: string) => void;
};

const ModifyQuantity: React.FC<Props> = ({
  id,
  image,
  name,
  price,
  quantity,
  handleMinus,
  handlePlus,
  handleDelete,
}) => {
  return (
    <div className="modify-quantity-div cart-card">
      <div className="modify-quantity-header">
        <img src={image} alt="Image here" />
        <div className="modify-quantity-content">
          <p className="modify-quantity-name">{name}</p>
          <p className="modify-quantity-amount">{formatPrice(price)}</p>
        </div>
      </div>
      <div className="modify-quantity-footer">
        <div
          className="modify-quantity-delete"
          onClick={() => handleDelete(id)}
        >
          <img src={DeleteIcon} alt="Delete Icon" />
          <span>Delete</span>
        </div>
        <div className="modify-quantity-quantity">
          <img
            onClick={handleMinus}
            className="quantity"
            src={MinusIcon}
            alt="Minus icon"
          />
          <span className="quantity">{quantity}</span>
          <img
            onClick={handlePlus}
            className="quantity"
            src={PlusIcon}
            alt="Plus icon"
          />
        </div>
      </div>
    </div>
  );
};

export default ModifyQuantity;
