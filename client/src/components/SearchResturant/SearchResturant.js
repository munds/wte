import React from "react";
import "./style.css"

function SearchResturant(props) {
  return (
    <form
      style={{
        backgroundColor: "white",
        width: "75%",
        position: "relative",
        margin: "0 auto",
        padding: "1.25em",
        borderRadius: "10px"
      }}
    >
      <div className="form-group">
        <label htmlFor="location">Location: </label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="location"
          type="text"
          className="form-control"
          placeholder="Location"
          id="location"
        />
        <br />
        <label htmlFor="category">Category: </label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="category"
          type="text"
          className="form-control"
          placeholder="Category"
          id="category"
        />
        <br />
        <button
          onClick={props.handleFormSubmit}
          className="search btn btn-primary blue accent-3">
          Search Restaurant
        </button>
      </div>
    </form>
  );
}

export default SearchResturant;
