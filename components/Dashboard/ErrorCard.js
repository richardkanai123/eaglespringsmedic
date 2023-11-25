import React from 'react'
import { Card, CardDescription, CardTitle } from '../ui/card'
import { cn } from '@/lib/utils'

const ErrorCard = ({ error }) => {
    return (
        <Card className={cn("w-full md:min:w-[300px] max-w-sm px-4 h-[250px]")}>
            <CardTitle className={cn('text-center')}>Error Occured</CardTitle>
            <CardDescription>
                <p className="text-red-400 text-base font-light">{error.message}</p>
            </CardDescription>
        </Card>
    )
}

export default ErrorCard