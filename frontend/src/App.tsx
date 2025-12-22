import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {SearchTrain} from "./component_item/SearchTrain"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchTrain/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
