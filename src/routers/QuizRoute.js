import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { CategoryQuiz } from "../components/CategoryQuiz";
import { ScoreList } from "../components/ScoreList";

export default function QuizRoute() {
  return (
    <Router>
        
      <div>
        <Switch>
          <Route path="/category/" component={CategoryQuiz}></Route>
          <Route exact path="/scorelist" component={ScoreList}></Route>
        </Switch>
      </div>

    </Router>
  );
}