import React from "react";
import './App.css';
import Game from "./Game";

class App extends React.Component {
  render() {
    return (
      <Game range={3}/>
    );
  }
}

export default App;
