import { createContext, useEffect, useState } from "react";
import { questionList } from "../util/dummyData";
import { useDispatch, useSelector } from "react-redux";
import { adSubmitAction } from "../redux/Actions/AdSubmitActions";
import { useHistory } from "react-router-dom";

export const SubmitQuestion = createContext();

const SubmitQuestionProvider = ({ children }) => {
  const [nextQuestion, setNextQuestion] = useState({});
  const [questionNo, setQuestionNo] = useState(0);
  const [answerList, setAnswerList] = useState({});
  const [answerComplete, setAnswerComplete] = useState(false);
  let history = useHistory();

  const open = () => {
    setNextQuestion(questionList[questionNo]);
  };

  const next = (answer) => {
    console.log(answerComplete);
    let answerAdd = answerList;

    if (nextQuestion.value === 'address') {
      answerAdd['division'] = answer.division;
      answerAdd['area'] = answer.zila;
      answerAdd['address'] = answer.houseName;
      setAnswerComplete(true);
    } else {
      answerAdd[nextQuestion.value] = answer;
    }
    setAnswerList(answerAdd);
    setNextQuestion(questionList[questionNo + 1]);
    setQuestionNo(questionNo + 1);
    console.log(answerList);
  };

  const previous = () => {
    if (questionNo === questionList.length - 1) {
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

  const dispatch = useDispatch()

  const done = (answer) => {
    let answerAdd = answerList;
    answerAdd[nextQuestion.value] = answer;
    dispatch(adSubmitAction(answerAdd));
  };


  const close = () => {
    setNextQuestion({});
    setQuestionNo(0);
    setAnswerList({});
  };

  const {loading, add_post} = useSelector(state => state.adsubmitReducers)

  if(add_post){
    console.log(add_post);
  }

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
