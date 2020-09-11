import React from "react";
import { uniqueTags } from "../gradients";

const GradientSelect = (props) => {
  const { filter, setFilter } = props;
  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div class="input-group mb-3">
      <label class="input-group-text" for="select">
        Filtrer par tags
      </label>
      <select
        className="form-select"
        id="select"
        value={filter}
        onChange={handleSelectChange}
      >
        <option value="tous">Tous</option>
        {uniqueTags.map((el) => {
          return <option value={el}>{el}</option>;
        })}
      </select>
    </div>
  );
};
export default GradientSelect;
