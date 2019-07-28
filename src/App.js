import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Workouts from "./pages/workouts.js";
import Nutrition from "./pages/nutrition.js";
import Contact from "./pages/contact.js";
import Lost from "./pages/lost.js";
import Home from "./pages/home.js";
import HeaderComponent from "./components/HeaderComponent.js";
import withStyles from "./components/withStyles.js";
import "./App.css";


class App extends React.Component {
  render() {
    return (
      <Router>
        <HeaderComponent />
        <withStyles />
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
