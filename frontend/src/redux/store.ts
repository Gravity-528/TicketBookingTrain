import { configureStore } from "@reduxjs/toolkit"
import SelectedCouponReducer from "./slice/SelectedCouponSlice"
import SeatReducer from "./slice/SeatSlice"

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export const store = configureStore({
  reducer: {
    couponSelected: SelectedCouponReducer,
    seatSelected:SeatReducer
  }
})
