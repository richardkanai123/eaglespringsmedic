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
import { deleteDoc, doc, setDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getMessages } from "@/lib/actions"


const MessagesHolder = () => {
    const queryClient = useQueryClient()
    const [user] = useAuthState(FireAuth)
    const Router = useRouter()

    // fetch messages
    const { data, error, isLoading } = useQuery({
        queryKey: ['messages'],
        queryFn: getMessages,
        refetchOnMount: 'always'
    })


    const MutateMessagesStatus = useMutation({
        mutationFn: async (msg_ID) => {
            try {
                await setDoc(doc(db, 'messages', msg_ID), { status: 'read' }, { merge: true })
                    .then(() => toast.success(' Read Message!'))
                    .then(() => Router.refresh("/Dashboard/Messages"))
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['messages'])
        }
    })

    const MutateDeleteMessage = useMutation({
        mutationFn: async (msg_id) => {
            try {
                await deleteDoc(doc(db, 'messages', msg_id))
                    .then(() => toast.info('Message deleted!'))
                // .then(() => Router.refresh("/Dashboard/Messages"))
            } catch (error) {
                toast.error(error.message)
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['messages'])
        }
    })




    if (!user) {
        return <Login />
    }

    if (isLoading) {
        return
        <p>Loading ...</p>
    }

    if (data.length <= 0) {
        return <p>No messages found</p>
    }


    return (
        <div className="w-full">

            <Accordion type="single" collapsible className="w-full">
                {
                    data.map((msg) => (
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
                                            onClick={
                                                () => MutateMessagesStatus.mutate(msg.id)
                                            }
                                            className={cn('bg-yellow-700')}>
                                            Mark as read
                                        </Button>
                                    }
                                    {
                                        msg.status === "read" &&
                                        <Button
                                            onClick={() => MutateDeleteMessage.mutate(msg.id)}
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