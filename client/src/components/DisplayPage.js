import React, { Component } from "react";
import Slot from "react-slot-machine";
import Select from "react-select";
import Details from "./Details";
import API from "../utils/API";
import "./style.css";

const options = [
	{ value: 'acaibowls', label: 'Acai Bowls' },
	{ value: 'afghani', label: 'Afghan' },
	{ value: 'african', label: 'African' },
	{ value: 'newamerican', label: 'American (New)' },
	{ value: 'tradamerican', label: 'American (Traditional)' },
	{ value: 'arabian', label: 'Arabian' },
	{ value: 'argentine', label: 'Argentine' },
	{ value: 'armenian', label: 'Armenian' },
	{ value: 'asianfusion', label: 'Asian Fusion' },
	{ value: 'australian', label: 'Australian' },
	{ value: 'austrian', label: 'Austrian' },
	{ value: 'bagels', label: 'Bagels' },
	{ value: 'bakeries', label: 'Bakeries' },
	{ value: 'bangladeshi', label: 'Bangladeshi' },
	{ value: 'bbq', label: 'Barbeque' },
	{ value: 'basque', label: 'Basque' },
	{ value: 'beer_and_wine', label: 'Beer, Wine & Spirits' },
	{ value: 'belgian', label: 'Belgian' },
	{ value: 'brasseries', label: 'Brasseries' },
	{ value: 'brazilian', label: 'Brazilian' },
	{ value: 'breakfast_brunch', label: 'Breakfast & Brunch' },
	{ value: 'breweries', label: 'Breweries' },
	{ value: 'brewpubs', label: 'Brewpubs' },
	{ value: 'british', label: 'British' },
	{ value: 'bubbletea', label: 'Bubble Tea' },
	{ value: 'buffets', label: 'Buffets' },
	{ value: 'bulgarian', label: 'Bulgarian' },
	{ value: 'burgers', label: 'Burgers' },
	{ value: 'burmese', label: 'Burmese' },
	{ value: 'cafes', label: 'Cafes' },
	{ value: 'cafeteria', label: 'Cafeteria' },
	{ value: 'cajun', label: 'Cajun & Creole' },
	{ value: 'calabrian', label: 'Calabrian' },
	{ value: 'cambodian', label: 'Cambodian' },
	{ value: 'cantonese', label: 'Cantonese' },
	{ value: 'caribbean', label: 'Caribbean' },
	{ value: 'catalan', label: 'Catalan' },
	{ value: 'cheesesteaks', label: 'Cheesesteaks' },
	{ value: 'chickenshop', label: 'Chicken Shop' },
	{ value: 'chicken_wings', label: 'Chicken Wings' },
	{ value: 'chinese', label: 'Chinese' },
	{ value: 'cideries', label: 'Cideries' },
	{ value: 'coffee', label: 'Coffee & Tea' },
	{ value: 'colombian', label: 'Colombian' },
	{ value: 'comfortfood', label: 'Comfort Food' },
	{ value: 'conveyorsushi', label: 'Conveyor Belt Sushi' },
	{ value: 'creperies', label: 'Creperies' },
	{ value: 'cuban', label: 'Cuban' },
	{ value: 'czech', label: 'Czech' },
	{ value: 'delis', label: 'Delis' },
	{ value: 'diners', label: 'Diners' },
	{ value: 'dinnertheater', label: 'Dinner Theater' },
	{ value: 'desserts', label: 'Desserts' },
	{ value: 'dimsum', label: 'Dim Sum' },
	{ value: 'donuts', label: 'Donuts' },
	{ value: 'dominican', label: 'Dominican' },
	{ value: 'egyptian', label: 'Egyptian' },
	{ value: 'eritrean', label: 'Eritrean' },
	{ value: 'ethiopian', label: 'Ethiopian' },
	{ value: 'falafel', label: 'Falafel' },
	{ value: 'hotdogs', label: 'Fast Food' },
	{ value: 'filipino', label: 'Filipino' },
	{ value: 'fishnchips', label: 'Fish & Chips' },
	{ value: 'fondue', label: 'Fondue' },
	{ value: 'food_court', label: 'Food Court' },
	{ value: 'foodstands', label: 'Food Stands' },
	{ value: 'foodtrucks', label: 'Food Trucks' },
	{ value: 'french', label: 'French' },
	{ value: 'gamemeat', label: 'Game Meat' },
	{ value: 'gastropubs', label: 'Gastropubs' },
	{ value: 'gelato', label: 'Gelato' },
	{ value: 'georgian', label: 'Georgian' },
	{ value: 'german', label: 'German' },
	{ value: 'gluten_free', label: 'Gluten-Free' },
	{ value: 'greek', label: 'Greek' },
	{ value: 'guamanian', label: 'Guamanian' },
	{ value: 'hainan', label: 'Hainan' },
	{ value: 'haitian', label: 'Haitian' },
	{ value: 'halal', label: 'Halal' },
	{ value: 'hawaiian', label: 'Hawaiian' },
	{ value: 'himalayan', label: 'Himalayan & Nepalese' },
	{ value: 'honduran', label: 'Honduran' },
	{ value: 'hkcafe', label: 'Hong Kong Style Cafe' },
	{ value: 'hotdog', label: 'Hot Dogs' },
	{ value: 'hotpot', label: 'Hot Pot' },
	{ value: 'hungarian', label: 'Hungarian' },
	{ value: 'iberian', label: 'Iberian' },
	{ value: 'icecream', label: 'Ice Cream & Frozen Yogurt' },
	{ value: 'indpak', label: 'Indian' },
	{ value: 'indonesian', label: 'Indonesian' },
	{ value: 'irish', label: 'Irish' },
	{ value: 'italian', label: 'Italian' },
	{ value: 'izakaya', label: 'Izakaya' },
	{ value: 'japanese', label: 'Japanese' },
	{ value: 'juicebars', label: 'Juice Bars & Smoothies' },
	{ value: 'kebab', label: 'Kebab' },
	{ value: 'korean', label: 'Korean' },
	{ value: 'kosher', label: 'Kosher' },
	{ value: 'laotian', label: 'Laotian' },
	{ value: 'latin', label: 'Latin American' },
	{ value: 'lebanese', label: 'Lebanese' },
	{ value: 'malaysian', label: 'Malaysian' },
	{ value: 'mauritius', label: 'Mauritius' },
	{ value: 'mediterranean', label: 'Mediterranean' },
	{ value: 'mexican', label: 'Mexican' },
	{ value: 'mideastern', label: 'Middle Eastern' },
	{ value: 'modern_european', label: 'Modern European' },
	{ value: 'mongolian', label: 'Mongolian' },
	{ value: 'moroccan', label: 'Moroccan' },
	{ value: 'newmexican', label: 'New Mexican' },
	{ value: 'nicaraguan', label: 'Nicaraguan' },
	{ value: 'noodles', label: 'Noodles' },
	{ value: 'pakistani', label: 'Pakistani' },
	{ value: 'panasian', label: 'Pan Asian' },
	{ value: 'pancakes', label: 'Pancakes' },
	{ value: 'persian', label: 'Persian & Iranian' },
	{ value: 'peruvian', label: 'Peruvian' },
  { value: 'pizza', label: 'Pizza' },
	{ value: 'poke', label: 'Poke' },
	{ value: 'polish', label: 'Polish' },
	{ value: 'polynesian', label: 'Polynesian' },
	{ value: 'popuprestaurants', label: 'Pop-Up Restaurants' },
	{ value: 'portuguese', label: 'Portuguese' },
	{ value: 'poutineries', label: 'Poutineries' },
	{ value: 'pretzels', label: 'Pretzels' },
	{ value: 'puertorican', label: 'Puerto Rican' },
	{ value: 'ramen', label: 'Ramen' },
	{ value: 'raw_food', label: 'Raw Food' },
	{ value: 'reunion', label: 'Reunion' },
	{ value: 'russian', label: 'Russian' },
	{ value: 'salad', label: 'Salad' },
	{ value: 'salvadoran', label: 'Salvadoran' },
	{ value: 'sandwiches', label: 'Sandwiches' },
	{ value: 'sardinian', label: 'Sardinian' },
	{ value: 'scandinavian', label: 'Scandinavian' },
	{ value: 'scottish', label: 'Scottish' },
	{ value: 'seafood', label: 'Seafood' },
	{ value: 'senegalese', label: 'Senegalese' },
	{ value: 'shanghainese', label: 'Shanghainese' },
	{ value: 'sicilian', label: 'Sicilian' },
	{ value: 'singaporean', label: 'Singaporean' },
	{ value: 'slovakian', label: 'Slovakian' },
	{ value: 'smokehouse', label: 'Smokehouse' },
	{ value: 'somali', label: 'Somali' },
	{ value: 'soulfood', label: 'Soul Food' },
	{ value: 'soup', label: 'Soup' },
	{ value: 'southafrican', label: 'South African' },
	{ value: 'southern', label: 'Southern' },
	{ value: 'spanish', label: 'Spanish' },
	{ value: 'srilankan', label: 'Sri Lankan' },
	{ value: 'steak', label: 'Steakhouses' },
	{ value: 'streetvendors', label: 'Street Vendors' },
	{ value: 'supperclubs', label: 'Supper Clubs' },
	{ value: 'sushi', label: 'Sushi' },
	{ value: 'syrian', label: 'Syrian' },
	{ value: 'szechuan', label: 'Szechuan' },
	{ value: 'tacos', label: 'Tacos' },
	{ value: 'taiwanese', label: 'Taiwanese' },
	{ value: 'tapas', label: 'Tapas Bars' },
	{ value: 'tea', label: 'Tea Rooms' },
	{ value: 'teppanyaki', label: 'Teppanyaki' },
	{ value: 'tex-mex', label: 'Tex-Mex' },
	{ value: 'thai', label: 'Thai' },
	{ value: 'themedcafes', label: 'Themed Cafes' },
	{ value: 'trinidadian', label: 'Trinidadian' },
	{ value: 'turkish', label: 'Turkish' },
	{ value: 'tuscan', label: 'Tuscan' },
	{ value: 'ukrainian', label: 'Ukrainian' },
	{ value: 'uzbek', label: 'Uzbek' },
	{ value: 'vegan', label: 'Vegan' },
	{ value: 'vegetarian', label: 'Vegetarian' },
	{ value: 'venezuelan', label: 'Venezuelan' },
	{ value: 'vietnamese', label: 'Vietnamese' },
	{ value: 'waffles', label: 'Waffles' },
	{ value: 'wineries', label: 'Wineries' },
	{ value: 'winetastingroom', label: 'Wine Tasting Room' },
	{ value: 'wraps', label: 'Wraps' }
];

class YelpApiSearch extends Component {
  state = {
    result: [],
    location: "alameda",
    category: "italian",
    target: 0,
    times: 6,
    duration: 4000,
		turn: false,
		selectedOption: null
  };
	
	displayResult = (result, ind) => 
	(result[ind] ? 
		(
		<p>
			{result[ind].display_phone}
			<br />
			Price: {result[ind].price}
			<br />
			Rating: {result[ind].rating}
		</p>
		) : (
		<p>
			<br />
			<br />
			<br />
		</p>
		)
	)
	
  setClicked = () => {
    this.setState({
      target: Math.floor(Math.random() * this.state.result.length),
      turn: true
    });
    setTimeout(
      function() {
        this.setState({ turn: false });
      }.bind(this),
      1000
    );
  };

  componentDidMount() {
    this.searchRestaurants(this.state.location, this.state.category);
  }

  searchRestaurants = (location, category) => {
    // console.log("searchRestaurants", location, category);
    API.search(location, category)
      .then(res => {
        this.setState({ result: res.data.businesses });
        // console.log(this.state.result);
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
		let categories = "";
		this.state.selectedOption.map(i => categories += i.value + ",");
		categories = categories.replace(/,$/, "");
		this.searchRestaurants(this.state.location, categories);
    setTimeout(
      function() {
        this.setClicked();
      }.bind(this),
      3000
    );
	};
	
	handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // console.log(`Option selected:`, selectedOption);
  }

  render() {
		const { selectedOption, result, target } = this.state;
    return (
      <div>
        <style jsx="true">
          {`
            .slot {
              margin: auto;
              margin-top: 50px;
              text-align: center;
              font-size: 4em;
              height: 2em;
              width: 70%;
            }
            .slot-item {
              height: 100%;
              width: 100%;
            }
            p {
              font-size: 2em;
            }
          `}
        </style>

        <Slot
          className="slot"
          duration={this.state.duration}
          target={this.state.turn ? target : 0}
          times={this.state.times}
        >
          {result.map((result, i) => (
            <div
              key={i}
              className="card text-center slot-item"
              style={{ width: "100%", height: "100%" }}
            >
              <a href={result.url}>{result.name}</a>
            </div>
          ))}
        </Slot>
        <br />
        {this.displayResult(result, target)}
        <button
          style={{ margin: "1.5em 42em" }}
          className="btn btn-primary blue accent-3"
          onClick={this.setClicked}
        >
          Shuffle Restuarants
        </button>
				<div
          style={{ width: "50%", margin: "auto" }}
        >
        <Select
				placeholder="Select Categories..."
        value={selectedOption}
        onChange={this.handleChange}
				options={options}
				menuPlacement="top"
				isMulti={true}
				/>
        </div>
        <Details
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
				
      </div>
    );
  }
}

export default YelpApiSearch;
