import CustomerBlogLister from '@/components/CustomerBlogLister'
import React from 'react'

const Blog = () => {
    return (
        <div className="container flex flex-col gap-4 items-center pt-5  min-h-[80vh]">

            <div className="w-full flex flex-col gap-4">
                <h1 className="text-xl font-bold">Blogs</h1>
                <p className='text-muted text-base'>Our latest posts</p>
            </div>

            <CustomerBlogLister />
        </div>
    )
}

export default Blog