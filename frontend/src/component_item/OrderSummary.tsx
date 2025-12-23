import { Button } from "@/components/ui/button"
import type { CouponProp } from "./CouponCard"

type seat = {
    seatId: string,
    price: number
}

type SeatProp = {
    arr:{
    seatBook: Array<seat>,
    CouponApplied: CouponProp
    }
}

const OrderSummary = ({arr}:SeatProp) => {
    
    let sum=0
    const color = [{ type: "A", color: "bg-blue-300" }, { type: "B", color: "bg-green-400" },
    { type: "C", color: "bg-yellow-400" }, { type: "D", color: "bg-orange-400" },
    { type: "E", color: "bg-purple-400" }]

    return (
        <div className="flex flex-row justify-center">
            <div className="text-white w-150 h-100 border border-white">
                <div className="flex justify-center text-4xl "><div>Booking Summary</div></div>
                <div>Seat To be Booked: {arr.seatBook.map((x) => {
                    let ch=x.seatId[0]
                    const val=color.find(item => item.type === ch);
                    sum=sum+x.price;
                    return (
                        <span className={`${val?.color} gap-1`}>{x.seatId}</span>
                    )
                })}</div>
                <div>Coupon Applied: <div>{arr.CouponApplied.couponName}</div></div>
                <div className="flex flex-row justify-end m-2"><div>Total: {sum}</div></div>
                <div className="flex flex-row justify-end gap-2">
                    <div><Button>Edit</Button></div>
                    <div><Button>Proceed</Button></div>
                </div>

            </div>
        </div>
    )
}

export default OrderSummary