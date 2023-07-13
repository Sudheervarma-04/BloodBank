import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "../src/Main/Home";
import About from "../src/Main/About";
import Navbar from "./components/Navbar";
import { ScrollToTop } from "./components/scrolltoTop";
import { useEffect } from "react";
import { db_transactions } from "./project_scripts/db_transactions";
import DonateNew from "./Main/DonatePage";
import RequestNew from "./Main/RequestPage";
export default function App() {
  useEffect(() => {
    const head = document.querySelector("head");

    const script = document.createElement("script");
    script.innerHTML = db_transactions;
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
    // script.setAttribute("type", "module");
  }, []);
  return (
    <div>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<DonateNew />} />
          <Route path="/request" element={<RequestNew />} />
        </Routes>
      </Router>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
