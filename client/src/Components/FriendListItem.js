import "./FriendListItem.scss";

function FriendListItem(props) {
  return (
    <li className="fl-item">
      <div className="fl-item__section">
        <div className="fl-item__avatar">
          {props.profileName.charAt(0).toUpperCase()}
        </div>
        <h3 className="fl-item__name">{props.profileName}</h3>
      </div>

      <button className="fl-item__control-btn">+</button>
    </li>
  );
}

export default FriendListItem;
