// import OrderSummary from "@/component_item/OrderSummary"

const OrderPage = () => {
    const arr = {
        seatBook: [{ seatId: "A1", price: 200 }, { seatId: "B1", price: 400 }, { seatId: "C1", price: 300 }
            , { seatId: "D1", price: 600 }, { seatId: "E1", price: 300 }
        ],
        CouponApplied: {
            couponId: "abcde",
            couponName: "HOLIDAY21",
            discount: 500,
            type: "FLAT",
            expire_by: "30 dec 2025",
            min_fare: 300
        }
    }
    return (
        <div>
            {/* <OrderSummary /> */}
        </div>
    )
}

export default OrderPage