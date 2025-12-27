import React, { useEffect } from 'react'
// import {Card} from "../components/ui/card"
import axios from "axios"
import {
    Card,
    CardAction,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import { Button } from '../components/ui/button'
import trainLogo from "../assets/trainLogo.png"

const TrainCard = () => {

    return (
        <div>
            {/* <div className="text-white">TrainCard</div> */}
            <Card className='bg-yellow-300 mx-15 mt-6'>
                <CardHeader className='flex justify-between'>
                    <CardTitle className='text-3xl'>Bangalore to Hydrabad station</CardTitle>
                    {/* <img src={trainLogo} className='w-20 h-20'/> */}
                    <div>Train Name</div>
                </CardHeader>
                <CardContent>
                    <p className='text-2xl'>price:500 rupees</p>
                    <p className='text-2xl'>time of arrival: 8:00 pm</p>
                    <p className='text-2xl'>platform: 5</p>
                </CardContent>
                <CardFooter className='w-full flex flex-row'>
                    <CardAction><Button className='hover:bg-yellow-700'>Book Now</Button></CardAction>
                </CardFooter>
            </Card>
        </div>
    )
}

export default TrainCard