import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppRoutes from "./routes/Approutes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  

useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  return (
    <>
      <Router>
      <AppRoutes />
    </Router>
    </>
  );
}

export default App;
