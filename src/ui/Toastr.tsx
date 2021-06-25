import React from "react";

type Props = {
  message: string;
  color: string;
  borderColor: string;
  onClick?: any;
};

const Toastr: React.FC<Props> = ({ message, color, borderColor, onClick }) => {
  return (
    <>
      {
        <div
          onClick={onClick}
          style={{ backgroundColor: color, border: `1px solid ${borderColor}` }}
        >
          {message}
        </div>
      }
    </>
  );
};

export default Toastr;
