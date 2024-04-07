'use client'
import { blogsCollection } from '@/lib/Firebase'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { getDocs, query as FBQuery, orderBy, where } from 'firebase/firestore'
import { array } from 'zod'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import ErrorCard from '@/components/Dashboard/ErrorCard'
import BlogCard from '@/components/Dashboard/BlogComponents/BlogCard'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

const CustomerBlogLister = () => {
    const queryClient = useQueryClient()
    const { data, isError, isLoading, isFetching, error } = useQuery({
        queryKey: ['publishedBlogs'], queryFn: async () => {
            const PublishedBlogsQuery = FBQuery(blogsCollection, where('published', '==', true))
            const unsub = await getDocs(PublishedBlogsQuery)
            const blogs = unsub.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            return blogs
        },
        refetchOnMount: true,
    })

    if (isLoading || isFetching) {

        return (
            <div className="flex gap-2 flex-wrap w-full min-h-[70vh]">
                Loading Blogs and News ....

            </div>
        )
    }


    if (isError) {
        <ErrorCard error={error} />
    }


    if (data.length === 0) {
        return <div>No Blogs found</div>
    }

    if (data.length > 0)

        return (
            <div className="w-full mx-auto p-0 flex gap-4 items-center justify-center align-middle flex-wrap">
                {
                    data?.map((blog) => (<BlogCard Blog={blog} key={blog.id} mode='viewer' />))
                }
            </div >
        )
}

export default CustomerBlogLister