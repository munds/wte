import React, { Component } from "react";
import DisplayCard from "../DisplayCard";
import Jumbotron from "../Jumbotron";
import Wrapper from "../Wrapper";

let correctGuesses = 0;
let bestScore = 0;
let clickMessage =
  "Click on an image to earn points, but don't click on the same image twice!";
class Table extends Component {
  state = {
    restuarants: [],
    correctGuesses,
    bestScore,
    clickMessage
  };

  setClicked = id => {
    const cards = this.state.cards;

    const clickedCard = cards.filter(card => card.id === id);

    if (clickedCard[0].clicked) {
      console.log("Correct Guesses: " + correctGuesses);
      console.log("Best Score: " + bestScore);

      correctGuesses = 0;
      clickMessage = "Better luck next time. Thanks for Playing!";

      for (let i = 0; i < cards.length; i++) {
        cards[i].clicked = false;
      }

      this.setState({ clickMessage });
      this.setState({ correctGuesses });
      this.setState({ cards });
    } else if (correctGuesses < 11) {
      clickedCard[0].clicked = true;

      correctGuesses++;

      clickMessage = "Don't Quit! It's 4th and Goal!";

      if (correctGuesses > bestScore) {
        bestScore = correctGuesses;
        this.setState({ bestScore });
      }

      cards.sort(function(a, b) {
        return 0.5 - Math.random();
      });

      this.setState({ cards });
      this.setState({ correctGuesses });
      this.setState({ clickMessage });
    } else {
      clickedCard[0].clicked = true;

      correctGuesses = 0;

      clickMessage = "TOUCHDOWN!";
      bestScore = 12;
      this.setState({ bestScore });

      for (let i = 0; i < cards.length; i++) {
        cards[i].clicked = false;
      }

      cards.sort(function(a, b) {
        return 0.5 - Math.random();
      });

      this.setState({ cards });
      this.setState({ correctGuesses });
      this.setState({ clickMessage });
    }
  };

  render() {
    return (
      <Wrapper>
        <Jumbotron>
          <h1>NFL NFC Logo Memory Game</h1>

          <span className="scoreSummary">
            {this.state.clickMessage}
            <hr />
            Correct Guesses: {this.state.correctGuesses}
            <br />
            Best Score: {this.state.bestScore}
          </span>
          <br />
        </Jumbotron>

        {this.state.cards.map(card => (
          <DisplayCard
            setClicked={this.setClicked}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Table;
