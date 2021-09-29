import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const constentStyle = {
    color: color,
    fontSize: "20px"
  };

  return <p style={constentStyle}>{children}</p>;
};
