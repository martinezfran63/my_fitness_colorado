import React from 'react';
import bear_404 from "../bear-404.jpg";

class Lost extends React.Component {
  render() {
    return (
      <div>
        <h1>404 - Sorry this page is not found</h1>
        <img src={bear_404} className="App-logo" alt="logo" />
      </div>
    )
  }
}

  export default Lost;
  