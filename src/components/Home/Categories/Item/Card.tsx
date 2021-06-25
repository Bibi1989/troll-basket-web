import React from "react";
import CategoryIcon from "ui/CategoryIcon";

type Props = {
  text: string;
  color: string;
  icon: string;
};

const CategoryCard: React.FC<Props> = ({ text, icon, color }) => {
  return (
    <div className="category-card">
      <CategoryIcon icon={icon} color={color} />
      <p>{text}</p>
    </div>
  );
};

export default CategoryCard;
