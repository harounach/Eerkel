import "./FriendListItem.scss";

import { AddCircleOutline, RemoveCircleOutline } from "@material-ui/icons";

function FriendListItem(props) {
  const btnIcon =
    props.isFriend === "yes" ? <RemoveCircleOutline /> : <AddCircleOutline />;

  let btnClassList = "fl-item__control-btn";

  if (props.isFriend === "yes") {
    btnClassList += " fl-item__control-btn--remove";
  } else {
    btnClassList += " fl-item__control-btn--add";
  }

  return (
    <li className="fl-item">
      <div className="fl-item__section">
        <div className="fl-item__avatar">
          {props.profileName.charAt(0).toUpperCase()}
        </div>
        <h3 className="fl-item__name">{props.profileName}</h3>
      </div>

      <button className={btnClassList}>{btnIcon}</button>
    </li>
  );
}

export default FriendListItem;
