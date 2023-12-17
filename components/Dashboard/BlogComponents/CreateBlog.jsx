'use client'
import React, { useState, useRef, useMemo } from 'react';
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button'
import { useAuthState } from 'react-firebase-hooks/auth'
import { FireAuth, blogsCollection, storage } from '@/lib/Firebase'
import { Timestamp, addDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { toast } from "react-toastify";
import draftToHtml from 'draftjs-to-html';
import { EditorState, convertToRaw } from 'draft-js';
import { Router } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';


const CreateBlog = () => {
    const { theme, setTheme } = useTheme()
    const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

    const [user] = useAuthState(FireAuth)
    const editor = useRef();
    const [blogTitle, setBlogTitle] = useState('')
    const [blogCover, setblogCover] = useState([])
    const [content, setContent] = useState('')
    const [isUploadingContent, setIsUploadingContent] = useState(false)
    const Router = useRouter()
    const [coverUrl, setCoverURl] = useState('')

    const UploadImageToStorage = (file) => {
        if (blogTitle === '' || content === '') {
            toast.error('Blog Must have a Title and content')
            return
        }
        if (blogCover.length === 0) {
            toast.error('Upload a cover photo for the blog')
            return
        }
        const metadata = {
            contentType: file.type,
        };
        const storageRef = ref(storage, blogTitle);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);
        setIsUploadingContent(true)
        toast.info('Uploading .....')
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progressNumber = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                toast.update('uploading', {
                    progress: progressNumber < 100 && progressNumber
                })
            },
            (error) => {
                toast.error(error.message)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    AddNewBlog(downloadURL)
                })
            }
        )
    }

    const HandleChange = (e) => {
        setBlogTitle(e.target.value)
    }


    const AddNewBlog = async (Imageurl) => {
        if (blogTitle !== '' || content !== '') {
            toast.info('Adding Blog to database ....');
            try {
                await addDoc(blogsCollection, {
                    cover: Imageurl,
                    title: blogTitle,
                    content: content,
                    created_at: serverTimestamp(),
                    published: true,
                    author: "ESMC"
                })
                    .then((data) => {
                        setIsUploadingContent(false)
                        toast.success("Blog Added")
                        setContent('')
                        setBlogTitle('')
                    })

            }
            catch (error) {
                setIsUploadingContent(false)
                toast.error(error.message)
            }
        }
    }

    return (
        <form
            onSubmit={async (e) => {
                e.preventDefault();
                UploadImageToStorage(blogCover[0])
            }}
            spellCheck={false}
            className="container mx-auto p-3 flex flex-col items-center min-h-screen gap-2 ">

            <h1 className='h1' >Creating New Blog</h1>

            <div className="w-full flex items-center flex-col p-1">
                <input
                    autoFocus={true}
                    type='text'
                    placeholder='Enter Blog Title Here'
                    required
                    className="w-full md:w-1/2 px-3 py-2 rounded-md bg-sky-300 dark:bg-slate-800 ring-0 outline-none     border-b-sky-700 text-lg hover:border-b focus:border-b-2 active:border-b font-semibold dark:border-b-gray-200 mx-auto mb-4"
                    value={blogTitle}
                    onBlur={(e) => setBlogTitle(e.target.value)}
                />
                <input
                    className='p-2  w-full md:w-1/2 flex items-center gap-1'
                    type='file'
                    onChange={e => setblogCover(e.target.files)}
                    accept="image/*"
                />
            </div>

            <div className="w-full mt-3 px-2" id='editor'>
                <JoditEditor

                    config={{

                        showTooltip: true,
                        theme: theme,
                        toolbar: {
                            draggable: true
                        }
                    }}

                    ref={editor}
                    value={content}
                    tabIndex={1}
                    onBlur={newContent => setContent(newContent)}

                />
            </div>


            <Button
                variant="primary"
                className={cn('cursor-pointer disabled:cursor-not-allowed disabled:bg-slate-500 bg-lime-600 ring-0 outline-none hover:opacity-50')}
                disabled={blogTitle === '' || content === '' || isUploadingContent}
            >
                {isUploadingContent ? 'Adding ....' : 'Add Blog'}
            </Button>
        </form>
    )
}

export default CreateBlog