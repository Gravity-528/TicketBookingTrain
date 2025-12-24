import { Button } from '../components/ui/button'
import { useState } from 'react'

type SeatType = {
  seatNo: string,
  price: number,
  status: 'available'
}

const SeatLayout = () => {
  const [SelectSeat, SetSelectSeat] = useState<SeatType[]>([]);

  //-------mimick
  let seat: SeatType[] = []

  for (let i = 0; i < 5; i++) {
    for (let j = 1; j <= 5; j++) {
      let ch = String.fromCharCode(65 + i)

      const seatObj: SeatType = {
        seatNo: `${ch}${j}`,
        price: (i + 1) * 100,
        status: 'available'
      }
      seat.push(seatObj)
    }
  }

  let seat2: SeatType[] = []

  for (let i = 0; i < 5; i++) {
    for (let j = 6; j <= 10; j++) {
      let ch = String.fromCharCode(65 + i)

      const seatObj: SeatType = {
        seatNo: `${ch}${j}`,
        price: (i + 1) * 100,
        status: "available"
      }
      seat2.push(seatObj)
    }
  }
  //-------
  const isSelected = (seatNo: string) =>
    SelectSeat.some(s => s.seatNo === seatNo)

  const setSeat = (obj: SeatType) => {
    SetSelectSeat(prev =>
      prev.some(s => s.seatNo === obj.seatNo)
        ? prev.filter(s => s.seatNo !== obj.seatNo) // unselect
        : [...prev, obj]                            // select
    )
  }


  return (
    <div className='w-full min-h-screen flex flex-row items-center justify-center gap-6 '>
      <div className='grid grid-cols-5 gap-5 p-4 border border-white'>
        {seat.map((x) => {
          return (
            <Button className={`bg-white text-black w-8 h-8 ${isSelected(x.seatNo)
              ? 'bg-yellow-400 hover:bg-yellow-400'
              : 'bg-white hover:bg-green-400'} ${x.status === "available" && isSelected(x.seatNo)==false && "hover:bg-green-400"} ${x.status !== "available" && "bg-yellow-400"}`} disabled={x.status !== "available"} onClick={() => setSeat(x)}>{x.seatNo}</Button>
          )
        })}
      </div>
      <div className='grid grid-cols-5 gap-5 p-4 border border-white'>
        {seat2.map((x, ind) => {
          return (
            <Button className={`bg-white text-black w-8 h-8 ${isSelected(x.seatNo)
              ? 'bg-yellow-400'
              : 'bg-white hover:bg-green-400'} ${x.status === "available" && "hover:bg-green-400"} ${x.status !== "available" && "bg-yellow-400"}`} disabled={x.status !== "available"} onClick={() => setSeat(x)}>{x.seatNo}</Button>
          )
        })}
      </div>
    </div>
  )
}

export default SeatLayout