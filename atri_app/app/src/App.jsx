import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Homepage from "./pages/Homepage.jsx";
import Trial from "./pages/Trial.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/Assignment/Homepage" element={<Homepage />} />
<Route path="/Assignment/trial" element={<Trial />} />
    </Routes>
  );
}
