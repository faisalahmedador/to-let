import { createContext, useReducer } from "react";
import { questionList } from "../util/dummyData";

export const SubmitQuestion = createContext();

const initialState = {
    question: [],
    questionNo: 0
}

const submitQuestionReducer = (state, action) => {
    switch (action.type) {
        case 'open':
            state.question.push(questionList.basicQuestion);
            return {
                ...state
            }
    }
}



const SubmitQuestionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(submitQuestionReducer, initialState);

    const next = (payload) => {
        dispatch({ type: "next", payload });
    }
    const previous = (payload) => {
        dispatch({ type: "previous", payload });
    }
    const done = (payload) => {
        dispatch({ type: "done", payload });
    }
    const close = (payload) => {
        dispatch({ type: "close", payload });
    }
    const open = (payload) => {
        dispatch({ type: 'open', payload });
    }

    const contextValues = {
        next,
        previous,
        done,
        close,
        open,
        ...state
    }

    return (
        <SubmitQuestion.Provider value={contextValues}>
            {children}
        </SubmitQuestion.Provider>
    )
}

export default SubmitQuestionProvider;
