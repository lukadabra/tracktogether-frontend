
import { Outlet } from 'react-router-dom'

export default function SignedOutLayout() {
  return (
    <>
      <div className='w-full flex dark:bg-slate-900 dark:text-white'>
        <main className='w-full p-6'>
          <Outlet />
        </main>
      </div>
    </>
  )
}