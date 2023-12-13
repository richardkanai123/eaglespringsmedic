import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Share, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = ({ Blog, mode }) => {
    const { id, title, cover, created_at, authour } = Blog
    return (
        <Link className='w-full max-w-[400px] md:w-[320px] h-[320px]' href={mode === 'admin' ? `Blogs/${id}` : `${process.env.NEXT_PUBLIC_BASEURL}/blog/${id}`} >
            <Card className={cn('h-full px-3 py-4')}>
                <CardTitle className={cn('mb-3 text-xl')}>{title}</CardTitle>
                <CardContent className={cn('relative px-4  mx-auto w-[200px] h-[200px] object-cover flex flex-col gap-2')}>
                    <Image src={cover}
                        alt={title + 'Image'}
                        fill
                        quality={70}
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                </CardContent>

                <CardFooter className={cn('w-full flex flex-col ')}>
                    <p className='ml-auto text-sm italic text-left mt-3'>created at:{new Date((created_at.seconds * 1000) + ((created_at.nanoseconds) / 1000000000)).toLocaleDateString()} by: {authour}</p>
                </CardFooter>
            </Card>

        </Link>
    )
}

export default BlogCard