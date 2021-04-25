import React from "react";

const LinkButton = (props) => {
  return (
    <a className="btn" href={props.url}>
      {props.children}
    </a>
  );
};

export default LinkButton;
