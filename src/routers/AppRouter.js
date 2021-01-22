import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Register } from "../components/Register";
import { ScoreList } from "../components/ScoreList";
import QuizRoute from "./QuizRoute";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>

          <Route exact path="/category/" component={QuizRoute}></Route>

          <Route exact path="/home" component={Home}></Route>

          <Route exact path="/scorelist" component={ScoreList}></Route>

          <Route exact path="/" component={Register}></Route>

        </Switch>
      </div>
    </Router>
  );
}
