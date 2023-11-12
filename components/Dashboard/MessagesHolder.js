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
import { deleteDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"


const MessagesHolder = ({ messages }) => {

    const [user] = useAuthState(FireAuth)

    const Router = useRouter()


    if (!user) {
        <Login />
    }

    if (user)

        return (
            <div className="w-full">

                <Accordion type="single" collapsible className="w-full">
                    {
                        messages.map((msg) => (
                            <AccordionItem key={msg.id} value={msg.id}>
                                <AccordionTrigger className={cn('w-full text-lg font-semibold')}>Sent by: {msg.name || msg.Name} on {new Date((msg.time.seconds * 1000) + ((msg.time.nanoseconds) / 1000000000)).toLocaleDateString()} at {new Date((msg.time.seconds * 1000) + ((msg.time.nanoseconds) / 1000000000)).toLocaleTimeString()}

                                    <span>Msg status </span>
                                </AccordionTrigger>
                                <AccordionContent className={cn('bg-sky-200 dark:bg-slate-800 p-1 rounded ')}>
                                    <p className="text-base font-semibold mb-1">{msg.Message || msg.message}</p>
                                    <p className="flex text-base font-medium flex-col">
                                        Contact: <span>{msg.email || ''}</span> <span> {msg.phoneNumber || ''}</span>
                                    </p>
                                    <div className="flex self-center p-2 align-middle">
                                        {
                                            msg.status === "unread" &&
                                            <Button

                                                className={cn('bg-yellow-700')}>
                                                Mark as read
                                            </Button>
                                        }
                                        {
                                            msg.status === "read" &&
                                            <Button
                                                onClick={async () => {
                                                    try {
                                                        await deleteDoc(messagesCollection, msg.id)
                                                            .then(() => toast.info('Message deleted!'))
                                                            .then(() => Router.refresh())
                                                    } catch (error) {
                                                        toast.error(error.message)
                                                    }
                                                }}
                                                variant='destructive'>
                                                Delete
                                            </Button>}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>))
                    }
                </Accordion>

            </div>
        )
}

export default MessagesHolder