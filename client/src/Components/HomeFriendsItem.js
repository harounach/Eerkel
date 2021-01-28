import Home from "../Pages/Home/Home";
import "./HomeFriendsItem.scss";

function HomeFriendsItem(props) {
  return (
    <li className="home-fl-item">
      <div className="home-fl-item__avatar-status">
        <div className="home-fl-item__avatar"></div>
        <span classNaem="home-fl-item__status"></span>
      </div>

      <h4 className="home-fl-item__name">{props.profileName}</h4>
    </li>
  );
}

export default HomeFriendsItem;
