import AdminBlogsHolder from '@/components/Dashboard/BlogComponents/AdminBlogsHolder'
import React from 'react'

const Blogs = async () => {
    return (
        <div className="w-full flex flex-col">
            <h1 className='mb-3 text-xl font-bold text-center'>Blogs</h1>
            <AdminBlogsHolder />
        </div>
    )

}

export default Blogs