
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

export default function AppLayout() {
  return (
    <>
      <div className='w-full flex dark:bg-slate-900 dark:text-white'>
        <Sidebar />
        <main className='w-full p-6'>
          <Outlet />
        </main>
      </div>
    </>
  )
}