import React from "react";
import { Link } from "react-router-dom";

export const EndQuizScreen = ({ user }) => {
  return (
    <div className="end_quiz-screen">
      <span className="end_quiz-message">Congratulations!</span>
      <span className="end-quiz-score">Your score: {user.score}</span>
      <Link to="/scorelist">Go to score list</Link>
    </div>
  );
};
