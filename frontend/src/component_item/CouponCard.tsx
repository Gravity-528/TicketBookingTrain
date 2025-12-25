import { useEffect, useState} from "react"
import { Button } from "@/components/ui/button"
import { Percent } from "lucide-react"
import { useDispatch,useSelector } from "react-redux"
import type { RootState } from "../redux/store"
import { SelectCoupon ,clearCouponSelected} from "@/redux/slice/SelectedCouponSlice"
import type { CouponAction } from "@/type/coupon/coupon"

export type CouponProp={
    couponId:string,
    couponName:string,
    discount: number,
    type:string,
    expire_by: string,
    min_fare:number
}

const CouponCard = (props:CouponProp) => {
    const dispatch=useDispatch()
    const coupon=useSelector(
            (state:RootState)=> state.couponSelected.AllCoupon
        )
    const select=useSelector(
        (state:RootState)=> state.couponSelected.selectedCoupon
    )
    const [selected,setSelected]=useState<Boolean>(false)

    const Toggle=()=>{
        const obj:CouponAction={
            coupon:props,
            status:!selected
        }
          dispatch(SelectCoupon(obj))
        if(selected==true){
          dispatch(clearCouponSelected())
        }
    }

    useEffect(()=>{
      console.log("coupon is",select)
    },[coupon,select])

    useEffect(()=>{
       let ch=coupon.some(x=>x.couponId===props.couponId && x.selected==true)
       if(ch==true){
         setSelected(true)
       }else{
        setSelected(false)
       }
    },[coupon])

    return (
        <div>
            <div className = {`h-24 bg-[var(--background-soft)] ${selected==true && "bg-green-100"} ${selected==true ? "border-4 border-green-500" : "border border-white"} ${selected==true ? "text-black": "text-white" } flex flex-row justify-between rounded-sm mx-8 my-4`}>
                <div className="flex flex-row gap-2 m-2">
                <div className="flex flex-col justify-center items-center m-2"><Percent className={`${selected==true ?"bg-green-600" :"bg-yellow-400"} text-black h-8 w-8`}></Percent></div>
                <div>
                    <div className="text-2xl">{props.couponName} : <span className={selected ? "text-green-400" : "text-yellow-400"}>{selected==true ? "Saved" : "Save"} {props.discount} {props.type==="FLAT"?" rupees":" %"}</span> <span className={`bg-green-500 text-black font-light rounded-sm ${selected==false && "hidden"}`}>applied</span></div>
                    <div>{props.type} {props.discount} {props.type==="FLAT"?" rupees":" %"} on tickets above {props.min_fare} </div>
                    <p>Expires {props.expire_by}</p>
                </div>
                </div>
                <div className="flex flex-col justify-center items-center m-4"><Button className={`${selected==true? "bg-green-600 text-white hover:bg-red-500 hover:text-black":"border border-white/30 text-white hover:bg-yellow-400 hover:text-black bg-[var(--background)]"}`} onClick={Toggle}>{selected==true?"Remove":"+ Apply coupon"} </Button></div>
            </div>
        </div>
    )
}

export default CouponCard