import React, { useState } from "react";
import {
  Modal,
  Button,
  Form,
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";
import { cities, questionArr } from "../../util/dummyData";
import { API } from "../../util/api";
import RadioButtonComponent from "../InputComponents/RadioButtonComponent/RadioButtonComponent";
import DropdownComponent from "../InputComponents/DropdownComponent/DropdownComponet";
import InputFieldComponent from "../InputComponents/InputFieldComponet/InputFieldComponet";

const AddModal = ({
  show,
  setShow,
  nextQuestion,
  questionNo,
  next,
  previous,
  close,
  done,
  answerComplete,
}) => {
  const [quesNo, setQuesno] = useState(0);
  const [quesSave, setQuesSave] = useState('');

  const onHide = () => {
    setShow(false);
    setQuesno(0);
    setQuesSave({});
  };

  // const saveFunc = (val, quesNo) => {
  //   console.log("value", val, quesNo);

  //   switch (quesNo) {
  //     case 0:
  //       setQuesSave({ ...quesSave, type: val });
  //       break;
  //     case 1:
  //       setQuesSave({ ...quesSave, city: val });
  //       break;
  //     case 2:
  //       setQuesSave({ ...quesSave, area: val });
  //       break;
  //     case 3:
  //       setQuesSave({ ...quesSave, floor: val });
  //       break;
  //     case 4:
  //       setQuesSave({ ...quesSave, toylet: val });
  //       break;
  //     case 5:
  //       setQuesSave({ ...quesSave, attachtoylet: val });
  //       break;
  //     case 6:
  //       setQuesSave({ ...quesSave, varanda: val });
  //       break;
  //     case 7:
  //       setQuesSave({ ...quesSave, roomattach: val });
  //       break;
  //     case 8:
  //       setQuesSave({ ...quesSave, gas: val });
  //       break;
  //     case 9:
  //       setQuesSave({ ...quesSave, vara: val });
  //       break;
  //     case 10:
  //       setQuesSave({ ...quesSave, advance: val });
  //       break;
  //     case 11:
  //       setQuesSave({ ...quesSave, contact: val });
  //       break;
  //   }
  // };

  function handleNextItem() {
    if (answerComplete) {
      done(quesSave);
    } else {
      next(quesSave);
    }
    setQuesSave('');
  }

  function handlePreviousItem() {
    previous();
    setQuesSave('');
  }

  const onSubmit = async () => {
    if (Object.keys(quesSave).length === 12) {
      console.log("object", Object.keys(quesSave), quesSave);
      setShow(false);
      setQuesno(0);
      setQuesSave({});

      const { data } = await API.post("/add/submit", { quesSave });

      console.log("data from submit add", data);
    } else {
      alert(
        "You have to fill all questions, please go back in previous questions & fill them up"
      );
    }
  };

  // console.log('ques save', quesSave );

  return (
    <div>
      <Modal
        show={show}
        onHide={() => onHide()}
        backdrop="static"
        centered
        size="sm"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: "bold" }}>
            {nextQuestion.question}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {nextQuestion.radioOptions && (
            <RadioButtonComponent
              radioOptions={nextQuestion.radioOptions}
              id={questionNo}
              setQuesSave={setQuesSave}
            />
          )}
          {nextQuestion.dropOptions && (
            <DropdownComponent
              dropOptions={nextQuestion.dropOptions}
              id={questionNo}
              setQuesSave={setQuesSave}
            />
          )}
          {nextQuestion.inputTypeNumber && (
            <InputFieldComponent
              id={questionNo}
              type={nextQuestion.inputTypeNumber ? "number" : "text"}
              setQuesSave={setQuesSave}
              value={nextQuestion.value}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <>
            {questionNo !== 0 && (
              <Button variant="primary" onClick={() => handlePreviousItem()}>
                Previous
              </Button>
            )}

            <Button
              variant="primary"
              disabled={!quesSave}
              onClick={() => handleNextItem()}
            >
              {answerComplete ? "done" : "next"}
            </Button>
          </>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddModal;
