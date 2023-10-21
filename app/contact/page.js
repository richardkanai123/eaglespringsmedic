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
import { BsFacebook } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { useToast } from "@/components/ui/use-toast"

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
    }),
    PhoneNumber: z.string().startsWith(('0'), "Number must start with 0").max(10, "Must be 10 digits").min(10, "Must be 10 digits")
})


const Contact = () => {

    const { toast } = useToast()

    const form = useForm({
        resolver: zodResolver(formSchema)

    })

    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit((data) => {
                console.log(data)
                toast({
                    variant: 'success',
                    title: "Message Sent!",
                    description: "Your message was successfully sent!",
                    location: 'top'
                })

                form.reset()

            })} className="space-y-4 w-full text-base p-3 md:w-[50%] self-center">
                <FormField
                    control={form.control}
                    name="Name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
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
                    name="PhoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <Input type='tel' placeholder="Your Phone Number" {...field} />
                            </FormControl>
                            <FormDescription>
                                We may contact you via this number.
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
                            <Textarea placeholder="Type your message here." id="Message"  {...field} />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Send</Button>
            </form>

            <p className='text-center text-lg p-2 align-middle'>Click Any of the links below for direct links:</p>
            <div className="w-full flex justify-center gap-3 align-middle">
                <a className='w-10 h-10 text-lg hover:opacity-70 rounded-xl flex items-center align-middle text-center justify-center ' href="http://" target="_blank" rel="noopener noreferrer">
                    <span className='text-sky-600 text-3xl'><BsFacebook /></span>
                </a>
                <a className='w-10 h-10 text-lg hover:opacity-70 rounded-xl flex items-center align-middle text-center justify-center ' href="http://" target="_blank" rel="noopener noreferrer">
                    <span className='text-lime-600 text-3xl'><IoLogoWhatsapp /></span>
                </a>
                <a className='w-10 h-10 text-lg hover:opacity-70 rounded-xl flex items-center align-middle text-center justify-center ' href="http://" target="_blank" rel="noopener noreferrer">
                    <span className='text-yellow-600 text-3xl'><BiSolidPhoneCall /></span>
                </a>
            </div>

        </Form>
        // </div>

    )
}

export default Contact