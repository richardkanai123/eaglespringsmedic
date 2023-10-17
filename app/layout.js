import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import { Inter } from 'next/font/google'
import { ModeToggle } from '@/components/modeToggleBtn'
import Image from 'next/image'
import { NavSheet } from '@/components/NavSheet'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eagle Springs Medical Center Official Website',
  description: 'The official website to check out our services and book an appointment.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='w-screen max-w-[1440px] h-screen max-h-fit mx-auto my-0 align-middle overflow-x-hidden '>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem

        >
          <header className='w-full flex items-center justify-between py-1 align-center shadow-md'>
            <div className="flex gap-2 items-center align-middle">
              <Image src="/favicon-removebg.png"
                height={80}
                width={75}
                alt='Logo Loading'
                priority={true}
              />
              <h1 className='font-extrabold text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-sky-800 via-cyan-400 to-green-300 text-transparent bg-clip-text  '>Eagle Springs</h1>
            </div>
            <div className="flex justify-center gap-3 align-middle">
              <ModeToggle />
              <NavSheet />
            </div>
          </header>

          <main className='w-full flex flex-col mx-auto mb-2 '>
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
