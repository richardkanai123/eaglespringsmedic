import MessagesHolder from '@/components/Dashboard/MessagesHolder'
const DashBoardMessages = () => {
    return (
        <div className='w-full flex flex-col gap-3'>
            <h1 className='text-2xl font-bold'>Messages</h1>
            <MessagesHolder />
        </div>
    )
}

export default DashBoardMessages