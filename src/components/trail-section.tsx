import { Avatar } from './ui/avatar'
import { Button } from './ui/button'

export default function Trail() {
  return (
    <>
      <div className=' bg-zinc-100 py-12 flex flex-col justify-center items-center'>
        <h3 className='font-bold text-xl mb-4'>Start your free trial</h3>
        <p className='font-light mb-8'>
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className='flex gap-8'>
          <Button variant={'outline'} size={'lg'}>
            Get Started
          </Button>
          <Button className='bg-violet-700 hover:bg-violet-900 focus:bg-violet-900'>
            Get Started
          </Button>
        </div>
      </div>
    </>
  )
}
