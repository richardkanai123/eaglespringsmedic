'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { db } from "@/lib/Firebase";
import { cn } from "@/lib/utils"
import { BookingsCollection } from "@/lib/Firebase";
import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";


const BookingsCard = () => {


    const { data, isLoading, error } = useQuery({
        queryKey: ['bookings'],
        refetchOnMount: 'always',
        queryFn: async () => await fetch('/api/bookings', { cache: 'no-store' }).then((res) => res.json()),
    })

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

        return <p>{error.message}</p>
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
                                    Total: {data?.data.length}
                                </h1>
                                <p className="text-lg font-semibold text-yellow-800 ">
                                    Confirmed   : {data?.data.filter((item) => (item.status === "confirmed")).length}
                                </p>
                                <p className="text-lg font-semibold text-red-300 ">
                                    Pending: {data?.data.filter((item) => (item.status === "pending")).length}
                                </p>
                                <p className="text-lg font-semibold text-lime-400 ">
                                    Completed: {data?.data.filter((item) => (item.status === "completed")).length}
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