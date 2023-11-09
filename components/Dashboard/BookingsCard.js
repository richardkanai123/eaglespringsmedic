'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { db } from "@/lib/Firebase";
import { cn } from "@/lib/utils"
import { BookingsCollection } from "@/lib/Firebase";
import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";


const BookingsCard = () => {

    const [allBookings, setallBookings] = useState(null)
    const [fetchError, setfetchError] = useState()
    const [isLoadingData, setISLoadingData] = useState(false)
    const [pendingBookingsCount, setPendingBookingsCount] = useState(0)
    const [ConfirmedBooking, setConfirmedBooking] = useState(0)

    useEffect(() => {
        const fetchMessages = async () => {
            setISLoadingData(true)
            try {
                const querySnapshot = await getDocs(BookingsCollection)
                    .then((snapshot) => {
                        const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                        setallBookings(data)
                        setPendingBookingsCount(data.filter((item) => (item.status === "pending")).length)
                        setConfirmedBooking(data.filter((item) => (item.status === "confirmed")).length)
                        setISLoadingData(false)

                    }
                    )
            } catch (error) {
                setISLoadingData(false)
                setfetchError(error)
            }
        }
        return () => fetchMessages()
    }, [])


    if (allBookings) {
        console.log(allBookings)
    }
    return (
        <Card className={cn("w-full md:min:w-[300px] max-w-sm h-[250px]")}>
            <CardHeader>
                <CardTitle >
                    Bookings
                </CardTitle>
                <CardDescription className='text-sm'>
                    Booking data Sent Booking Form
                </CardDescription>
            </CardHeader>
            <CardContent>
                {

                    isLoadingData && <p>Loading data....</p>
                }

                {
                    (!isLoadingData && allBookings) && <h1 className="text-3xl font-bold">Total: {allBookings.length}</h1>
                }
                <p className="text-lg font-semibold text-lime-800 ">Read: {pendingBookingsCount}</p>
                <p className="text-lg font-semibold text-yellow-400">Unread: {ConfirmedBooking} </p>
            </CardContent>
        </Card>
    )
}

export default BookingsCard