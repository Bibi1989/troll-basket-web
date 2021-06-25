import React, { CSSProperties } from "react";

import "ui/style.css";

type Props = {
  icon: string;
  style?: CSSProperties;
  onClick?: () => void;
  badge?: number;
  showBadge?: boolean;
};

const Icon: React.FC<Props> = ({ icon, style, onClick, badge, showBadge }) => {
  return (
    <div className="ui-icon" style={style} onClick={onClick}>
      <img src={icon} alt="address" />
      {showBadge && <div className="ui-badge">{badge}</div>}
    </div>
  );
};

export default Icon;
