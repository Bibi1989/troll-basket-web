import React, { CSSProperties } from "react";

import "ui/style.css";

type Props = {
  icon: string;
  style?: CSSProperties;
  onClick?: () => void;
};

const Icon: React.FC<Props> = ({ icon, style, onClick }) => {
  return (
    <div className="ui-icon" style={style} onClick={onClick}>
      <img src={icon} alt="address" />
    </div>
  );
};

export default Icon;
