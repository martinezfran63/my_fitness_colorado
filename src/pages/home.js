import React from 'react';
import logo from "../logo.svg";

class Home extends React.Component {
  render() {
    return (
      <div>
        <p>You are home!</p>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

  export default Home;