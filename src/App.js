import { Routes, Route, useLocation } from "react-router-dom";
// import ReactDOM from "react-dom/client";
import Home from "../src/Main/Home";
import About from "../src/Main/About";
import Navbar from "./components/Navbar";
import AdminLogin from "./Admin/AdminLogin";
import Dashboard from "./Admin/Dashboard";
import AdminDonationPage from "./Admin/AdminDonationpage";
import AdminRequestPage from "./Admin/AdminRequestpage";
import { ScrollToTop } from "./components/scrolltoTop";
import { useEffect, useState } from "react";
import DonateNew from "./Main/DonatePage";
import RequestNew from "./Main/RequestPage";
import "./App.css";
// import { donation_js } from "./project_scripts/donation_db";
export default function App() {
  // useEffect(() => {
  //   const head = document.querySelector("head");

  //   const script1 = document.createElement("script");
  //   script1.innerHTML = db_transactions;
  //   head.appendChild(script1);
  //   // const script2 = document.createElement("script");
  //   // script2.innerHTML = donation_js;
  //   // head.appendChild(script2);

  //   return () => {
  //     head.removeChild(script1);
  //     // head.removeChild(script2);
  //   };
  //   // script.setAttribute("type", "module");
  // }, []);

  const [navtoggle, setNavToggle] = useState(true);
  var path_location = useLocation();

  useEffect(() => {
    if (
      path_location.pathname === "/dashboard" ||
      path_location.pathname === "/admindonatepage" ||
      path_location.pathname === "/adminlogin" ||
      path_location.pathname === "/adminrequestpage"
    ) {
      setNavToggle(!navtoggle);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {navtoggle ? <Navbar /> : <></>}
      <ScrollToTop />
      <Routes>
        <Route exact path="/" index element={<Home />} />
        `<Route path="/about" element={<About />} />
        <Route path="/donate" element={<DonateNew />} />
        <Route path="/request" element={<RequestNew />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admindonatepage" element={<AdminDonationPage />} />
        <Route path="/adminrequestpage" element={<AdminRequestPage />} />
      </Routes>
    </div>
  );
}
