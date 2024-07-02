import {
  BoltShift,
  FeatherDev,
  GlobalBank,
  LightBox,
  Nietzsche,
  Spherule,
} from './logo'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { ArrowRight, CirclePlay } from 'lucide-react'

export default function HeroSection() {
  return (
    <>
      <div className='container px-4 sm:px-6 lg:px-12 pt-32 sm:pt-32 lg:pt-32 flex flex-col justify-center items-center text-center'>
        <div className='px-2 py-1 bg-violet-50 rounded-full flex flex-wrap justify-center items-center'>
          <Badge
            variant='outline'
            className='text-violet-500 mr-2 mb-2 sm:mb-0'>
            New feature
          </Badge>
          <p className='text-sm text-violet-500 mr-2'>
            Check out the team dashboard
          </p>
          <ArrowRight size={12} className='text-violet-500' />
        </div>
        <h1 className='font-bold text-3xl sm:text-4xl lg:text-5xl mt-6 sm:mt-8'>
          Beautiful analytics to grow smarter
        </h1>
        <p className='mt-6 sm:mt-8 text-sm sm:text-base'>
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className='my-8 sm:my-10 flex flex-col sm:flex-row gap-4'>
          <Button variant={'secondary'} className='w-full sm:w-auto'>
            <CirclePlay size={16} className='mr-2' />
            Demo
          </Button>
          <Button className='w-full sm:w-auto bg-violet-700 hover:bg-violet-900 focus:bg-violet-900'>
            Sign up
          </Button>
        </div>
        <img
          src='../../public/static/images/hero-image.png'
          alt='Hero Section Image'
          className='w-full h-auto rounded-t-2xl sm:rounded-t-3xl border-4 sm:border-8 border-zinc-800 border-b-0'
        />
        <div className='my-16 sm:my-24 lg:my-32'>
          <p className='text-sm sm:text-base'>
            Join 4,000+ companies already growing
          </p>
          <div className='grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12 mt-6 sm:mt-8 lg:mt-10'>
            <BoltShift />
            <LightBox />
            <FeatherDev />
            <Spherule />
            <GlobalBank />
            <Nietzsche />
          </div>
        </div>
      </div>
    </>
  )
}
