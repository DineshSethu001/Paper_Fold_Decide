import { Routes, Route } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import Decide from "../components/Decide/jsx";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/decide" element={<Decide />} />
    </Routes>
  );
}
