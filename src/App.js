import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./components/components-style.css";
import MainCalculator from "./components/MainCalculator";
import InfoCalculator from "./components/InfoCalculator";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/gesture-calculator">
          <MainCalculator />
        </Route>

        <Route path="/gesture-calculator/info">
          <InfoCalculator />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
