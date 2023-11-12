'use client'

import { FireAuth } from '@/lib/Firebase'
import { signOut } from 'firebase/auth'
import Link from 'next/link'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'
import { Button } from "@/components/ui/button"
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
const DashNav = () => {
    const [user] = useAuthState(FireAuth);
    const Router = useRouter()

    return (
        <div className='w-full p-1 rounded-sm bg-sky-200 dark:bg-slate-900 dark:border-b flex flex-col '>
            <section className="w-full flex justify-around">
                <Link href={'/Dashboard'} className="text-2xl font-bold focus:text-cyan-300 active:bg-cyan-300 hover:text-cyan-500">Dashboard</Link>
                {
                    user && <Button
                        variant='destructive'
                        className={cn('')}
                        onClick={async () => await signOut(FireAuth)
                            .then(() => toast.info('Admin Signed out'))
                            .then(() => Router.replace('/Dashboard'))
                        }>
                        Log out
                    </Button>}
            </section>
            {
                user &&
                <section className='w-full flex transition-all ease-linear text-base font-semibold align-middle items-center gap-2'>
                    <Link className=' hover:shadow-lg focus:text-cyan-300 active:bg-cyan-300 hover:text-cyan-500 p-1 hover:underline' href='/Dashboard/Messages' >Messages</Link>
                    <Link className=' hover:shadow-lg focus:text-cyan-300 active:bg-cyan-300 hover:text-cyan-500 p-1 hover:underline' href='/Dashboard/Booking' >Booking</Link>
                    <Link className=' hover:shadow-lg focus:text-cyan-300 active:bg-cyan-300 hover:text-cyan-500 hover:underline p-1' href='/Dashboard/Blogs'>Blogs</Link>
                    <Link className=' hover:shadow-lg focus:text-cyan-300 active:bg-cyan-300 hover:text-cyan-500 hover:underline p-1' href='/Dashboard/Blogs/new'>New Blog</Link>

                </section>

            }
        </div>
    )
}

export default DashNav