import { Button, Modal, Form, FormGroup, FormControl } from "react-bootstrap";
import React, { useEffect, useState } from "react";
interface Props {
  addingPlayer: (e: any) => void;
}

export function AddButton(Props: Props): JSX.Element {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    Props.addingPlayer({
      name: e.target.elements.getName.value,
      score: e.target.elements.getScore.value,
    });
    setShow(false);
  };
  return (
    <>
      <Button onClick={handleShow}>Add Student</Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3 name" controlId="">
              <label>Player Name:</label>
              <FormControl name="getName" type="text" placeholder="" />
            </FormGroup>

            <FormGroup className="mb-3 score" controlId="">
              <label>Player score:</label>
              <FormControl name="getScore" type="text" placeholder="" />
            </FormGroup>

            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
      {/* <form className="mt-5 d-flex justify-content-around">
        <label>
          Player Name:
          <input type="text" name="getName" />
        </label>
        <label>
          Player Score:
          <input type="number" name="getScore" />
        </label>
        <div>
          <button type="submit" onClick={handleSubmit}>
            Add player
          </button>
        </div>
      </form> */}
    </>
  );
}
