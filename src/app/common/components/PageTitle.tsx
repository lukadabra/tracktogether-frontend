import { useContext } from 'react'
import { UserContext } from '../../auth/contexts/UserContext'

export default function PageTitle({ ...props }) {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <>
      <div className='border-b dark:border-slate-800 pb-6'>
        <div className="flex justify-between items-center">
          <h1 className='text-xl font-bold'>{props.title}</h1>
          <div>
            <p>{user === undefined ? 'no user' : user?.displayName}</p>
          </div>
        </div>
      </div>
    </>
  )
}