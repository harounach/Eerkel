import React from "react";

const Button = (props) => {
  const classNames = props.classNames ? " " + props.classNames : "";
  return <button className={"btn" + classNames}>{props.children}</button>;
};

export default Button;
