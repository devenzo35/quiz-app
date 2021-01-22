import React from "react";

export const Answers = React.memo( ({
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
      {answers === correct_answer ? (
        <p onClick={handleCorrect} style={{background:'green'}} className="answer">
          {answers}
        </p>
      ) : (
        <p onClick={handleQuestions} className="answer">
          {answers}
        </p>
      )}
    </>
  );
});