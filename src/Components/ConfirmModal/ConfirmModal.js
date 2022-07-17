import React from "react";
import {Modal, Button} from "react-bootstrap"
import './confirmModal.scss'

const ConfirmModal = ({show, onChangeState, text}) => {
    return(
        <Modal show={show} onHide={() => onChangeState(false)} centered>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <h4 className={'mx-4'}>{text}</h4>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="danger" className={'button-default-style'} onClick={() => onChangeState(false)}>
                    Close</Button>
                <Button variant="primary" className={'button-default-style'} onClick={() => onChangeState(true)}>
                    Save changes</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ConfirmModal