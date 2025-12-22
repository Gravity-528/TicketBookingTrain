import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SeatLayout from "./component_item/SeatLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SeatLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
