import React from "react";
import { Card, Button, Nav } from 'react-bootstrap';

const AiDescriptionCard = (props) => {
  const { header, title, text, theLink } = props;

  function truncateString(str, num) {
    // If the length of str is less than or equal to num
    // just return str--don't truncate it.
    if (str.length <= num) {
      return str
    }
    // Return str truncated with '...' concatenated to the end of str.
    return str.slice(0, num) + '...'
  }

  return(
    <div>
      <Card>
        <Card.Header as="h5">{header}</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {truncateString(text, 65)}
          </Card.Text>
          <Nav.Link href={theLink}>
            <Button variant="primary" size="md">Get Started</Button>
          </Nav.Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AiDescriptionCard;
