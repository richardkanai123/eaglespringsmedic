'use client'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"

import { BsFillTelephoneForwardFill } from 'react-icons/bs'
import { FcHome, FcServices, FcBookmark, FcContacts } from 'react-icons/fc'
import { FaBlog } from 'react-icons/fa'

export const NavSheet = () => {

    const navlinks = [
        {
            tag: '/',
            name: "Home",
            Icon: <FcHome />
        },
        {
            tag: '/services',
            name: "Services",
            Icon: <FcServices />
        },
        {
            tag: '/blog',
            name: "Blog",
            Icon: <FaBlog />
        },
        {
            tag: '/booking',
            name: "Book Appointment",
            Icon: <FcBookmark />
        },
        {
            tag: '/contact',
            name: "Contact",
            Icon: <FcContacts />
        },
    ]

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />

                    </svg>

                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className='font-extrabold text-3xl bg-gradient-to-r from-sky-800 via-cyan-400 to-green-300 text-transparent bg-clip-text'>Eagle Springs </SheetTitle>
                    <SheetDescription>
                        <Button variant="link" >
                            <BsFillTelephoneForwardFill className="mr-2 h-4 w-4" />
                            Call Us Now</Button>
                    </SheetDescription>
                </SheetHeader>
                <nav className="w-full self-center flex flex-col items-center justify-center gap-4 py-4 text-center">
                    {
                        navlinks.map((link) => (
                            <Link className="w-full  text-lg flex items-center align-middle gap-2" key={link.name} href={link.tag}>
                                {link.Icon}

                                {link.name}
                            </Link>
                        ))
                    }
                </nav>
                <SheetFooter>
                    <SheetClose asChild>

                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
