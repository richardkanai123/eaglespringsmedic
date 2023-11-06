import Link from 'next/link'
import React from 'react'

const DashNav = () => {
    return (
        <div className='w-full h-[80px] p-1 rounded-sm bg-sky-200 dark:bg-slate-900 dark:border-b flex flex-col '>
            <Link href={'/Dashboard'} className="text-2xl font-bold focus:text-cyan-300 active:bg-cyan-300 hover:text-cyan-500">Dashboard</Link>
            <section className='flex transition-all ease-linear text-base font-semibold align-middle items-center gap-2'>
                <Link className=' hover:shadow-lg focus:text-cyan-300 active:bg-cyan-300 hover:text-cyan-500 p-1 hover:underline' href='/Dashboard/Messages' >Messages</Link>
                <Link className=' hover:shadow-lg focus:text-cyan-300 active:bg-cyan-300 hover:text-cyan-500 hover:underline p-1' href='/Dashboard/Blogs'>Blogs</Link>
                <Link className=' hover:shadow-lg focus:text-cyan-300 active:bg-cyan-300 hover:text-cyan-500 hover:underline p-1' href='/Dashboard/Blogs/New'>New Blog</Link>
            </section>
        </div>
    )
}

export default DashNav