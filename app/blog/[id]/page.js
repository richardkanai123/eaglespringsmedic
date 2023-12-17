'use client'
import { blogsCollection, db } from '@/lib/Firebase'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { doc, getDoc, getDocs } from 'firebase/firestore'
import Image from 'next/image'

const BlogPost = ({ params }) => {
    const blogid = params.id
    const queryClient = useQueryClient()
    const { data, isError, isLoading, isFetching, error } = useQuery({
        queryKey: [blogid], queryFn: async () => {
            const docRef = doc(db, 'Blogs', blogid)
            const unsub = await getDoc(docRef)
            const blog = unsub.data()
            return blog

        },
        refetchOnMount: false,
    })


    if (isFetching || isLoading) {
        return (
            <div className="w-full animate-pulse text-xl font-black ">Loading....</div>
        )
    }

    if (isError || error) {
        return (
            <div> Error Occurred</div>
        )
    }

    if (data) {
        const markup = { __html: data.content };
        return (
            <div className="container px-2 blog relative">
                <div className="w-full block p-0 mb-3 object-cover relative min-h-[50vh]">
                    <Image src={data.cover}
                        alt={data.title + data.id}
                        fill
                        style={{
                            objectFit: "cover",
                            objectPosition: "center"
                        }}
                    />

                </div>
                <div className="w-full relative pt-3">
                    <h1 className="text-2xl font-black">{data.title}</h1>
                    <p className="text-base italic font-light ">by {data.author || data.authour}</p>
                </div>
                <div className='w-full font-sans' dangerouslySetInnerHTML={markup}></div>
            </div>
        )
    }
}

export default BlogPost