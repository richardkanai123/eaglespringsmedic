import React, { useState } from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { doc, updateDoc } from 'firebase/firestore'
import { BookingsCollection } from '@/lib/Firebase'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { BookmarkPlus } from "lucide-react"
import { SendEmail } from '@/lib/actions'

const PendingBookingCard = ({ item, FetchNew }) => {
    const [time, setTime] = useState()
    const [isConfirming, setIsConfirming] = useState(false)

    const Router = useRouter()
    return (
        <Card className={cn('w-full md:min-w-[320px] max-w-sm min-h-[200px]  ')} key={item.id}>
            <CardHeader className={cn('w-full flex flex-row justify-between items-center')}>
                <h3>Name: {item.name}</h3>
                <span> <BookmarkPlus className='text-yellow-200 w-8 h-8' /></span>
            </CardHeader>
            <CardContent className={cn('gap-2')}>
                <span className='text-xs italic font-thin'>{item.email}</span>
                <p>Contact: {item.phoneNumber}</p>
                <p className="text-base underline font-light">
                    Date: {new Date((item.date.seconds * 1000) + ((item.date.nanoseconds) / 1000000000)).toLocaleDateString()}
                </p>

                <p className="text-base gap-2 font-normal">
                    Department: {item.department}
                </p>

                <div className="w-full px-1 mt-3 flex items-center gap-1">
                    <span className="p-1 rounded font-semibold text-base text-sky-400">{item.status}</span>
                    <input
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        type="time" className="rounded bg-background" />
                    {

                        isConfirming ? (<p className={cn('animate-pulse italic p-1 bg-slate-500 rounded')}>Confirming ....</p>)
                            : (<Button
                                onClick={async () => {
                                    const docRef = doc(BookingsCollection, item.id)
                                    try {

                                        if (!time) {
                                            toast.error('Time Must be Set!')
                                            return;
                                        }

                                        setIsConfirming(true)
                                        await updateDoc(docRef, {
                                            scheduleTime: time,
                                            status: 'confirmed'
                                        })
                                            .then(() => {
                                                SendEmail(item.name, new Date((item.date.seconds * 1000) + ((item.date.nanoseconds) / 1000000000)).toLocaleDateString(), time, item.department, item.email)
                                            })
                                            .then(() => {
                                                toast.success(`Booking by ${item.name} confirmed for ${time}`);
                                                setIsConfirming(false)
                                            })
                                            .then(() => FetchNew())
                                    } catch (error) {
                                        toast.error(error.message)
                                    }
                                }}>Confirm</Button>)
                    }
                </div>
            </CardContent>
        </Card >
    )
}

export default PendingBookingCard