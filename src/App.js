import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import "./App.css";
import "./components/components-style.css";
import MainCalculator from "./components/MainCalculator";
import InfoCalculator from "./components/InfoCalculator";

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/">
          <MainCalculator />
        </Route>

        <Route path="/info">
          <InfoCalculator />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
