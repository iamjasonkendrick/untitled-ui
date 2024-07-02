import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

export default function BlogSection() {
  return (
    <div className='container my-24'>
      <div className='flex justify-between items-center mb-6'>
        <div>
          <h2 className='text-base font-semibold text-violet-700 mb-4'>
            Our blog
          </h2>
          <h1 className='text-3xl font-bold mb-2'>Lastest blog posts</h1>
          <p className='text-muted-foreground'>
            Tool and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <Button variant='default' className='bg-violet-700 text-white'>
          View all posts
        </Button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <Card>
          <img
            src='../../public/blog-1.png'
            alt='UX review presentations'
            className='w-full h-48 object-cover'
          />
          <CardContent className='p-4'>
            <Badge variant='default' className='bg-violet-700 text-white'>
              Design
            </Badge>
            <h3 className='text-lg font-semibold mt-2'>
              UX review presentations
            </h3>
            <p className='text-muted-foreground mt-1'>
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </p>
            <div className='flex items-center mt-4'>
              <Avatar>
                <AvatarImage src='	https://xsgames.co/randomusers/avatar.php?g=female' />
                <AvatarFallback>OR</AvatarFallback>
              </Avatar>
              <div className='ml-2'>
                <p className='text-sm font-medium'>Olivia Rhye</p>
                <p className='text-xs text-muted-foreground'>20 Jan 2024</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <img
            src='../../public/blog-2.png'
            alt='Migrating to Linear 101'
            className='w-full h-48 object-cover'
          />
          <CardContent className='p-4'>
            <Badge variant='default' className='bg-violet-700 text-white'>
              Product
            </Badge>
            <h3 className='text-lg font-semibold mt-2'>
              Migrating to Linear 101
            </h3>
            <p className='text-muted-foreground mt-1'>
              Linear helps streamline software projects, sprints, tasks, and bug
              tracking. Here's how to get started.
            </p>
            <div className='flex items-center mt-4'>
              <Avatar>
                <AvatarImage src='	https://xsgames.co/randomusers/avatar.php?g=male' />
                <AvatarFallback>PB</AvatarFallback>
              </Avatar>
              <div className='ml-2'>
                <p className='text-sm font-medium'>Phoenix Baker</p>
                <p className='text-xs text-muted-foreground'>19 Jan 2024</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <img
            src='../../public/blog-3.png'
            alt='Building your API stack'
            className='w-full h-48 object-cover'
          />
          <CardContent className='p-4'>
            <Badge variant='default' className='bg-violet-700 text-white'>
              Software Engineering
            </Badge>
            <h3 className='text-lg font-semibold mt-2'>
              Building your API stack
            </h3>
            <p className='text-muted-foreground mt-1'>
              The rise of RESTful APIs has been met by a rise in tools for
              creating, testing, and managing them.
            </p>
            <div className='flex items-center mt-4'>
              <Avatar>
                <AvatarImage src='https://xsgames.co/randomusers/avatar.php?g=female' />
                <AvatarFallback>LS</AvatarFallback>
              </Avatar>
              <div className='ml-2'>
                <p className='text-sm font-medium'>Lana Steiner</p>
                <p className='text-xs text-muted-foreground'>18 Jan 2024</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
