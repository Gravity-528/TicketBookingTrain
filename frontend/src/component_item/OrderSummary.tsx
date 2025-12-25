import { Button } from "@/components/ui/button"
import type { CouponProp } from "./CouponCard"
import { useSelector,useDispatch } from "react-redux"
import type { RootState } from "@/redux/store"

type seat = {
    seatId: string,
    price: number
}

type SeatProp = {
     seatBook: Array<seat>,
     CouponApplied: CouponProp
}

type OrderSummaryProps = {
    arr: SeatProp
}

const OrderSummary = ({arr}:OrderSummaryProps) => {
    const dispatch=useDispatch()

    const seat=useSelector(
        (state:RootState)=> state.seatSelected.seatsSelected
    )
    const total=useSelector(
        (state:RootState)=> state.seatSelected.totalPrice
    )
    const AppliedCoupon=useSelector(
        (state:RootState)=> state.couponSelected.selectedCoupon
    )
    // console.log(arr)
    let sum=0
    const color = [{ type: "A", color: "bg-blue-300" }, { type: "B", color: "bg-green-400" },
    { type: "C", color: "bg-yellow-400" }, { type: "D", color: "bg-orange-400" },
    { type: "E", color: "bg-purple-400" }]

    return (
        <div className="flex flex-row justify-center mx-16">
            <div className="text-white w-500 h-auto border border-white px-5 rounded-lg bg-[var(--background-soft)]">
                <div className="flex justify-center text-4xl m-4"><div>Booking Summary</div></div>
                <div className="m-4">Seat To be Booked: {seat.map((x) => {
                    let ch=x.seatNo[0]
                    const val=color.find(item => item.type === ch);
                    sum=sum+x.price;
                    return (
                        <span className={`${val?.color} m-2 w-4 h-4 p-2`}>{x.seatNo}</span>
                    )
                })}</div>
                <div className="m-4">Coupon Applied: <span>{AppliedCoupon.couponName}</span></div>
                <div className="flex flex-row justify-between m-4">
                    <div>
                        <div>Total Discount: {AppliedCoupon.discount}</div>
                        <div>Type of Discount: {AppliedCoupon.type}</div>
                    </div>
                    <div>Total: {total-AppliedCoupon.discount}</div>
                </div>
                <div className="flex flex-row justify-end gap-2 m-4">
                    <div><Button className="border border-white hover:bg-white hover:text-black">Edit</Button></div>
                    <div><Button className="border border-white hover:bg-white hover:text-black">Proceed</Button></div>
                </div>

            </div>
        </div>
    )
}

export default OrderSummary