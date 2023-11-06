import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import { Inter } from 'next/font/google'
import { ModeToggle } from '@/components/modeToggleBtn'
import Image from 'next/image'
import { NavSheet } from '@/components/NavSheet'
import Footer from '@/components/Footer'
import BigScreenNav from '@/components/BigScreenNav'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashNav from '@/components/DashNav'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Eagle Springs Medical Center Official Website',
    description: 'The official website to check out our services and book an appointment.',
}

export default function DashLayout({ children }) {
    return (
        <div className='min-h-screen max-h-fit w-full px-4 py-2 flex flex-col gap-2' >
            <DashNav />

            {children}

        </div>
    )
}
