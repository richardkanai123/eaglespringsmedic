'use client'
import BookingsCard from '@/components/Dashboard/BookingsCard'
import Login from '@/components/Dashboard/Login'
import MessagesCard from '@/components/Dashboard/MessagesCard'

import { FireAuth } from '@/lib/Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const DashBoardHome = () => {
    const [user, loading, error] = useAuthState(FireAuth);

    if (user) {
        return (
            <div className="flex gap-4 flex-wrap justify-around">
                <MessagesCard />
                <BookingsCard />

            </div>)
    }
    return (
        <>

            <Login />

        </>
    )
}

export default DashBoardHome