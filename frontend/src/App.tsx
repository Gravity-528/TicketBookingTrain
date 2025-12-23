import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import {SearchTrain} from "./component_item/SearchTrain"
// import SearchPage from "./pages/SearchPage";
// import SeatLayout from "./component_item/SeatLayout";
// import CouponCard from "./component_item/CouponCard";
import OrderSummary from "./component_item/OrderSummary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrderSummary/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
