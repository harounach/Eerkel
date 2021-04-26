import React from "react";

const ButtonWrapper = (props) => {
  const classNames = props.classNames ? " " + props.classNames : "";
  return <div className={"btn-wrapper" + classNames}>{props.children}</div>;
};

export default ButtonWrapper;
