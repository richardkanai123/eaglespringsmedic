'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { BookingsCollection } from "@/lib/Firebase";
import { getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";


const BookingsCard = () => {
    const [isLoading, setisLoading] = useState(false)
    const [error, setError] = useState()
    const [data, setData] = useState()

    const FetchBookings = async () => {
        setisLoading(true)
        const messagesQuery = query(BookingsCollection, orderBy('department'))
        const unsub = await getDocs(messagesQuery)
        try {
            const data = unsub.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setisLoading(false)
            setData(data)
            return data
        } catch (error) {
            setisLoading(false)
            setError(error)
            return error.message

        }
    }

    useEffect(() => {
        FetchBookings()

        return () => FetchBookings()
    }, [])

    if (isLoading) {

        return (
            <Card className={cn("w-full md:min:w-[300px] max-w-sm h-[200px] items-center border-4")}>
                <CardHeader>
                    <CardTitle >
                        Bookings
                    </CardTitle>
                    <CardDescription className='text-sm'>
                        Booking data Sent Booking Form
                    </CardDescription>
                </CardHeader>
                <CardContent className={cn('p-1 bg-slate-300 animate-pulse rounded-md')}>Loading Bookings data ...</CardContent>
            </Card>
        )
    }

    if (error) {

        return (
            <Card className={cn("w-full md:min:w-[300px] max-w-sm px-4 h-[250px]")}>
                <CardTitle>Error Occured</CardTitle>
                <CardDescription>
                    <p className="text-red-400 text-base font-light">{error.message}</p>
                </CardDescription>
            </Card>
        )
    }

    if (data) {
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
                        !isLoading && data && (
                            <>
                                <h1 className="text-3xl font-bold">
                                    Total: {data?.length}
                                </h1>
                                <p className="text-lg font-semibold text-yellow-800 ">
                                    Confirmed   : {data?.filter((item) => (item.status === "confirmed")).length}
                                </p>
                                <p className="text-lg font-semibold text-red-300 ">
                                    Pending: {data?.filter((item) => (item.status === "pending")).length}
                                </p>
                                <p className="text-lg font-semibold text-lime-400 ">
                                    Completed: {data?.filter((item) => (item.status === "completed")).length}
                                </p>


                            </>
                        )
                    }
                </CardContent>
            </Card>
        )
    }
}

export default BookingsCard