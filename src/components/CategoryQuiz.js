import React, { useContext, useEffect, useRef, useState } from "react";
import queryString from "query-string";
import { Answers } from "./Answers";
import { useQuestions } from "../helpers/getQuestions";
import { userInfo } from "../QuizApp";
import { db } from "../firebase/firebaseConfig";
import ReactHtmlParser from "react-html-parser";
import { EndQuizScreen } from "./EndQuizScreen";

export const CategoryQuiz = () => {
  const { user, setUser } = useContext(userInfo);
  const [score, setScore] = useState(0);
  const [questionsNmbr, setQuestionsNumbr] = useState(0);
  const [showEnd, setShowEnd] = useState(false);
  const ref = useRef(0);
  const { ctgry } = queryString.parse(window.location.search);
  const { data, loading } = useQuestions(ctgry, questionsNmbr);
  
  

  useEffect(() => {
    
    const interval = setInterval(() => {
      ref.current++;
    }, 1000);
    
    if (questionsNmbr === 21) {
      setUser((state) => ({ ...state, time: ref.current, score }));
      setShowEnd(true);
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
      setUser((state) => ({
        ...state,
        score: null,
        time: 0,
      }));
    };
  }, [setUser, score, questionsNmbr, loading]);

  useEffect(() => {
    if (user.time) {
      db.collection("users").add(user);
    }
  }, [user, questionsNmbr]);


  if (loading) return <h1 className="loader">loading...</h1>;

  const { correct_answer, question, incorrect_answers } = data || "";

  if (incorrect_answers.length === 3) {
    incorrect_answers.splice(Math.random() * 4, 0, correct_answer);
  }

  return (
    <div className="quiz_screen">

      <div className="quizTable">
        <p className="question">{ReactHtmlParser(question)}</p>

        <ul className="answers_container">
          {incorrect_answers.map((el, i) => {
            return (
               
                <Answers
                  answers={ReactHtmlParser(el)}
                  correct_answer={ReactHtmlParser(correct_answer)}
                  setQuestionsNumbr={setQuestionsNumbr}
                  setScore={setScore}
                  key={i}
                />
              
            );
          })}
          </ul>
      </div>

      <span className="quiz_screen-counter">{questionsNmbr}/20</span>

      {showEnd && <EndQuizScreen user={user} />}
    </div>
  );
};
