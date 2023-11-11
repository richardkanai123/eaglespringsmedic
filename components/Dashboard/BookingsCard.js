'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { db } from "@/lib/Firebase";
import { cn } from "@/lib/utils"
import { BookingsCollection } from "@/lib/Firebase";
import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";


const BookingsCard = () => {


    const { data, isLoading, error } = useQuery({ queryKey: ['bookings'], queryFn: async () => await fetch('/api/bookings').then((res) => res.json()), })

    if (isLoading) {

        return <p>Loading Booking Data ...</p>
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
                                <p className="text-lg font-semibold text-lime-800 ">
                                    Confirmed   : {data?.data.filter((item) => (item.status === "confirmed")).length}
                                </p>
                                <p className="text-lg font-semibold text-yellow-400 ">
                                    Pending: {data?.data.filter((item) => (item.status === "pending")).length}
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