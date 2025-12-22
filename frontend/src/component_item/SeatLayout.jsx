import React from 'react'
import {Button} from '../components/ui/button'


const SeatLayout = () => {
  let seat=[]

  for(let i=0;i<5;i++){
    for(let j=1;j<=5;j++){
      let ch=String.fromCharCode(65+i)

      const seatObj={
        seatNo:`${ch}${j}`,
        price:(i+1)*100,
        status:'available'
      }
      seat.push(seatObj)
    }
  }

  let seat2=[]

  for(let i=0;i<5;i++){
    for(let j=6;j<=10;j++){
      let ch=String.fromCharCode(65+i)

      const seatObj={
        seatNo:`${ch}${j}`,
        price:(i+1)*100
      }
      seat2.push(seatObj)
    }
  }

  // console.log(seat)
  return (
    <div className='w-full min-h-screen flex flex-row items-center justify-center border-white gap-6 '>
      <div className='grid grid-cols-5 gap-5 p-4'>
        {seat.map((x,ind)=>{
           return(
            <Button className={`bg-white text-black w-8 h-8 ${x.status==="available" && "hover:bg-green-400"} ${x.status !== "available" && "bg-yellow-400"}`} disabled={x.status!=="available"}>{x.seatNo}</Button>
           )
        })}
      </div>
      <div className='grid grid-cols-5 gap-5 p-4'>
        {seat.map((x,ind)=>{
           return(
            <Button className={`bg-white text-black w-8 h-8 ${x.status==="available" && "hover:bg-green-400"} ${x.status !== "available" && "bg-yellow-400"}`} disabled={x.status!=="available"}>{x.seatNo}</Button>
           )
        })}
      </div>
    </div>
  )
}

export default SeatLayout