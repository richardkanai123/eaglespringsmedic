'use client'
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const CreateBlog = () => {

    const [blogContent, setBlogContent] = useState()
    const [blogTitle, setBlogTitle] = useState('')


    const handleAddBlog = (e) => {
        e.preventDefault()

        console.log(blogContent);
    }


    return (
        <form
            onSubmit={handleAddBlog}
            className="p-3 flex flex-col items-center min-h-screen gap-2 ">

            <h1 className="text-center text-2xl font-black mb-3">Creating New Blog</h1>

            <div className="w-full p-1">
                <input
                    type='text'
                    placeholder='Enter Blog Title Here'
                    required
                    className="w-full md:w-1/2 px-3 py-2 rounded-md bg-sky-300 dark:bg-slate-800 ring-0 outline-none     border-b-sky-700 text-lg hover:border-b focus:border-b active:border-b font-semibold dark:border-b-gray-200"
                    value={blogTitle}
                    onChange={(e) => setBlogTitle(e.target.value)}
                />
            </div>

            <div className="w-full p-2">
                <ReactQuill
                    formats={
                        ['header',
                            'bold', 'italic', 'underline', 'strike', 'blockquote',
                            'list', 'bullet', 'indent',
                            'link']
                    }
                    theme="snow"
                    value={blogContent}
                    onChange={setBlogContent}
                />
            </div>


            <Button variant="primary" className={cn('cursor-pointer bg-lime-600 ring-0 outline-none hover:opacity-50')}>Submit</Button>
        </form>
    )
}

export default CreateBlog