import { createContext, useEffect, useState } from "react";
import { questionList } from "../util/dummyData";
import { useDispatch, useSelector } from "react-redux";
import { adSubmitAction } from "../redux/Actions/SubmitActions";

export const SubmitQuestion = createContext();

const SubmitQuestionProvider = ({ children }) => {
  const [nextQuestion, setNextQuestion] = useState({});
  const [questionNo, setQuestionNo] = useState(0);
  const [answerList, setAnswerList] = useState({});
  const [finalAnswer, setFinalAnswer] = useState({});

  const open = () => {
    setNextQuestion(questionList[questionNo]);
  };

  const next = (answer) => {
    let answerAdd = answerList;    
    answerAdd[nextQuestion.value] = answer;
    setAnswerList(answerAdd);
    setNextQuestion(questionList[questionNo + 1]);
    setQuestionNo(questionNo + 1);
  };

  const previous = () => {
    setQuestionNo(questionNo - 1);
    setNextQuestion(questionList[questionNo - 1]);
  };

  const dispatch = useDispatch()

  const done = (answer) => {
    let answerAdd = {};
    for(const key in answerList) {
      if(key === 'address') {
        answerAdd['division'] = answerList.address.division;
        answerAdd['district'] = answerList.address.district;
        answerAdd['thana'] = answerList.address.thana
        answerAdd['postCode'] = answerList.address.sub_office
        answerAdd['address'] = answerList.address.address;
      }else {
        answerAdd[key] = answerList[key];
      }
    }
    answerAdd[nextQuestion.value] = answer;
    console.log(answerAdd);
    dispatch(adSubmitAction(answerAdd));
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
    answerList
  };

  return (
    <SubmitQuestion.Provider value={contextValues}>
      {children}
    </SubmitQuestion.Provider>
  );
};

export default SubmitQuestionProvider;
