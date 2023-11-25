'use client'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Timestamp, doc, updateDoc } from 'firebase/firestore'
import { BookingsCollection } from '@/lib/Firebase'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useState } from "react"
import { BookmarkCheck } from 'lucide-react'

const ConfirmedBookingCard = ({ item, FetchNew }) => {
    const Router = useRouter()

    const [isSetting, setIsSetting] = useState(false)

    async function CompleteBooking() {
        const docRef = doc(BookingsCollection, item.id)
        try {
            setIsSetting(true)
            await updateDoc(docRef, {
                status: 'completed',
                completed_at: Timestamp.fromDate(new Date())
            })
                .then(() => {
                    toast.success(`Booking by ${item.name} closed!`);
                    setIsSetting(false)
                })
                .then(() => FetchNew())

        } catch (error) {
            toast.error(error.message)
            setIsSetting(false)
        }
    }

    return (
        <Card className={cn('w-full md:min-w-[320px] max-w-sm min-h-[200px] ')} key={item.id}>
            <CardHeader className={cn('w-full flex flex-row justify-between items-center')}>
                <h3>Name: {item.name}</h3>
                <span> <BookmarkCheck className='text-lime-800 w-8 h-8' /></span>
            </CardHeader>
            <CardContent className={cn('gap-2')}>
                <p>Contact: {item.phoneNumber},  {item.email}</p>
                <p className="text-base underline font-light">
                    Date:{new Date((item.date.seconds * 1000) + ((item.date.nanoseconds) / 1000000000)).toLocaleDateString()}
                </p>

                <p className="text-base gap-2 font-normal">
                    Department: {item.department}
                </p>
                <div className="w-full px-1 mt-3 flex items-center gap-2">
                    <span className="p-1 rounded font-semibold text-base text-lime-400">Set at {item.scheduleTime} </span>

                    {
                        isSetting ? (<p className={cn('animate-pulse italic p-1 bg-slate-500 rounded ')}>Setting ....</p>) : (<Button onClick={() => CompleteBooking()} variant="destructive">Complete</Button>)
                    }
                </div>


            </CardContent>
        </Card>
    )
}

export default ConfirmedBookingCard