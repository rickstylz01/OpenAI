import React, {useState} from 'react';
import { useRef, useEffect } from "react";
import {Button, Card, Form} from "react-bootstrap";

const Hungray = () => {
  const searchRef = useRef();
  const [state, setState] = useState({
    heading: 'The Response from the AI will be shown here',
    response: '..... await the response'
  });

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const onFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries())
    console.log(formDataObj.foodDescription);

    //////OPENAI

    setState({
      heading: `AI Food Suggestions for: ${formDataObj.foodDescription}`,
      response: 'The Response from OpenAI API will be shown here'
    });
  }

  return(
    <div>
      <h1>🍔 Hungray 🍔</h1>
      <h4>Generate a Food Item That You Are Craving</h4>
      <Form onSubmit={onFormSubmit}>
        <Form.Group className="mb-3" controlId="formSearchQuery">
          <Form.Label>What do you feel like eating?</Form.Label>
          <Form.Control
            type="text"
            className="form-control"
            name="foodDescription"
            aria-describedby="searchHelp"
            ref={searchRef}
            autoComplete="off"
            placeholder="Enter Key Words"
          />
          <Form.Text className="text-muted">
            Enter as many key words as possible to determine what to eat 🤤.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" size="md" type="submit">
          Get Food Suggestion
        </Button>
      </Form>

      <Card>
        <Card.Body>
          <Card.Title><h1>{state.heading}</h1></Card.Title>
          <hr />
          <Card.Text>
            <h4>{state.response}</h4>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Hungray;

