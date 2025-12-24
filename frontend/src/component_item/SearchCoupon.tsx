import { Button } from "@/components/ui/button"
import { InputGroupInput } from "@/components/ui/input-group"
import {SearchIcon} from "lucide-react"
const SearchCoupon = () => {
  return (
    <div>
        <div className="h-auto mx-8 mb-16">
            <div className="flex flex-row justify-center gap-16 border border-white mx-8 rounded-lg shadow-lg">
              <div><InputGroupInput placeholder="Enter Coupon Code" className="border border-white rounded-md w-100 text-white m-10" /><SearchIcon/></div>
              <div><Button className="border border-white hover:bg-yellow-400 hover:text-black m-10">Apply Cupon</Button></div>
            </div>
        </div>
    </div>
  )
}

export default SearchCoupon