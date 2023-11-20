export const dynamic = 'force-dynamic'
export const revalidate = 0
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import MessagesHolder from '@/components/Dashboard/MessagesHolder'
import { getMessages } from '@/lib/actions'


const DashBoardMessages = async () => {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
        queryKey: ['messages1'],
        queryFn: getMessages
    })





    return (
        <div className='w-full flex flex-col gap-3'>
            <h1>Messages</h1>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <MessagesHolder />
            </HydrationBoundary>
        </div>
    )
}

export default DashBoardMessages