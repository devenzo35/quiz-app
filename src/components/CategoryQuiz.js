import React, { useContext, useEffect, useRef, useState } from "react";
import queryString from "query-string";
import { Answers } from "./Answers";
import { useQuestions } from "../helpers/getQuestions";
import { userInfo } from "../QuizApp";
import { Link } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";

export const CategoryQuiz = () => {
  const { user, setUser } = useContext(userInfo);
  const [score, setScore] = useState(0);
  const [questionsNmbr, setQuestionsNumbr] = useState(0);
  const [showEnd, setShowEnd] = useState(false);
  const { name, ctgry } = queryString.parse(window.location.search);
  const { data, loading } = useQuestions(ctgry, questionsNmbr);
  const ref = useRef(0);

  useEffect(() => {
    if (questionsNmbr === 20) {
      setUser((state) => ({ ...state, score }));
      setShowEnd(true);
    }

    const interval = setInterval(() => {
      ref.current++;
    }, 1100);

    if (questionsNmbr === 20) {
      setUser((state) => ({ ...state, time: ref.current }));
      clearInterval(interval);
    }

    return () => {
      
      clearInterval(interval)
      setUser(state=>({
        ...state,
        score: null,
        time: 0
      }))
    };

  }, [setUser, score, questionsNmbr, loading]);

  useEffect(()=>{
    if(user.time){
      db.collection('users').add(user)
    }
  },[user,questionsNmbr])

 
    
    if (loading) return <h1>loading...</h1>;
    
    const { correct_answer, question, incorrect_answers } = data || "";
    
    if(incorrect_answers.length === 3){
     incorrect_answers.splice(Math.random() * 4, 0, correct_answer);
    }

  
  return (
    <div className="quiz_screen">
      <h1>{name.toUpperCase()}</h1>

      <span className="quiz_screen-counter">{questionsNmbr}/20</span>

      <div className="quizTable">
        <p className="question">{question}</p>

        <ul className="answers_container">
          {incorrect_answers.map((el, i) => {
            return (
              <li key={i}>
                <Answers
                  answers={el}
                  correct_answer={correct_answer}
                  setQuestionsNumbr={setQuestionsNumbr}
                  setScore={setScore}
                />
              </li>
            );
          })}
        </ul>
      </div>

      {showEnd ? (
        <div className="end_quiz-screen">
          <span className="end_quiz-message">Congratulations!</span>
          <span className="end-quiz-score">Your score: {user.score}</span>
          <Link to="/scorelist">Go to score list</Link>
        </div>
      ) : (
        ""
      )}

    </div>
  );
};
