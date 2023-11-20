'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { db } from "@/lib/Firebase";
import { cn } from "@/lib/utils"
import { messagesCollection } from "@/lib/Firebase";
import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";


const MessagesCard = ({ messagesList }) => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['messages1'],
        refetchOnMount: 'always',
        initialData: messagesList,
        queryFn: async () => await fetch('/api/messages', { cache: 'no-store' }).then((res) => res.json()),
    })

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

        return (
            <Card className={cn("w-full md:min:w-[300px] max-w-sm px-4 h-[250px]")}>
                <CardTitle>Error Occured</CardTitle>
                <CardDescription>
                    <p className="text-red-400 text-base font-light">{error.message}</p>
                </CardDescription>
            </Card>
        )
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
                                <h1 className="text-3xl font-bold">Total: {data?.length}</h1>
                                <p className="text-lg font-semibold text-lime-800 ">Read: {data?.filter((item) => (item.status === "read")).length}</p>
                                <p className="text-lg font-semibold text-yellow-400 ">Unread: {data.filter((item) => (item.status === "unread")).length}</p>
                            </>
                        )
                    }

                </CardContent>
            </Card>


        )
    }
}


export default MessagesCard