import React, { CSSProperties } from "react";

type Props = {
  label: string;
  style?: CSSProperties;
};

const Button: React.FC<Props> = ({ label, style }) => {
  return (
    <div>
      <button style={style} className='ui-btn'>{label}</button>
    </div>
  );
};

export default Button;
