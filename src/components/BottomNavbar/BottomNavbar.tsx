import React from "react";
import Icon from "ui/Icon";
import { menus } from "./menu";

import "./style.css";

export type MenuType = {
  id: number;
  name: string;
  icon: string;
  active: boolean;
};

const style = {
  backgroundColor: "transparent",
};

const BottomNavbar = () => {
  return (
    <div className="nav-tabs">
      {menus?.map((menu: MenuType) => (
        <div className="tab">
          <Icon icon={menu.icon} style={style} />
          <span>{menu.name}</span>
        </div>
      ))}
    </div>
  );
};

export default BottomNavbar;
