import React from "react";
import "./Form.scss";

const From = (props) => {
  const classNames = props.classNames ? " " + props.classNames : "";
  return <form className={"form" + classNames}>{props.children}</form>;
};

export default From;
