import React, { useState } from "react";
import { PropTypes } from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const cleanCategory = inputValue.trim();
    if (cleanCategory.length <= 1) return;
    setInputValue("");
    onNewCategory(cleanCategory);
  };
  return (
    <form aria-label="form" onSubmit={onSubmit}>
      <input
        type="text"
        value={inputValue}
        placeholder="shear gifs"
        onChange={onInputChange}
      />
    </form>
  );
};
AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
