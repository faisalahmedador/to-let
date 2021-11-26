import React, { useEffect, useState } from "react";
import {
  Modal,
  Button
} from "react-bootstrap";
import RadioButtonComponent from "../InputComponents/RadioButtonComponent/RadioButtonComponent";
import DropdownComponent from "../InputComponents/DropdownComponent/DropdownComponet";
import InputFieldComponent from "../InputComponents/InputFieldComponet/InputFieldComponet";
import AddressComponent from "../InputComponents/AddressComponent/AddressComponent";
import MultiImageInput from 'react-multiple-image-input';

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
  const [quesSave, setQuesSave] = useState({});

  const onHide = () => {
    setShow(false);
    close();
    setQuesSave({});
  };


  function handleNextItem() {
    if (answerComplete) {
      done(quesSave);
      setQuesSave({});
    } else {
      next(quesSave);
      setQuesSave({});

    }

  }

  function handlePreviousItem() {
    previous();
    setQuesSave({});
  }

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
              value={nextQuestion.value}
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

          {nextQuestion.address && (
            <AddressComponent nextQuestion={nextQuestion} id={questionNo} setQuesSave={setQuesSave} />
          )}

          {nextQuestion.selectImages && (
            <MultiImageInput
              theme={{
                background: '#ffffff',
                outlineColor: '#111111',
                textColor: 'rgba(255,255,255,0.6)',
                buttonColor: '#4f4f4f',
                modalColor: '#ffffff'
              }}
              images={quesSave}
              setImages={setQuesSave}
              allowCrop={false}
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

            {Object.keys(quesSave).length ?
              <Button
                variant="primary"
                onClick={() => handleNextItem()}
              >
                {answerComplete ? "done" : "next"}
              </Button> : <Button
                variant="primary"
                disabled
              >
                {answerComplete ? "done" : "next"}
              </Button>}
          </>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddModal;