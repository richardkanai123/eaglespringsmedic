'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { db } from "@/lib/Firebase";
import { cn } from "@/lib/utils"
import { messagesCollection } from "@/lib/Firebase";
import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
const MessagesCard = () => {

    const [allMessages, setAllMessages] = useState([])
    const [fetchError, setfetchError] = useState()
    const [isLoadingData, setISLoadingData] = useState(false)
    const [readMessagesCount, setReadMessagesCount] = useState(0)
    const [unReadMessagesCount, setUnReadMessagesCount] = useState(0)

    useEffect(() => {
        const fetchMessages = async () => {
            setISLoadingData(true)
            try {
                const querySnapshot = await getDocs(messagesCollection)
                    .then((snapshot) => {
                        const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                        setAllMessages(data)
                        setReadMessagesCount(data.filter((item) => (item.status === "read")).length)
                        setUnReadMessagesCount(data.filter((item) => (item.status === "unread")).length)
                        setISLoadingData(false)
                        console.log(data);
                    }
                    )
            } catch (error) {
                setISLoadingData(false)
                setfetchError(error)
            }
        }
        return () => fetchMessages()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    if (allMessages) {
        console.log(allMessages)
    }

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

                    isLoadingData && <p>Loading data....</p>
                }

                {
                    !isLoadingData && <h1 className="text-3xl font-bold">Total: {allMessages.length}</h1>
                }
                <p className="text-lg font-semibold text-lime-800 ">Read: {readMessagesCount}</p>
                <p className="text-lg font-semibold text-yellow-400">Unread: {unReadMessagesCount} </p>
            </CardContent>
        </Card>
    )
}

export default MessagesCard