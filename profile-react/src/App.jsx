import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sanny from "./pages/Sanny";
import Nadar from "./pages/Nadar";
import Hafez from "./pages/Hafez";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sanny" element={<Sanny />} />
      <Route path="/nadar" element={<Nadar />} />
      <Route path="/hafez" element={<Hafez />} />
    </Routes>
  );
}

export default App;