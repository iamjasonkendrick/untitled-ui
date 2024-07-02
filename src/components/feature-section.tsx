import { Link } from 'react-router-dom'
import { Sisyphus } from './logo'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import {
  ArrowRight,
  Command,
  MessageCircle,
  MessageCircleHeart,
  Smile,
  SquareDashedMousePointer,
  Zap,
} from 'lucide-react'

export default function Features() {
  return (
    <>
      <div className='container px-4 sm:px-6 lg:px-8 mb-12 sm:mb-20'>
        <div className='flex flex-col items-center gap-4 sm:gap-8 text-center'>
          <p className='text-violet-500 font-semibold'>Features</p>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>
            Analytics that feels like it's from the future
          </h1>
          <p className='text-sm sm:text-base'>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8 sm:my-12'>
          {[
            { icon: <MessageCircle />, title: 'Share team inboxes' },
            { icon: <Zap />, title: 'Deliver instant answers' },
            {
              icon: <SquareDashedMousePointer />,
              title: 'Manage your team with reports',
            },
            { icon: <Smile />, title: 'Connect with customers' },
            { icon: <Command />, title: 'Connect the tools you already use' },
            {
              icon: <MessageCircleHeart />,
              title: 'Our people make the difference',
            },
          ].map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center text-center gap-4'>
              <div className='p-2 border-zinc-200 border rounded-md shadow-lg'>
                {item.icon}
              </div>
              <h3 className='text-lg sm:text-xl font-bold'>{item.title}</h3>
              <p className='text-sm sm:text-base text-zinc-700'>
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='bg-zinc-100 py-12'>
        <div className='container px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-8 sm:gap-12 text-center'>
          <Sisyphus />
          <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold max-w-[900px]'>
            We've been using Untitled to kick start every new project and can't
            imagine working without it
          </h1>
          <div className='flex flex-col items-center justify-center gap-2'>
            <Avatar>
              <AvatarImage src='https://xsgames.co/randomusers/avatar.php?g=female' />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <h6 className='font-bold text-md'>Candice Wu</h6>
            <p className='text-sm sm:text-md font-light'>
              Product Manager, Sisyphus
            </p>
          </div>
        </div>
      </div>
      <div className='container px-4 sm:px-6 lg:px-8 my-12 sm:my-24'>
        <div className='flex flex-col items-center justify-center gap-6 sm:gap-8 text-center'>
          <Badge variant='outline' className='bg-violet-100 text-violet-500'>
            Features
          </Badge>
          <h1 className='text-2xl sm:text-3xl font-bold'>
            Cutting-edge features for advanced analytics
          </h1>
          <p className='font-light text-sm sm:text-base'>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
          <img
            src='../../public/feature-image.png'
            alt='Feature Section Image'
            className='border-4 sm:border-8 rounded-2xl sm:rounded-3xl border-zinc-800 mt-6 sm:mt-8'
          />
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8 sm:my-12'>
            {[
              { icon: <MessageCircle />, title: 'Share team inboxes' },
              { icon: <Zap />, title: 'Deliver instant answers' },
              {
                icon: <SquareDashedMousePointer />,
                title: 'Manage your team with reports',
              },
            ].map((item, index) => (
              <div
                key={index}
                className='flex flex-col items-center text-center gap-4'>
                <div className='p-2 border-zinc-200 border rounded-md shadow-lg'>
                  {item.icon}
                </div>
                <h3 className='text-lg sm:text-xl font-bold'>{item.title}</h3>
                <p className='text-sm sm:text-base text-zinc-700'>
                  Whether you have a team of 2 or 200, our shared team inboxes
                  keep everyone on the same page and in the loop.
                </p>
                <Link
                  to={'#'}
                  className='flex text-sm items-center text-violet-500'>
                  Learn more <ArrowRight size={16} className='ml-2' />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
