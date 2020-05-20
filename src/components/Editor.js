import React, {useState} from 'react'
import {Button,Modal} from "react-bootstrap";

function Editor(props) {
    // console.log(props.data)
    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose} centered size="xl" dialogClassName="col-md-12">
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.data.id}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => props.saveChanges(props.data.id)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export  default Editor
