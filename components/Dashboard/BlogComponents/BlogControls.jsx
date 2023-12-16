'use client'
import { blogsCollection } from "@/lib/Firebase"
import { Mutation, useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteDoc, doc, updateDoc } from "firebase/firestore"
import { DownloadCloud, Edit2Icon, TrashIcon, UploadCloudIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { CircleLoader, PacmanLoader } from "react-spinners"
import { toast } from "react-toastify"

const BlogControls = ({ published, BlogID }) => {
    const Router = useRouter()
    const queryClient = useQueryClient()
    const { isSuccess, isPending, isError, mutate } = useMutation({
        mutationKey: [BlogID],
        mutationFn: async (MutationMode) => {
            const docref = doc(blogsCollection, BlogID)
            // Unpublish
            if (MutationMode === 'unpublish') {
                try {
                    await updateDoc(docref, {
                        'published': false
                    })
                        .then(() => {
                            toast.done('Blog Unpublished')
                        })
                } catch (error) {
                    toast.error(error.message)
                    Router.push('/Dashboard/Blogs')

                }
            } else if (MutationMode === "publish") {
                // Publish
                try {
                    await updateDoc(docref, {
                        'published': true
                    })
                        .then(() => toast.done('Blog Published'))
                } catch (error) {
                    toast.error(error.message)
                    Router.push('/Dashboard/Blogs')
                }
            }
            else if (MutationMode === 'delete') {
                // Delete
                try {
                    await deleteDoc(docref)
                        .then(() => toast.done('Blog Published'))
                        .then(() => Router.replace('/Dashboard/Blogs'))
                } catch (error) {
                    toast.error(error.message)
                    Router.push('/Dashboard/Blogs')
                }
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['blogs']
            })
            queryClient.invalidateQueries({
                queryKey: [BlogID]
            })
        },
    })


    if (isPending) {

        return (
            < div className='rounded flex flex-col gap-1  border-2 border-t-0 p-4  px-1'>
                <svg className={"animate-spin h-5 w-5 mx-auto bg-green-400"} viewBox="12 12 24 24" ></svg >
            </div >
        )
    }

    return (
        <div className='w-full md:w-[300px] rounded flex items-center justify-center z-20 shadow-sm gap-2  border-2 p-2'>
            <Edit2Icon className='w-6 h-6 border-b cursor-pointer pb-[5px] hover:opacity-70 hover:text-green-500' />
            {published ?
                <DownloadCloud onClick={() => mutate('unpublish')} className='w-6 h-6 border-b cursor-pointer pb-[5px] hover:opacity-70 hover:text-red-300 bg-orange-600' />
                :
                <UploadCloudIcon onClick={() => mutate('publish')} className='w-6 h-6 border-b cursor-pointer pb-[5px] hover:opacity-70 hover:text-lime-700 bg-green-600' />}
            <TrashIcon onClick={() => mutate('delete')} className='w-6 h-6 border-b cursor-pointer pb-[5px] hover:opacity-70 hover:text-red-500' />
        </div>
    )
}

export default BlogControls