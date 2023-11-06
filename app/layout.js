import DashNav from '@/components/DashNav'
export const metadata = {
  title: 'Eagle Springs Medical Center Official Dashboard',
  description: 'Admin Dashboard',
}

export default function DashLayout({ children }) {
  return (
    <>
      <DashNav />
      {children}
    </>
  )
}
