import React from "react";

const Hero = (props) => {
  const classNames = props.classNames ? " " + props.classNames : "";
  return <img className={"hero" + classNames} src={props.src} alt="" />;
};

export default Hero;
