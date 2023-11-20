'use client'
import BookingsCard from '@/components/Dashboard/BookingsCard'
import Login from '@/components/Dashboard/Login'
import MessagesCard from '@/components/Dashboard/MessagesCard'
import { Button } from '@/components/ui/button'

import { FireAuth } from '@/lib/Firebase'
import { getMessages } from '@/lib/actions'
import { useAuthState } from 'react-firebase-hooks/auth'

const DashBoardHome = () => {
    const [user] = useAuthState(FireAuth);

    if (user) {
        return (
            <div className="flex gap-4 flex-wrap justify-around">
                <MessagesCard />
                <BookingsCard />


            </div>)
    }
    else
        return (
            <>

                <Login />

            </>
        )
}

export default DashBoardHome