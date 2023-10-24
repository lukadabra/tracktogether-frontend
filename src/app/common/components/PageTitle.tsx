export default function PageTitle ({...props}) {
  return(
    <>
      <div className='border-b dark:border-slate-800 pb-6'>
        <h1 className='text-xl font-bold'>{props.title}</h1>
      </div>
    </>
  )
}