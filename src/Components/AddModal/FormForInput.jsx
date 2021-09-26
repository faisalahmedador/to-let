import React, { useEffect, useRef, useState } from 'react';
import {  Modal, Button, Form, InputGroup, FormControl   } from 'react-bootstrap';


const FormForInput = ({saveFunc, quesNo}) =>{



    return(
        <InputGroup  className="mb-3 " onChange={(e) => saveFunc(e.target.value, quesNo ) } >
        {/* <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text> */}

        <FormControl
        
        type='text'
        id='input-text'
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        />
    </InputGroup>
    )


}

export default FormForInput;