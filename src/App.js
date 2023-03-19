import "./App.css";
import Home from "./pages/Home";
import Bike2 from "./pages/Bike2";
import Bike3 from "./pages/Bike3";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bike-zone-2" element={<Bike2 />}></Route>
        <Route path="/bike-zone-3" element={<Bike3 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
