'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from 'react-hook-form'
import { cn } from '@/lib/utils'
import { Textarea } from "@/components/ui/textarea"


const formSchema = z.object({
    Name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    }).min(3),
    Email: z.string({
        required_error: "email is required",
    }).email({
        invalid_type_error: "Enter a valid email",
    }),
    Message: z.string().min(20, {
        message: "Must be above 20 characters"
    })
})

const Contact = () => {

    const form = useForm({
        resolver: zodResolver(formSchema)

    })

    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit((data) => {


                console.log(data)

            })} className="space-y-4 w-full p-3 md:w-[50%] self-center">
                <FormField
                    control={form.control}
                    name="Name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="Email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Email Address" {...field} />
                            </FormControl>
                            <FormDescription>
                                We will contact you via this email
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="Message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your Message</FormLabel>
                            <Textarea placeholder="Type your message here." id="Message" />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
        // </div>

    )
}

export default Contact