import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Component
} from "react-router-dom";
import Workouts from "./pages/workouts.js";
import Nutrition from "./pages/nutrition.js";
import Contact from "./pages/contact.js";
import Lost from "./pages/lost.js";
import "./App.css";

const Home = () => <div> main page </div>;

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/workouts" component={Workouts} />
          <Route path="/nutrition" component={Nutrition} />
          <Route path="/contact" component={Contact} />
          <Route component={Lost} />
        </Switch>
      </Router>
    );
  }
}

export default App;
