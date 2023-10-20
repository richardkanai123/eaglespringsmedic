import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
const ServiceCard = ({ title, Description }) => {
    return (
        <div className="flex items-center w-[320px] md:min-w-[350px] overflow-hidden h-[320px] ">
            <Card>
                <CardHeader>
                    <CardTitle>Add icon</CardTitle>
                    <CardDescription>
                        <span className='font-bold text-lg'> {title}</span>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className='text-left text-base'>{Description}</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </div>

    )
}

export default ServiceCard