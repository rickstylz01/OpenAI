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
    response: '..... await the response'
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries())
    console.log(formDataObj.foodDescription);

    //////OPENAI
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    openai.createCompletion("text-curie-001", {
      prompt: `Name delicious local food to try from the provided location: ${formDataObj.foodLocation}`,
      temperature: 0.8,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((response) => {
      setState({
        heading: `Local Food @ ${formDataObj.foodLocation}`,
        response: `${response.data.choices[0].text}`
      });
      console.log('This is the state.response', state.response);
    })
  }

  //function to split response
  const listSplitResponse = (stringToSplit, separator) => {
    console.log(stringToSplit.split(separator));

    let splitString = stringToSplit.split(separator);

    for (let i = 0; i < splitString.length; i++) {
      splitString[i] = splitString[i] + <br />;
    }

    splitString = splitString.join("");
    return splitString;
  }

  return(
    <div>
      <h1>🍔 Hungray 🍔</h1>
      <h4>Find Amazing Local Food to Eat Wherever You Are!</h4>
      <Form onSubmit={onFormSubmit}>
        <Form.Group className="mb-3" controlId="formSearchQuery">
          <Form.Label>Where are you currently located?</Form.Label>
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
            Enter city and state or country and region 🤤.
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
          <h4>
            <Card.Text>
              {/*list the responses*/}
              {listSplitResponse(state.response, ',')}
              {/*{state.response}*/}
            </Card.Text>
          </h4>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Hungray;

