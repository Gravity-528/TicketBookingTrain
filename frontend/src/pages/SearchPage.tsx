import { SearchTrain } from "@/component_item/SearchTrain"
import TrainCard from "@/component_item/TrainCard"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import axios from "axios"


type StationType= {
  label:string,
  value:string
}

const SearchPage = () => {

  const [station,setStation]=useState<StationType[]>([])

  const fetchData=async()=>{
     const allStation=await axios.get("api/v1/fetchAllStation")
     setStation(allStation.data)
  }

  useEffect(()=>{
     fetchData()
  },[])
  return (
    <>
      <div className="flex flex-row justify-center text-2xl text-white mt-2"><div>Search Train</div></div>
      <div className="flex flex-row justify-between m-15">
        <SearchTrain station={station}/>
        <div className="text-white">To</div>
        <SearchTrain station={station}/>
      </div>
      <div className="flex flex-row justify-center items-center">
        <Button className="border border-white hover:bg-white hover:text-black">Search Train</Button>
      </div>
      <div><TrainCard/></div>
    </>
  )
}

export default SearchPage