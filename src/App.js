import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./container/Home";
import About from "./container/About";
import Work from "./container/Work";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
