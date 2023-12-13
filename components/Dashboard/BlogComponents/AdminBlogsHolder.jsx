'use client'
import { blogsCollection } from '@/lib/Firebase'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { getDocs, query as FBQuery, orderBy } from 'firebase/firestore'
import BlogCard from './BlogCard'
import { array } from 'zod'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import ErrorCard from '../ErrorCard'


const AdminBlogsHolder = () => {
    const queryClient = useQueryClient()
    const { data, isError, isLoading, isFetching, error } = useQuery({
        queryKey: ['blogs'], queryFn: async () => {
            const BlogsQuery = FBQuery(blogsCollection, orderBy('created_at', 'desc'))
            const unsub = await getDocs(BlogsQuery)
            const blogs = unsub.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            return blogs
        },
        refetchOnMount: false,
    })

    if (isLoading || isFetching) {
        const DummyArray = new Array(5)

        return (
            <div className="flex gap-2 flex-wrap w-full">
                <Card className={cn('w-full bg-slate-500 md:w-[300px] h-[300px] mx-auto flex gap-4 items-center justify-center align-middle flex-wrap animate-pulse')}>
                    Loading Blogs....
                </Card>

                <Card className={cn('w-full bg-slate-500 md:w-[300px] h-[300px] mx-auto flex gap-4 items-center justify-center align-middle flex-wrap animate-pulse')}>
                    Loading Blogs....
                </Card>
            </div>
        )
    }


    if (isError) {
        <ErrorCard error={error} />
    }


    if (data)

        return (
            <div className="w-full mx-auto p-0 flex gap-4 items-center justify-center align-middle flex-wrap">
                {
                    data?.map((blog) => (<BlogCard Blog={blog} key={blog.id} mode='admin' />))
                }
            </div>
        )
}

export default AdminBlogsHolder