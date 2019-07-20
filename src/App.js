import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Keanus from "./keanus.json"

class App extends Component {
  state = {
    keanus : Keanus,
    chosenOnes : Keanus,
    clickedKeanus : [],
    score: 0,
    topscore: 0
  };

  handleClick = id => {
    console.log(id);
    let clicked = this.state.clickedKeanus;
    let thisScore = this.state.score;
    if(!clicked.includes(id)){
      console.log(this.state.score);
      clicked.push(id);
      thisScore++
      this.setState({ clickedKeanus : clicked, score: thisScore });
      console.log(clicked);
      console.log(thisScore);
      this.shuffle(this.state.keanus);
    }
    else{
      thisScore = 0;
      clicked = [];
      this.setState({ clickedKeanus : clicked, score: thisScore })
      console.log(clicked);
      console.log(thisScore);
      this.shuffle(this.state.keanus);
    }
  };

  shuffle = array => {
    var i = array.length,
      j = 0,
      temp;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    this.setState({ chosenOnes : array })
  }

  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} title="House of Keanus"/>
        {this.state.chosenOnes.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.src}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
