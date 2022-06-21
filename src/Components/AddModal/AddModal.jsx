import React, {useContext, useEffect, useState} from "react";
import {
    Modal,
    Button
} from "react-bootstrap";
import RadioButtonComponent from "../InputComponents/RadioButtonComponent/RadioButtonComponent";
import DropdownComponent from "../InputComponents/DropdownComponent/DropdownComponet";
import InputFieldComponent from "../InputComponents/InputFieldComponet/InputFieldComponet";
import AddressComponent from "../InputComponents/AddressComponent/AddressComponent";
import MultiImageInput from 'react-multiple-image-input';
import {SubmitQuestion} from "../../Context/submitAdFormContext";
import './_addModal.scss';

const AddModal = ({
                      show,
                      setShow,
                  }) => {
    const [quesSave, setQuesSave] = useState({});
    const {next, previous, done, close, open, nextQuestion, questionNo, answerList} =
        useContext(SubmitQuestion);

    useEffect(() => {
        open(true);
    }, [open, show])

    const onHide = () => {
        setShow(false);
        close();
        setQuesSave({});
    };


    function handleNextItem() {
        if (nextQuestion.value === 'contact_no') {
            done(quesSave);
        } else {
            next(quesSave);
        }
        let answer = answerList[Object.keys(answerList)[questionNo + 1]]
        answer ? setQuesSave(answer) : setQuesSave({});

    }

    function handlePreviousItem() {
        previous();
        setQuesSave(answerList[Object.keys(answerList)[questionNo - 1]]);
    }


    return (
        <div className='addModal-main'>
            <Modal
                show={show}
                onHide={() => onHide()}
                centered
                backdrop="static"
                size="sm"
                backdropClassName='backdrop'
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{fontWeight: "bold"}}>
                        {nextQuestion.question}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {nextQuestion.radioOptions && (
                        <RadioButtonComponent
                            radioOptions={nextQuestion.radioOptions}
                            id={questionNo}
                            setQuesSave={setQuesSave}
                            quesSave={quesSave}
                        />
                    )}
                    {nextQuestion.dropOptions && (
                        <DropdownComponent
                            dropOptions={nextQuestion.dropOptions}
                            id={questionNo}
                            setQuesSave={setQuesSave}
                            value={nextQuestion.value}
                            quesSave={quesSave}
                        />
                    )}
                    {nextQuestion.inputTypeNumber && (
                        <InputFieldComponent
                            id={questionNo}
                            type={nextQuestion.inputTypeNumber ? "number" : "text"}
                            setQuesSave={setQuesSave}
                            value={nextQuestion.value}
                            quesSave={quesSave}
                        />
                    )}

                    {nextQuestion.address && (
                        <AddressComponent nextQuestion={nextQuestion} id={questionNo} setQuesSave={setQuesSave}
                                          quesSave={quesSave}/>
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
                                {nextQuestion.value === 'contact_no' ? "done" : "next"}
                            </Button> : <Button
                                variant="primary"
                                disabled
                            >
                                {nextQuestion.value === 'contact_no' ? "done" : "next"}
                            </Button>}
                    </>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddModal;