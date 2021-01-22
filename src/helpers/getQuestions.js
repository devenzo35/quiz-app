import { useEffect, useState } from "react";


export const useQuestions=(ctgry, questionsNmbr)=>{

    const [state, setstate] = useState({
        data: null,
        loading: true,
      });

    useEffect(() => {
        fetch(
            `https://opentdb.com/api.php?amount=1&category=${ctgry}&type=multiple`
            )
            .then((res) => res.json())
            .then((json) => {
                const { correct_answer, question, incorrect_answers } = json.results[0];
                
                setstate({
                    data: { correct_answer, question, incorrect_answers },
                    loading: false,
                });
            });
        }, [ctgry, questionsNmbr]);

        return state; 
        
    }
