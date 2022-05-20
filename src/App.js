import {Container} from "react-bootstrap";
import SubmissionForm from "./components/SubmissionForm";
import Navigation from "./components/Navigation";

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
