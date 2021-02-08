import React from "react";
import { CategoryNav } from "./CategoryNav";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      
      <h1>QuizApp</h1>

      <CategoryNav />
    

      <Link className="scoreList__btn" to="/scorelist">
        <i className="fas fa-trophy"></i> score list
      </Link>

    </div>
  );
};
