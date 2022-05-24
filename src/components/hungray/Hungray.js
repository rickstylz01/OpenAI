import './Hungray.css';
import React, {useState} from 'react';
import { useRef, useEffect } from "react";
import {Button, Card, Form} from "react-bootstrap";
const { Configuration, OpenAIApi } = require("openai");


const Hungray = () => {
  const searchRef = useRef();
  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const [state, setState] = useState({
    heading: 'The Response from the AI will be shown here',
    response: '...await the response'
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries())

    //////OPENAI
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    openai.createCompletion("text-curie-001", {
      prompt: `Make a list of top, local restaurants to try from the provided location: ${formDataObj.foodLocation}`,
      temperature: 0.6,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((response) => {
      setState({
        heading: `Food to Try While In: ${formDataObj.foodLocation}`,
        response: `${response.data.choices[0].text}`
      });
    })
  }

  const splitResponse = (stringToSplit, separator) => {
    let newStringArray = stringToSplit.split(separator);

    for (let i = 0; i < newStringArray.length; i++) {
      if (newStringArray[i] === '\n\n') {
        newStringArray.splice(i, 1);
      }
      newStringArray[i] = newStringArray[i].replace('.', '');
    }

    return newStringArray;
  }

  return(
    <div>
      <h1>🍔 Hungray 🍔</h1>
      <h4>Find Amazing Local Food to Eat Wherever You Are!</h4>
      <Form className="centrText" onSubmit={onFormSubmit}>
        <Form.Group className="mb-3" controlId="formSearchQuery">

          <Form.Label className="mt-4">Where are you currently located?</Form.Label>
          <Form.Control
            type="text"
            className="form-control"
            name="foodLocation"
            aria-describedby="searchHelp"
            ref={searchRef}
            autoComplete="off"
            placeholder="Location"
          />
          <Form.Text className="text-muted">
            Enter city and state or country and region.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" size="md" type="submit">
          Get Food Suggestions
        </Button>
      </Form>

      <Card className="mt-5">
        <Card.Body>
          <Card.Title><h1>{state.heading}</h1></Card.Title>
          <hr />
          <h4>
            <ul>
              <Card.Text>
                {splitResponse(state.response, /\d+/g).map((string, i) =>
                  <li className="mt-3" key={i}>{string}</li>
                )}
              </Card.Text>
            </ul>
          </h4>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Hungray;

