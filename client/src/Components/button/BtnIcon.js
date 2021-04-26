import React from "react";

import AddIcon from "./icons/add_white_24dp.svg";
import RemoveIcon from "./icons/remove_white_24dp.svg";
import SearchIcon from "./icons/search_white_24dp.svg";
import SendIcon from "./icons/send_white_24dp.svg";

const iconsMap = {
  add: AddIcon,
  remove: RemoveIcon,
  search: SearchIcon,
  send: SendIcon,
};

const BtnIcon = (props) => {
  const iconUrl = iconsMap[props.icon];
  return <img className="btn__icon" src={iconUrl} alt="" />;
};

export default BtnIcon;
