'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { db } from "@/lib/Firebase";
import { cn } from "@/lib/utils"
import { messagesCollection } from "@/lib/Firebase";
import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
const MessagesCard = () => {

    const [allMessages, setAllMessages] = useState([])
    const [fetchError, setfetchError] = useState()
    const [isLoadingData, setISLoadingData] = useState(false)
    const [readMessagesCount, setReadMessagesCount] = useState(0)
    const [unReadMessagesCount, setUnReadMessagesCount] = useState(0)

    // useEffect(() => {
    //     const fetchMessages = async () => {
    //         setISLoadingData(true)
    //         try {
    //             const querySnapshot = await getDocs(messagesCollection)
    //                 .then((snapshot) => {
    //                     const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    //                     setAllMessages(data)
    //                     setReadMessagesCount(data.filter((item) => (item.status === "read")).length)
    //                     setUnReadMessagesCount(data.filter((item) => (item.status === "unread")).length)
    //                     setISLoadingData(false)
    //                 }
    //                 )
    //         } catch (error) {
    //             setISLoadingData(false)
    //             setfetchError(error)
    //         }
    //     }
    //     return () => fetchMessages()
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])


    // const getMessages = async () => {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    //     const data = await response.json()

    //     return data

    // }
    const { data, isLoading, error } = useQuery({ queryKey: ['messages1'], queryFn: async () => await fetch('/api/messages').then((res) => res.json()), })

    if (isLoading) {

        return <p>Loading data</p>
    }

    if (error) {

        return <p>{error.message}</p>
    }

    if (data) {
        // setAllMessages(data?.data)
        return (
            <Card className={cn("w-full md:min:w-[300px] max-w-sm h-[250px]")}>
                <CardHeader>
                    <CardTitle >
                        Messages
                    </CardTitle>
                    <CardDescription className='text-sm'>Messages Sent from Contact form</CardDescription>
                </CardHeader>
                <CardContent>
                    Total:
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