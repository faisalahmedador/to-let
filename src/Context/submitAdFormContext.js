import { createContext, useState } from "react";
import { questionList } from "../util/dummyData";

export const SubmitQuestion = createContext();

const SubmitQuestionProvider = ({ children }) => {
  const [nextQuestion, setNextQuestion] = useState({});
  const [questionNo, setQuestionNo] = useState(0);
  const [answerList, setAnswerList] = useState({});
  const [answerComplete, setAnswerComplete] = useState(false);

  const open = () => {
    setNextQuestion(questionList[questionNo]);
  };

  const next = (answer) => {
    console.log(answerComplete);
    let answerAdd = answerList;
    
    
      console.log(answer, nextQuestion.value);
      console.log(answerAdd[nextQuestion.value])
      answerAdd[nextQuestion.value] = answer;
    
    
    setAnswerList(answerAdd);
    if (questionNo === questionList.length - 2) {
      setAnswerComplete(true);
    } 

    setNextQuestion(questionList[questionNo + 1]);
    setQuestionNo(questionNo + 1);
    console.log(answerList);
  };

  const previous = () => {
    if (questionNo === questionList.length - 2) {
      setAnswerComplete(true);
    } 

    setQuestionNo(questionNo - 1);
    setNextQuestion(questionList[questionNo - 1]);
    let value = Object.keys(answerList)[Object.keys(answerList).length - 1];
    let answerDel = answerList;
    delete answerDel[value];
    console.log(answerDel);
    setAnswerList(answerDel);
  };

  const done = (answer) => {
    let answerAdd = answerList;
    answerAdd[nextQuestion.value] = answer;
    setAnswerList(answerAdd);
    console.log(answerList);
  };

  const close = () => {
    setNextQuestion({});
    setQuestionNo(0);
    setAnswerList({});
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
