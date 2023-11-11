'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { db } from "@/lib/Firebase";
import { cn } from "@/lib/utils"
import { messagesCollection } from "@/lib/Firebase";
import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
const MessagesCard = () => {

    const { data, isLoading, error } = useQuery({ queryKey: ['messages1'], queryFn: async () => await fetch('/api/messages').then((res) => res.json()), })

    if (isLoading) {

        return (
            <Card className={cn("w-full md:min:w-[300px] max-w-sm h-[200px] items-center border-4")}>
                <CardHeader>
                    <CardTitle >
                        Messages
                    </CardTitle>
                    <CardDescription className='text-sm'>Messages Sent from Contact form</CardDescription>
                </CardHeader>
                <CardContent className={cn('p-1 bg-slate-300 animate-pulse rounded-md')}>Loading Messages data..</CardContent>
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
                        Messages
                    </CardTitle>
                    <CardDescription className='text-sm'>Messages Sent from Contact form</CardDescription>
                </CardHeader>
                <CardContent>
                    {
                        isLoading && <p>Loading data...</p>
                    }

                    {
                        !isLoading && data && (
                            <>
                                <h1 className="text-3xl font-bold">Total: {data?.data.length}</h1>
                                <p className="text-lg font-semibold text-lime-800 ">Read: {data?.data.filter((item) => (item.status === "read")).length}</p>
                                <p className="text-lg font-semibold text-yellow-400 ">Pending: {data?.data.filter((item) => (item.status === "unread")).length}</p>


                            </>
                        )
                    }

                </CardContent>
            </Card>


        )
    }
}


export default MessagesCard