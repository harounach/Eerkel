import React from "react";

const FormSection = (props) => {
  const classNames = props.classNames ? " " + props.classNames : "";
  return <div className={"form__section" + classNames}>{props.children}</div>;
};

export default FormSection;
