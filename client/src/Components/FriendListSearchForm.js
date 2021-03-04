import "./FriendListSearchForm.scss";

import { Search } from "@material-ui/icons";

function FriendListSearchForm(props) {
  return (
    <form className="fl-search-form" action="">
      <div className="fl-input-section">
        <input
          className="fl-input-control"
          type="text"
          name="search"
          placeholder="Search"
        />
        <button className="fl-search-btn" type="submit">
          <Search />
        </button>
      </div>
    </form>
  );
}

export default FriendListSearchForm;
