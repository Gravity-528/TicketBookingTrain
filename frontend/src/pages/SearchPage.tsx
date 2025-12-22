import { SearchTrain } from "@/component_item/SearchTrain"
import { Button } from "@/components/ui/button"

const SearchPage = () => {
  return (
    <>
    <div className="flex flex-row justify-between m-15">
        <SearchTrain/>
        <div className="text-white">To</div>
        <SearchTrain/>
    </div>
    <div className="flex flex-row justify-center items-center">
            <Button className="border border-white hover:bg-white hover:text-black">Search Train</Button>
    </div>
    </>
  )
}

export default SearchPage