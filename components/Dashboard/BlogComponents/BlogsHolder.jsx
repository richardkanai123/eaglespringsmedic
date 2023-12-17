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
import BlogCard from './BlogCard'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

const BlogsHolder = () => {
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
            <div className="flex gap-2 flex-wrap w-full">
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
            <ScrollArea className="w-full whitespace-nowrap rounded-md mx-auto">
                <div className="flex w-max space-x-4 p-2 mx-auto">
                    {
                        data?.map((blog) => (<BlogCard Blog={blog} key={blog.id} mode='viewer' />))
                    }
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea >
        )
}

export default BlogsHolder