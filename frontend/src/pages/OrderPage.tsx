import { useDispatch,useSelector } from "react-redux"
import { addCoupon, SelectCoupon } from "../redux/slice/SelectedCouponSlice"
import CouponCard from "@/component_item/CouponCard"
import OrderSummary from "@/component_item/OrderSummary"
import SearchCoupon from "@/component_item/SearchCoupon"
import {useState,useEffect} from "react"
import type { RootState } from "@/redux/store"

const OrderPage = () => {
    
    const dispatch = useDispatch()
    const coup=useSelector(
        (state:RootState)=> state.couponSelected.AllCoupon
    )
    //----------------------mimic-----------------------------------------------------------
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
    const coupon=[
            {
                couponId: "1",
                couponName: "HOLIDAY21",
                discount: 500,
                type: "FLAT",
                expire_by: "30 dec 2025",
                min_fare: 300,
                selected:false
            },
            {
                couponId: "2",
                couponName: "HOLIDAY21",
                discount: 500,
                type: "FLAT",
                expire_by: "30 dec 2025",
                min_fare: 300,
                selected:false
            },
            {
                couponId: "3",
                couponName: "HOLIDAY21",
                discount: 500,
                type: "FLAT",
                expire_by: "30 dec 2025",
                min_fare: 300,
                selected:false
            },
            {
                couponId: "4",
                couponName: "HOLIDAY21",
                discount: 500,
                type: "FLAT",
                expire_by: "30 dec 2025",
                min_fare: 300,
                selected:false
            },
        ]
        //-----------------------------------------------------------------------------------

        useEffect(()=>{
        //   dispatch(setAllCoupons(coupon))
        coupon.forEach((item)=>{
            console.log(item)
            dispatch(addCoupon(item))
        })
        // console.log(coup)
        },[])
        // useEffect(()=>{
        //   console.log("coup is:",coup)
        // },[coup])

    return (
        <div>
            <div>
                <div className="flex flex-row justify-center"><div className="text-4xl text-white mb-15">Proceed Your Booking</div></div>
                <div>
                    <div className="flex justify-center">
                        <div className="text-3xl text-white my-5">Search Coupon</div>
                    </div>
                    <div className="flex flex-row justify-center"><p className="text-white">Enter Coupon to Search (for ex, ACT21 HOLIDAY22 etc....)</p></div>
                    <SearchCoupon />
                </div>

                <div className="mb-16"><OrderSummary arr={arr} /></div>
                <div>
                    <div className="flex flex-row justify-center"><div className="text-white">Available Coupons</div></div>
                    {/* <div><CouponCard {...arr.CouponApplied} /></div> */}
                    <div>{coupon.map((item)=>{
                        return(
                            <CouponCard {...item}/>
                        )
                    })}</div>
                </div>
            </div>
        </div>
    )
}

export default OrderPage