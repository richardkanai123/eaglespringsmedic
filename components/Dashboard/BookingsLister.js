'use client'
import { useAuthState } from "react-firebase-hooks/auth"
import Login from "@/components/Dashboard/Login"
import { BookingsCollection, FireAuth } from "@/lib/Firebase"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import PendingBookingCard from "./PendingBookingCard"
import ConfirmedBookingCard from "./ConfirmedBookingCard"
import { useRouter } from "next/navigation"
import ErrorCard from "./ErrorCard"
import { getDocs, orderBy, query } from "firebase/firestore"


const BookingsLister = () => {
    const [user] = useAuthState(FireAuth)
    const [isLoading, setisLoading] = useState(false)
    const [error, setError] = useState()
    const [data, setData] = useState()



    const Router = useRouter()

    const FetchBookings = async () => {
        setisLoading(true)
        try {
            const BookingsQuery = query(BookingsCollection, orderBy('date'))
            const unsub = await getDocs(BookingsCollection)
            const data = unsub.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setisLoading(false)
            setData(data)
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
        return
        <p>Loading ...</p>
    }
    if (error) {

        return <ErrorCard error={error} />
    }

    if (!user) {
        return <Login />
    }

    if (data?.length <= 0) {
        return <p>No Bookings found</p>
    }

    if (data && !isLoading) {
        const pendingBookings = data?.filter((item) => item.status === 'pending')
        const confirmedBookings = data?.filter((item) => item.status === 'confirmed')
        return (
            <div className="w-full flex items-center  align-middle flex-wrap gap-4 justify-center px-4 py-2">
                {
                    pendingBookings ? (pendingBookings.map((bk) =>
                        <PendingBookingCard key={bk.id} FetchNew={FetchBookings} item={bk} />
                    )) : (<p>No Pending Bookings.</p>)
                }
                <br />
                {
                    confirmedBookings ? (confirmedBookings.map((bk) =>
                        <ConfirmedBookingCard key={bk.id} item={bk} FetchNew={FetchBookings} />
                    )) : ((<p>All confirmed bookings have been closed.</p>))
                }

                {
                    (pendingBookings.length == 0 && confirmedBookings.length == 0) && <p>No Bookings found</p>
                }

            </div>
        )
    }
}
export default BookingsLister