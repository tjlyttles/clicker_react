import React, { Component } from "react";
import NavBar from "./components/NavBar";
import { ImageList, Images } from "./components/Images";
import card from "./data.json";

class App extends Component {
  state = {
    card,
    reArrange: () => {
      this.setState(({ card }) => ({
        card: card.sort(function() {
          return 0.5 - Math.random();
        })
      }));
    },
    score: 0,
    highestScore: 0,
    theme: "light",
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === "light" ? "dark" : "light"
      }));
    }
  };

  handleClick = id => {
    let clicked = this.state.card.filter(thisCard => thisCard.id === id);
    if (!clicked[0].click) {
      clicked[0].click = true;
      this.setState({ score: this.state.score + 1 });
      this.state.reArrange();
      this.checkWin(this.state.score);
    } else {
      alert("Game Over");
      this.state.card.forEach(cardBool => {
        if (cardBool.click) {
          cardBool.click = false;
        }
      });
      if (this.state.score > this.state.highestScore) {
        this.setState({ highestScore: this.state.score });
      }
      this.setState({ score: 0 });
    }
  };

  checkWin = score => {
    if (score === 11) {
      alert("You win!!");
      this.state.card.forEach(cardBool => {
        if (cardBool.click) {
          cardBool.click = false;
        }
      });
      this.setState({ highestScore: this.state.score + 1 });
      this.setState({ score: 0 });
    }
  };

  render() {
    return (
      <div className={this.state.theme}>
        <NavBar
          score={this.state.score}
          highestScore={this.state.highestScore}
          theme={this.state.theme}
          toggleTheme={this.state.toggleTheme}
        />

        <ImageList>
          {this.state.card.map(data => (
            <Images
              handleClick={this.handleClick}
              id={data.id}
              image={data.image}
              click={data.click}
            />
          ))}
        </ImageList>
      </div>
    );
  }
}

export default App;
