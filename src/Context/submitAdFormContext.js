import { createContext, useState } from "react";
import { questionList } from "../util/dummyData";

export const SubmitQuestion = createContext();

const SubmitQuestionProvider = ({ children }) => {
  const [nextQuestion, setNextQuestion] = useState({});
  const [questionNo, setQuestionNo] = useState(0);
  const [answerList, setAnswerList] = useState([]);
  const [answerComplete, setAnswerComplete] = useState(false);

  const open = () => {
    setNextQuestion(questionList[questionNo]);
  };

  const next = (answer) => {
    setAnswerList([
      ...answerList,
      {
        [nextQuestion.value]: answer,
      }
    ]);
    if (questionNo === questionList.length - 2) {
      setAnswerComplete(true);
    } else {
      setAnswerComplete(true);
    }
    setNextQuestion(questionList[questionNo + 1]);
    setQuestionNo(questionNo + 1);
    console.log(answerList);
  };

  const previous = () => {
    if (questionNo === questionList.length - 2) {
      setAnswerComplete(true);
    } else {
      setAnswerComplete(true);
    }
    setQuestionNo(questionNo - 1);
    setNextQuestion(questionList[questionNo - 1]);
    setAnswerList(answerList.pop());
  };

  const done = () => {
    console.log("congrats");
  };

  const close = () => {
    setNextQuestion({});
    setQuestionNo(0);
    setAnswerList([]);
  };

  const contextValues = {
    next,
    previous,
    done,
    close,
    open,
    nextQuestion,
    questionNo,
    answerComplete,
  };

  return (
    <SubmitQuestion.Provider value={contextValues}>
      {children}
    </SubmitQuestion.Provider>
  );
};

export default SubmitQuestionProvider;
