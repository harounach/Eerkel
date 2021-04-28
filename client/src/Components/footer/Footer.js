import React from "react";

const Footer = (props) => {
  const classNames = props.classNames ? " " + props.classNames : "";
  return (
    <footer className={"footer" + classNames}>
      <p className="copyright-notice">Copyright Information Example</p>
    </footer>
  );
};

export default Footer;
