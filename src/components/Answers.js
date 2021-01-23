import React from "react";

export const Answers = ({
  answers,
  correct_answer,
  setQuestionsNumbr,
  setScore,
}) => {
  
  const handleCorrect = () => {
    setScore((state) => state + 1);
    setQuestionsNumbr((state) => state + 1);
  };

  const handleQuestions = () => {
    setQuestionsNumbr((state) => state + 1);
  };

  return (
    <>
      {answers[0] === correct_answer[0] ? (
        <li onClick={handleCorrect} className="answer">
          {answers}
        </li>
      ) : (
        <li onClick={handleQuestions} className="answer">
          {answers}
        </li>
      )}
    </>
  );
};