'use client'
import { FireAuth } from "@/lib/Firebase"
import * as z from "zod"
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useAuthState } from "react-firebase-hooks/auth"
import { Card } from "../ui/card"
import { cn } from "@/lib/utils"

const formSchema = z.object({

    Email: z.string({
        required_error: "email is required",
    }).email({
        invalid_type_error: "Enter a valid email",
    }),
    Password: z.string().min(8, "Must be Above 8 digits")
})


const Login = () => {
    const [user, loading, error] = useAuthState(FireAuth);


    const form = useForm({
        resolver: zodResolver(formSchema),
        reValidateMode: "onChange",

    })

    if (loading) return (

        <Card className={cn('animate-pulse delay-75 repeat-infinite')}>
            <p className="bg-slate-300 p-4 text-semibold">Loading ....</p>
        </Card>
    )


    if (user) return (
        <Button className={cn('w-full max-w-xs')} onClick={async () => await signOut(FireAuth).then(() => toast.info('Admin Signed out'))}>Log out</Button>
    )

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(async (data) => {
                const { Email, Password } = data
                try {

                    await signInWithEmailAndPassword(FireAuth, Email, Password)
                    toast.success("Admin Logged in Successfully", { duration: 1 })

                } catch (error) {
                    toast.error(error.message)
                }
            })} className="space-y-4 w-full text-base p-3 md:w-[50%] self-center">
                <FormField
                    control={form.control}
                    name="Email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Admin Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="Password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Enter Admin Password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Send</Button>

            </form>

        </Form>
    )
}

export default Login
