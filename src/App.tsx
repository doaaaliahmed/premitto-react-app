import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Buy from "./Pages/Buy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buy" element={<Buy />} />
    </Routes>
  );
}

export default App;
