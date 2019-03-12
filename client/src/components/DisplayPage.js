import React, { Component } from "react";
import Details from "./Details";
import API from "../utils/API";
import Card from "./Card";
import Dropdown from "./Dropdown/Dropdown";

class YelpApiSearch extends Component {
  state = {
    result: [],
    location: "alameda",
    category: "italian"
  };
  result = this.state.result;
  displayResult = () => {};
  setClicked = id => {
    const result = this.state.result;
    const shuffle = result.filter(result => result.id === id);

    if (shuffle.clicked) {
      console.log(this.clicked);
    }

    result.sort((a, b) => {
      return 0.5 - Math.random();
    });
    this.setState({
      result
    });
  };

  componentDidMount() {
    this.searchRestaurants(this.state.location, this.state.category);
  }

  searchRestaurants = (location, category) => {
    console.log("searchRestaurants", location, category);
    API.search(location, category)
      .then(res => {
        this.setState({ result: res.data.businesses });
        console.log(this.state.result);
      })

      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchRestaurants(this.state.location, this.category);
  };

  render() {
    return (
      <div>
        {this.result.map(result => (
          <Card key={result.title} id={result.id}>
            <div>
              <h2>{result.heading}</h2>
            </div>
            <div>
              <h3>Name: {result.title}</h3>
              <h3>Rating: {result.rating}</h3>
              <h3>Phone: {result.phone}</h3>
            </div>
          </Card>
        ))}
        <button onClick={this.setClicked}>Shuffle Restuarants</button>

        <Details
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Dropdown />
      </div>
    );
  }
}

export default YelpApiSearch;
