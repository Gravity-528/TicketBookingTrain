import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CouponItem = {
    couponId: string,
    couponName: string,
    discount: number,
    type: string,
    min_fare: number,
    selected: Boolean
}

type AllCoupon = {
    selectedCoupon: CouponItem
    AllCoupon: CouponItem[]
}

const initialState: AllCoupon = {
    selectedCoupon: {
        couponId: "",
        couponName: "Not Selected",
        discount: 0,
        type: "Not Applicable",
        min_fare: 0,
        selected: false
    },
    AllCoupon: []
}

const SelectedCouponSlice = createSlice({
    name: "couponSelected",
    initialState,
    reducers: {
        setAllCoupons: (state: AllCoupon, action: PayloadAction<CouponItem[]>) => {
            state.AllCoupon = action.payload
        },
        SelectCoupon: (state: AllCoupon, action: PayloadAction<CouponItem>) => {
            let id = action.payload.couponId
            let arr = state.AllCoupon

            for (let i = 0; i < arr.length; i++) {
                if (arr[i].couponId == id) {
                    arr[i].selected = true
                    state.selectedCoupon=arr[i]
                    continue
                }
                else{
                    arr[i].selected=false
                }
            }
            
        }
    }
})


export const { setAllCoupons,SelectCoupon } = SelectedCouponSlice.actions
export default SelectedCouponSlice.reducer