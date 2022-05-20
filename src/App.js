import {Container} from "react-bootstrap";
import SubmissionForm from "./components/SubmissionForm";
import Navigation from "./components/Navigation";
import {BrowserRouter as Routes, } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container>
        <SubmissionForm />
      </Container>
    </div>
  );
}

export default App;
