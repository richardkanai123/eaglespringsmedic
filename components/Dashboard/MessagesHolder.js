'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FireAuth, db, messagesCollection } from "@/lib/Firebase"
import { cn } from "@/lib/utils"
import { format } from 'date-fns'
import { useAuthState } from "react-firebase-hooks/auth"
import Login from "@/components/Dashboard/Login"
import { Button } from "@/components/ui/button"
import { deleteDoc, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getMessages } from "@/lib/actions"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import ErrorCard from "./ErrorCard"


const MessagesHolder = () => {
    const [user] = useAuthState(FireAuth)
    const [isLoading, setisLoading] = useState(false)
    const [error, setError] = useState()
    const [data, setData] = useState()



    const Router = useRouter()

    const fetchMessages = async () => {
        setisLoading(true)
        try {
            const messagesQuery = query(messagesCollection, orderBy('status'))
            const unsub = await getDocs(messagesQuery)
            const data = unsub.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setisLoading(false)
            setData(data)
            return data
        } catch (error) {
            setisLoading(false)
            setError(error)
            return error.message

        }
    }

    useEffect(() => {
        fetchMessages()

        return () => fetchMessages()
    }, [])

    if (isLoading) {
        return
        <p>Loading ...</p>
    }
    if (error) {
        return <ErrorCard error={error} />
    }

    if (!user) {
        return <Login />
    }



    if (data?.length <= 0) {
        return <p>No messages found</p>
    }


    return (
        <div className="w-full">

            <Accordion type="single" collapsible className="w-full">
                {
                    data?.map((msg) => (
                        <AccordionItem key={msg.id} value={msg.id}>

                            <AccordionTrigger className={cn('w-full px-4 font-semibold  text-left')}>

                                <p className="flex gap-2 align-middle items-center  "> From: {msg.name}   {
                                    msg.status === 'read' ? <span className="p-1 bg-green-600 h-2 w-2 rounded-full"></span> : <span className="p-1 bg-yellow-600 h-2 w-2 rounded-full"></span>
                                }</p>

                            </AccordionTrigger>
                            <AccordionContent className={cn('px-3 py-1 bg-sky-200 dark:bg-slate-800  rounded ')}>
                                <p className="  text-base font-semibold mb-1">{msg.Message || msg.message}</p>
                                <p className="flex text-base font-medium flex-col">
                                    Contact: <span>{msg.email}</span> <span> {msg.phoneNumber}</span>
                                </p>
                                <p className="flex text-sm  flex-col">
                                    Sent on:
                                    {new Date((msg.time.seconds * 1000) + ((msg.time.nanoseconds) / 1000000000)).toLocaleDateString()} at {new Date((msg.time.seconds * 1000) + ((msg.time.nanoseconds) / 1000000000)).toLocaleTimeString()}
                                </p>
                                <div className="flex self-center p-2 align-middle">
                                    {
                                        msg.status === "unread" &&
                                        <Button
                                            onClick={async () => {
                                                try {
                                                    await setDoc(doc(db, 'messages', msg.id), { status: 'read' }, { merge: true })
                                                        .then(() => toast.success(' Read Message!'))
                                                        .then(() => fetchMessages())
                                                } catch (error) {
                                                    toast.error(error.message)
                                                }
                                            }
                                            }
                                            className={cn('bg-yellow-700')}>
                                            Mark as read
                                        </Button>
                                    }
                                    {
                                        msg.status === "read" &&
                                        <Button
                                            onClick={async () => {
                                                try {
                                                    await deleteDoc(doc(db, 'messages', msg.id))
                                                        .then(() => toast.info('Message deleted!'))
                                                        .then(() => fetchMessages())
                                                } catch (error) {
                                                    toast.error(error.message)
                                                }
                                            }
                                            }
                                            variant='destructive'>
                                            Delete
                                        </Button>}
                                </div>
                            </AccordionContent>
                        </AccordionItem>))
                }
            </Accordion>

        </div >
    )
}

export default MessagesHolder