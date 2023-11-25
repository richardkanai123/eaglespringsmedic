import MessagesHolder from '@/components/Dashboard/MessagesHolder'
import { Suspense } from 'react'
const DashBoardMessages = () => {
    return (
        <div className='w-full flex flex-col gap-3'>
            <h1 className='text-2xl font-bold'>Messages</h1>
            <Suspense fallback={<p>Loading...</p>}>
                <MessagesHolder />
            </Suspense>
        </div>
    )
}

export default DashBoardMessages