'use client'
import DashNav from '@/components/DashNav'
import Login from '@/components/Dashboard/Login'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { FireAuth } from '@/lib/Firebase'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useAuthState } from 'react-firebase-hooks/auth'

const DashBoardHome = () => {
    const [user, loading, error] = useAuthState(FireAuth);

    if (user) {
        return (
            <div className="flex gap-4 flex-wrap justify-around">
                <Card className={cn("w-full md:min:w-[300px] max-w-sm h-[250px]")}>
                    <CardHeader>
                        <CardTitle >
                            Title
                        </CardTitle>
                        <CardDescription className='text-xl'>Book Online</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Book an appointment with us by a click of button on our website.</p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild variant='primary' className='bg-lime-600 ring-0 outline-none hover:opacity-80'>
                            <Link href={'/booking'} >Book Now!</Link>
                        </Button>
                    </CardFooter>
                </Card>
                <Card className={cn("w-full md:min:w-[300px] max-w-sm h-[250px]")}>
                    <CardHeader>
                        <CardTitle >
                            Title
                        </CardTitle>
                        <CardDescription className='text-xl'>Book Online</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Book an appointment with us by a click of button on our website.</p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild variant='primary' className='bg-lime-600 ring-0 outline-none hover:opacity-80'>
                            <Link href={'/booking'} >Book Now!</Link>
                        </Button>
                    </CardFooter>
                </Card>
                <Card className={cn("w-full md:min:w-[300px] max-w-sm h-[250px]")}>
                    <CardHeader>
                        <CardTitle >
                            Title
                        </CardTitle>
                        <CardDescription className='text-xl'>Book Online</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Book an appointment with us by a click of button on our website.</p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild variant='primary' className='bg-lime-600 ring-0 outline-none hover:opacity-80'>
                            <Link href={'/booking'} >Book Now!</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>)
    }
    return (
        <>

            <Login />

        </>
    )
}

export default DashBoardHome