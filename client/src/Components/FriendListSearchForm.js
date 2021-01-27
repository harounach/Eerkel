import "./FriendListSearchForm.scss";

function FriendListSearchForm(props) {
  return (
    <form className="fl-search-form" action="">
      <div className="fl-input-section">
        <input className="fl-input-control" type="text" name="search" />
        <button className="fl-search-btn" type="submit">
          S
        </button>
      </div>
    </form>
  );
}

export default FriendListSearchForm;
