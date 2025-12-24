import { Button } from '../components/ui/button'
import { useState } from 'react'

type SeatType={
  seatNo:string,
  price:number,
  status: 'available'
}

const SeatLayout = () => {
  const [SelectSeat, SetSelectSeat] = useState<SeatType[]>([]);
  let seat:SeatType[] = []

  for (let i = 0; i < 5; i++) {
    for (let j = 1; j <= 5; j++) {
      let ch = String.fromCharCode(65 + i)

      const seatObj:SeatType = {
        seatNo: `${ch}${j}`,
        price: (i + 1) * 100,
        status: 'available'
      }
      seat.push(seatObj)
    }
  }

  let seat2:SeatType[] = []

  for (let i = 0; i < 5; i++) {
    for (let j = 6; j <= 10; j++) {
      let ch = String.fromCharCode(65 + i)

      const seatObj:SeatType = {
        seatNo: `${ch}${j}`,
        price: (i + 1) * 100,
        status:"available"
      }
      seat2.push(seatObj)
    }
  }

  const setSeat = (obj: SeatType) => {
    SetSelectSeat(prev => {
      if (prev.some(s => s.seatNo === obj.seatNo)) return prev
      return [...prev, obj]
    })
    
  }


  return (
    <div className='w-full min-h-screen flex flex-row items-center justify-center gap-6 '>
      <div className='grid grid-cols-5 gap-5 p-4 border border-white'>
        {seat.map((x, ind) => {
          return (
            <Button className={`bg-white text-black w-8 h-8 ${x.status === "available" && "hover:bg-green-400"} ${x.status !== "available" && "bg-yellow-400"}`} disabled={x.status !== "available"} onClick={()=>setSeat(x)}>{x.seatNo}</Button>
          )
        })}
      </div>
      <div className='grid grid-cols-5 gap-5 p-4 border border-white'>
        {seat2.map((x, ind) => {
          return (
            <Button className={`bg-white text-black w-8 h-8 ${x.status === "available" && "hover:bg-green-400"} ${x.status !== "available" && "bg-yellow-400"}`} disabled={x.status !== "available"} onClick={()=>setSeat(x)}>{x.seatNo}</Button>
          )
        })}
      </div>
    </div>
  )
}

export default SeatLayout