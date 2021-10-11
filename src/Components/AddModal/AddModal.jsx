import React, { useEffect, useState } from "react";
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
  const [quesNo, setQuesno] = useState(0);
  const [quesSave, setQuesSave] = useState({});
  const [images, setImages] = useState({})

  const onHide = () => {
    setShow(false);
    setQuesno(0);
    setQuesSave({});
  };


  function handleNextItem() {
    if (answerComplete) {
      done(quesSave);
    } else {
      if(quesSave){
        next(quesSave);
        setQuesSave({});
      }else{
        next(images);
        setImages({});
      }
      
    }
    
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

  if(images){
    console.log(images);
  }

  
  

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
            />
          )}

          {nextQuestion.address && (
              <AddressComponent  />
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
