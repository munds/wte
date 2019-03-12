import React from "react";
import Select from "react-select";

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
const Dropdown = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-4" />
      <div className="col-md-4">
        <Select options={categories} />
      </div>
      <div className="col-md-4" />
    </div>
  </div>
);

export default Dropdown;
