import React from 'react'
import Link from 'next/link'

const SendSuccessPage = () => {
    return (
        <div className='flex flex-col gap-2 text-center items-center align-middle justify-center      min-h-[80vh]'>

            <p className='text-green-500 text-4xl font-bold'>Booking Sucessful!</p>
            <p className='text-green-300 text-2xl font-semibold'>We&rsquo;ll get back to you soon...</p>
            <Link className='text-base underline' href={'/'}>Go back Home</Link>
        </div>
    )
}

export default SendSuccessPage