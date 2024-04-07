import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from './ui/button'
const ServiceCard = ({ title, Description, Icon }) => {
    return (
        <Card className={cn("w-full md:min:w-[300px] max-w-sm h-[320px] hover:shadow-xl dark:shadow-slate-700")}>
            <CardHeader className={cn("")}>
                {Icon}
                <CardDescription>
                    <span className='font-bold text-lg'> {title}</span>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className='text-left text-base font-medium'>{Description}</p>
            </CardContent>
            <CardFooter className={cn("self-end")} >
                <Button asChild variant="link">
                    <Link href="/booking">Book Now</Link>
                </Button>

            </CardFooter>
        </Card>

    )
}

export default ServiceCard