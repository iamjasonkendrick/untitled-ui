import { Link } from 'react-router-dom'
import { LogoWithText } from './logo'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer'
import { ChevronDown, Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <>
      <header className='container fixed right-0 left-0 py-4 bg-white/40 dark:bg-black/40 backdrop-blur-lg z-[10] flex items-center justify-between'>
        <aside className='flex items-center gap-[2px]'>
          <LogoWithText width={120} className='mr-12' />
          <nav className='hidden md:flex items-center gap-8 '>
            <Link to={'#'}>Home</Link>
            <Link to={'#'} className='flex items-center'>
              Products
              <ChevronDown size={16} className='ml-2' />
            </Link>
            <Link to={'#'} className='flex items-center'>
              Resources
              <ChevronDown size={16} className='ml-2' />
            </Link>
            <Link to={'#'}>Pricing</Link>
          </nav>
        </aside>
        <nav className='flex  items-center gap-8'>
          <Avatar>
            <AvatarImage src='https://xsgames.co/randomusers/avatar.php?g=female' />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className='block md:hidden'>
            <Drawer>
              <DrawerTrigger>
                <Menu />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader className='justify-center'>
                  <DrawerTitle className='mb-8'>Navigation Menu</DrawerTitle>
                </DrawerHeader>
                <nav className='flex flex-col items-center gap-8 mb-12'>
                  <Link to={'#'}>Home</Link>
                  <Link to={'#'} className='flex items-center'>
                    Products
                  </Link>
                  <Link to={'#'} className='flex items-center'>
                    Resources
                  </Link>
                  <Link to={'#'}>Pricing</Link>
                </nav>
              </DrawerContent>
            </Drawer>
          </div>
        </nav>
      </header>
    </>
  )
}
