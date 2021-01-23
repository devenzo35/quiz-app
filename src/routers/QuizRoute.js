import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { CategoryQuiz } from "../components/CategoryQuiz";
import { ScoreList } from "../components/ScoreList";

export default function QuizRoute() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/scorelist" component={ScoreList}></Route>
          <Route exact path="/category/" component={CategoryQuiz}></Route>
          <Redirect exact to="/scorelist"></Redirect>
        </Switch>
      </div>
    </Router>
  );
}
