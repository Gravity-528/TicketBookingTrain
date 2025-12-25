import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type SeatItem={
    seatNo:string,
    price:number,
    status:string
}

type SeatInfo={
    seatsSelected:SeatItem[],
    totalPrice:number
}

const initialState:SeatInfo={
    seatsSelected:[],
    totalPrice:0
}

const seatSlice=createSlice({
    name:"SeatBook",
    initialState,
    reducers:{
        addSeat:(state:SeatInfo,action:PayloadAction<SeatItem>)=>{
            let ch=state.seatsSelected.some(item=> item.seatNo===action.payload.seatNo)
            if(ch==true){return}
            state.seatsSelected.push(action.payload)
            state.totalPrice+=action.payload.price
        },
        removeSeat:(state:SeatInfo,action:PayloadAction<SeatItem>)=>{
           state.seatsSelected=state.seatsSelected.filter(item=> item.seatNo!=action.payload.seatNo)
           state.totalPrice-=action.payload.price
        },
        clearState:(state:SeatInfo)=>{
           state.seatsSelected=[]
           state.totalPrice=0
        }
    }
})

export const {addSeat,removeSeat,clearState}=seatSlice.actions
export default seatSlice.reducer