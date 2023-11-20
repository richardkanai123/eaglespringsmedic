import BookingsLister from '@/components/Dashboard/BookingsLister'
import React, { Suspense } from 'react'

const BookingsPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/bookings`, {
        cache: 'no-store'
    })

    if (!res.ok) {
        throw new Error("fetch error occured")
    }
    const data = await res.json()

    return (
        <>

            <h3 className="text-xl font-bold text-center">Booking Cards </h3>

            <Suspense
                fallback={<p>Loading all bookings ...</p>}
            >
                <BookingsLister Bookings={data} />
            </Suspense>
        </>
    )
}

export default BookingsPage