import React from "react";

import "ui/style.css";

type Props = {
  icon: string;
  color?: string;
};

const CategoryIcon: React.FC<Props> = ({ color, icon }) => {
  return (
    <div className="ui-category-icon" style={{ backgroundColor: color }}>
      <img src={icon} alt="address" />
    </div>
  );
};

export default CategoryIcon;
