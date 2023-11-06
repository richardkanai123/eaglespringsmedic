import Link from 'next/link'
import React from 'react'

const DashNav = () => {
    return (
        <div className='w-full h-[80px] p-1 rounded-sm bg-sky-100 flex flex-col '>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <section className='flex text-base font-semibold align-middle items-center gap-2'>
                <Link className='hover:text-secondary-foreground hover:shadow-lg focus:bg-cyan-300 active:bg-cyan-300 hover:underline p-1' href='/Dashboard/Messages'>Messages</Link>
                <Link className='hover:text-secondary-foreground hover:shadow-lg focus:bg-cyan-300 active:bg-cyan-300 hover:underline p-1' href='/Dashboard/Blogs'>Blogs</Link>
                <Link className='hover:text-secondary-foreground hover:shadow-lg focus:bg-cyan-300 active:bg-cyan-300 hover:underline p-1' href='/Dashboard/Blogs/New'>New Blog</Link>
            </section>
        </div>
    )
}

export default DashNav