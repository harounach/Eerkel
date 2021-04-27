import React from "react";
import "./SearchForm.scss";
import Button from "../button/Button";
import BtnIcon from "../button/BtnIcon";

const SearchForm = (props) => {
  return (
    <form className="seach-form">
      <input
        className="seach-form__input-control"
        id="search"
        type="text"
        name="search"
      />
      <Button classNames="btn--search">
        <BtnIcon icon="search" />
      </Button>
    </form>
  );
};

export default SearchForm;
