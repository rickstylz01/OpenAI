import {Container} from "react-bootstrap";
import Hungray from "./components/Hungray";
import Navigation from "./components/Navigation";
import CoverLetter from "./components/CoverLetter";
import MotivationalCoach from "./components/MotivationalCoach";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
          <Container>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/hungray" element={<Hungray />} />
              <Route path="/cover-letter" element={<CoverLetter />} />
              <Route path="/quotes" element={<MotivationalCoach />} />
            </Routes>
          </Container>
      </div>
    </Router>
  );
}

export default App;
