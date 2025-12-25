import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CouponItem = {
    couponId: string,
    couponName: string,
    discount: number,
    type: string,
    min_fare: number,
    expire_by:string,
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
        expire_by:"",
        selected: false
    },
    AllCoupon: []
}

const SelectedCouponSlice = createSlice({
    name: "couponSelected",
    initialState,
    reducers: {
        addCoupon:(state:AllCoupon,action:PayloadAction<CouponItem>)=>{
           let ch=state.AllCoupon.some(item=> item.couponId===action.payload.couponId)
           if(ch==true){return}

           state.AllCoupon.push(action.payload)
        },
        removeCoupon: (state:AllCoupon,action: PayloadAction<CouponItem>)=>{
           state.AllCoupon=state.AllCoupon.filter(item => item.couponId!==action.payload.couponId)
        },
        SelectCoupon: (state: AllCoupon, action: PayloadAction<any>) => {
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


export const { addCoupon,removeCoupon,SelectCoupon} = SelectedCouponSlice.actions
export default SelectedCouponSlice.reducer