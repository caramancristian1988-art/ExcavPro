import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'
import Sidebar from './_components/Sidebar'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession()
  if (!session) redirect('/admin/login')

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Sidebar />
      <main className="ml-56 min-h-screen p-8">
        {children}
      </main>
    </div>
  )
}
