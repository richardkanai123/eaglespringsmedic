'use client'
import { useAuthState } from "react-firebase-hooks/auth"
import Login from "@/components/Dashboard/Login"
import { FireAuth } from "@/lib/Firebase"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import PendingBookingCard from "./PendingBookingCard"
import ConfirmedBookingCard from "./ConfirmedBookingCard"


const BookingsLister = ({ Bookings }) => {

    const [user, loading] = useAuthState(FireAuth)



    if (loading) {
        return <p className="p-2 text-xl font-normal bg-slate-600 animate-pulse">Loading Admin Data ....</p>
    }

    if (!user) {
        return <Login />
    }

    return (
        <div className="w-full flex items-center  align-middle flex-wrap gap-4 justify-center px-4 py-2">
            {
                (Bookings?.filter((item) => item.status === 'pending')).map((bk) =>
                    <PendingBookingCard key={bk.id} item={bk} />
                )
            }
            {
                (Bookings?.filter((item) => item.status === 'confirmed')).map((bk) =>
                    <ConfirmedBookingCard key={bk.id} item={bk} />
                )}
        </div>
    )
}

export default BookingsLister