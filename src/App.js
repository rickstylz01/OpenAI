import {Container} from "react-bootstrap";
import Hungray from "./components/Hungray";
import Navigation from "./components/Navigation";
import Quotes from "./components/Quotes";
import BreakNames from "./components/BreakNames";
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
              <Route path="/quotes" element={<Quotes />} />
              <Route path="/breaknames" element={<BreakNames />} />
            </Routes>
          </Container>
      </div>
    </Router>
  );
}

export default App;
