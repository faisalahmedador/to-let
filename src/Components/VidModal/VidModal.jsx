import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './VidModal.scss';

const VidModal = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="vidmodal-div" >
            <Button  onClick={handleShow}>
                Check Out The Demo
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Check Out The Demo </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <iframe id="ytplayer" type="text/html"   style={{ width: '100%', height: '26rem' }} 
                src="https://www.youtube.com/embed/M7lc1UVf-VE"
                frameborder="0" allowFullScreen />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                {/* <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button> */}
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default VidModal;