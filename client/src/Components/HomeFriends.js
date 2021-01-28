import "./HomeFriends.scss";
import HomeFriendsItem from "./HomeFriendsItem";

function HomeFriends(props) {
  return (
    <ul className="home-fl__friends">
      <HomeFriendsItem profileName="Clarke" />
      <HomeFriendsItem profileName="Bellamy" />
      <HomeFriendsItem profileName="Murphy" />
      <HomeFriendsItem profileName="Octavia" />
      <HomeFriendsItem profileName="Monty" />
    </ul>
  );
}

export default HomeFriends;
