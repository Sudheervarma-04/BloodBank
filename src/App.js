import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "../src/Main/Home"
import About from "../src/Main/About"
import Donate1 from "./Main/Donate"
import Request from "./Main/Request";
import Navbar from "./components/Navbar";
export default function App(){
  return (
    <div>
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate1 />} />
        <Route path="/request" element={<Request />} />
      </Routes>
    </Router>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);