import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import {SearchTrain} from "./component_item/SearchTrain"
// import SearchPage from "./pages/SearchPage";
import SeatLayout from "./component_item/SeatLayout";
import OrderPage from "./pages/OrderPage";
// import CouponCard from "./component_item/CouponCard";
// import OrderSummary from "./component_item/OrderSummary";
// import OrderPage from "./pages/OrderPage";
import SearchPage from "./pages/SearchPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage/>}/>
        <Route path="/seatLayout" element={<SeatLayout/>} />
        <Route path="/BookingConfirm" element={<OrderPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
