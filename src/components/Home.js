import React from "react";
import AiDescriptionCard from "./AiDescriptionCard";
import {Col, Row} from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <h1> Online Artificial Intelligence AI (API) with OpenAI </h1>
      <p> Choose any of the use-cases below to start generating AI content. </p>

      <Row>
        <Col>
          <AiDescriptionCard
            header="🍔 Hungray 🍔"
            title="Generate a Food Item That You Are Craving"
            text="Use keywords that describe the type of food that you are craving to eat!"
            theLink="/hungray"
          />
        </Col>

        <Col>
          <AiDescriptionCard
            header="🏆 Motivational Coach 🏆"
            title="Motivational Quotes to Help Get You Through"
            text="If you need a bit of inspiration, write some words that explain how you are feeling"
            theLink="/quotes"
          />
        </Col>

        <Col>
          <AiDescriptionCard
            header="✍️ Cover Letter ✍️"
            title="Generate a Cover Letter Template for Employers"
            text="This is perfect for creating a cover letter for new employers"
            theLink="/cover-letter"
          />
        </Col>
      </Row>
    </div>
  )
}

export default Home;
