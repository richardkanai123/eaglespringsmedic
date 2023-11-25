"use client"
import Image from 'next/image'
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CalendarX2Icon } from 'lucide-react'
import { addDays, format } from "date-fns"
import { toast } from 'react-toastify'
import { Timestamp, addDoc } from 'firebase/firestore'
import { BookingsCollection } from '@/lib/Firebase'
import { useRouter } from 'next/navigation'


const Booking = () => {

    const Router = useRouter()

    const NotifySucess = () => {
        toast.success(
            <div className="w-full p-2">
                <p className='text-base font-semibold'>Booking Successful!</p>
            </div>
        )
    }

    // zod validation schema
    const formSchema = z.object({
        Name: z.string({
            required_error: "Name is required",
            invalid_type_error: "Name must be a string",
        }).min(3),
        Email: z.string().email().toUpperCase(),
        PhoneNumber: z.string().startsWith(('0'), "Number must start with 0").max(10, "Must be 10 digits").min(10, "Must be 10 digits"),
        Department: z.string(),
        appointmentDate: z.date({
            required_error: "A date is required.",
        }).min(new Date(), "Date can only be in future!"),
    })

    const form = useForm({
        resolver: zodResolver(formSchema)
    })


    const departmentsList = [
        {
            id: 1,
            name: '24-Hour Emergency Department',

        },
        {
            id: 2,
            name: 'Outpatient Center',

        },
        {
            id: 3,
            name: 'Cancer Screening Center',

        },
        {
            id: 4,
            name: 'Radiology Services',

        },
        {
            id: 5,
            name: 'Laboratory Investigation Center',

        },
        {
            id: 6,
            name: 'Center for Mother-Child Diseases',

        },
        {
            id: 7,
            name: 'Pharmacy Center',

        },
        {
            id: 8,
            name: 'Vascular Science and Screening Center',

        },
        {
            id: 9,
            name: 'Physical Medicine and Rehabilitation (Physiotherapy)',

        },
        {
            id: 10,
            name: 'Dental Services',

        },
        {
            id: 11,
            name: 'Surgical Procedures',

        },
        {
            id: 12,
            name: 'Maternity Service',

        },
    ]


    return (
        <div className='min-h-[50vh] max-h-fit w-full p-4 flex flex-col md:flex-row items-center justify-center align-middle gap-4'>
            <div className="hidden md:flex flex-1 h-full  items-center align-middle justify-center">
                <Image src={'/logoimage.jpeg'} alt='contact display' width={300} height={200} quality={100} />
            </div>
            <div className="w-full flex-1 h-full">

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(async (data) => {

                        await addDoc(BookingsCollection, {
                            name: data.Name,
                            phoneNumber: data.PhoneNumber,
                            email: data.Email,
                            department: data.Department,
                            date: Timestamp.fromDate(data.appointmentDate),
                            status: "pending"
                        })
                            .then(() => {
                                NotifySucess();
                                Router.push('/booking/Success')
                            })
                        form.resetField()

                    })} className="space-y-2 w-full text-base p-3  self-center">
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
                                    <FormDescription className={cn('font-semibold text-sm text-yellow-800')}>
                                        📩📩Booking information will be sent to this email📩📩
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
                            name="Department"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Department</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a Department" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {

                                                departmentsList.map((dep) => (

                                                    <SelectItem key={dep.id} value={dep.name}>
                                                        {dep.name}
                                                    </SelectItem>
                                                ))
                                            }
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="appointmentDate"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Date</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[240px] pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                    <CalendarX2Icon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" variant='primary' className={cn('w-[200px] bg-lime-400')} >Send</Button>
                    </form>
                </Form>
            </div>
        </div >
    )
}

export default Booking