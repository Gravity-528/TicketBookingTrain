import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import {SearchTrain} from "./component_item/SearchTrain"
// import SearchPage from "./pages/SearchPage";
import SeatLayout from "./component_item/SeatLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SeatLayout/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
