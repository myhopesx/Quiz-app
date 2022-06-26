import "./App.css";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
