import React from "react";

import "./style.css";

type Props = {
  visible: boolean;
  message: string;
  color: string;
  backgroundColor?: string;
  borderColor: string;
  onClose?: () => void;
};

const Toastr: React.FC<Props> = ({
  message,
  color,
  backgroundColor,
  borderColor,
  onClose,
  visible,
}) => {
  return (
    <>
      {
        <div
          className={visible ? "ui-show" : "ui-hide"}
          style={{
            display: visible ? "flex" : "none",
            backgroundColor,
            border: `1px solid ${borderColor}`,
            color,
            justifyContent: "space-between",
            padding: 10,
            position: "absolute",
            top: 60,
            right: 0,
            left: 0,
            zIndex: 10,
          }}
        >
          <span>{message}</span>
          <span style={{ fontSize: 18, cursor: "pointer" }} onClick={onClose}>
            &times;
          </span>
        </div>
      }
    </>
  );
};

export default Toastr;
