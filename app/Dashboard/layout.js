import DashNav from '@/components/DashNav'
import Providers from '../Providers'

export default function DashLayout({ children }) {
    return (
        <div className='min-h-screen max-h-fit w-full px-4 py-2 flex flex-col gap-2' >
            <DashNav />
            <Providers>
                {children}
            </Providers>
        </div>
    )
}
