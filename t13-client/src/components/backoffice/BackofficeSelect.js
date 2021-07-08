import React from "react";
import slugify from "react-slugify";
import { useHistory } from "react-router-dom";

const BackofficeSelect = ({ optionsSelect }) => {
  let history = useHistory();

  function handleChange(value) {
    history.push(`/backoffice/${slugify(value)}`);
  }
  return (
    <select
      className='navbar__select'
      onChange={(e) => handleChange(e.target.value)}
    >
      <option value=''>Navigation...</option>
      {optionsSelect.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default BackofficeSelect;
