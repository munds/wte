import React, { Component } from "react";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import "./styles.css";
let categories = [
  {
    value: 0,
    label: "italian"
  },
  {
    value: 1,
    label: "mexican"
  },
  {
    value: 2,
    label: "american"
  },
  { value: 3, label: "thai" },
  {
    value: 4,
    label: "chinese"
  }
];
class Dropdown extends Component {
  render() {
    return (
      <div className="container">
        <ReactMultiSelectCheckboxes
          placeholder="Food Categories"
          options={categories}
        >
          Cuisines
        </ReactMultiSelectCheckboxes>
        >
      </div>
    );
  }
}

export default Dropdown;
