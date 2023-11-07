'use client'
import DashNav from '@/components/DashNav'
import BookingsCard from '@/components/Dashboard/BookingsCard'
import Login from '@/components/Dashboard/Login'
import MessagesCard from '@/components/Dashboard/MessagesCard'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { FireAuth } from '@/lib/Firebase'
import { cn } from '@/lib/utils'
import Link from 'next/link'
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