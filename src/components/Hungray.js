import React, {useState} from 'react';
import { useRef, useEffect } from "react";
import {Button, Form} from "react-bootstrap";

const Hungray = () => {
  const searchRef = useRef();
  const [state, setState] = useState();

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const onFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries())
    console.log(formDataObj.foodItem);

    setState({
      heading: `AI Food Suggestions for: ${formDataObj.foodItem}`,
      response: `The Response from OpenAI API will be shown here`
    });
  }

  return(
    <Form onSubmit={onFormSubmit}>
      <Form.Group className="mb-3" controlId="formSearchQuery">
        <Form.Label>What do you feel like eating?</Form.Label>
        <Form.Control
          type="text"
          className="form-control"
          name="foodItem"
          aria-describedby="searchHelp"
          ref={searchRef}
          autoComplete="off"
          placeholder="Key words"
        />
        <Form.Text className="text-muted">
          Enter as many key words as possible to determine what to eat 🤤.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" size="md" type="submit">
        Submit
      </Button>
    </Form>

  );
}

export default Hungray;

