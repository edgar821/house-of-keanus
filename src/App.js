import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    keanus : [
      {
        id: 1,
        name: "Milk",
        src: "images/keanu.jpg",
        occupation: "Actor",
        location: "Everywhere"
      },
      {
        id: 2,
        name: "Eggs",
        src: "images/keanu (1).png",
        occupation: "Actor",
        location: "Everywhere"
      },
      {
        id: 3,
        name: "Cheese",
        src: "images/keanu (2).jpg",
        occupation: "Actor",
        location: "Everywhere"
      },
      {
        id: 4,
        name: "Cake Mix",
        src: "images/keanu (3).jpg",
        occupation: "Actor",
        location: "Everywhere"
      },
      {
        id: 5,
        name: "Carrots",
        src: "images/keanu (4).jpg",
        occupation: "Actor",
        location: "Everywhere"
      },
      {
        id: 6,
        name: "Carrots",
        src: "images/keanu (5).jpg",
        occupation: "Actor",
        location: "Everywhere"
      },
      {
        id: 7,
        name: "Carrots",
        src: "images/keanu (6).jpg",
        occupation: "Actor",
        location: "Everywhere"
      },
      {
        id: 8,
        name: "Carrots",
        src: "images/keanu (7).jpg",
        occupation: "Actor",
        location: "Everywhere"
      }
    ]
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.keanus.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>House of Keanus</Title>
        {this.state.keanus.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.src}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
