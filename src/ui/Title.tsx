import React from "react";

type Props = {
  children: React.ReactNode;
};

const Title: React.FC<Props> = ({ children }) => {
  return <div className='ui-title'>{children}</div>;
};

export default Title;
