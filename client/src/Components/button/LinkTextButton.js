import React from "react";

const LinkTextButton = (props) => {
  return (
    <a className="goto-auth__link" href={props.url}>
      {props.children}
    </a>
  );
};

export default LinkTextButton;
