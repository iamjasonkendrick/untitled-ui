import { LogoWithText } from './logo'
import { Badge } from './ui/badge'

export default function Footer() {
  return (
    <footer className='container py-8 px-4 md:px-8 lg:px-16 mt-12'>
      <div className='grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6'>
        <div>
          <h3 className='font-semibold text-lg mb-4'>Product</h3>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='text-muted-foreground'>
                Overview
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                Features
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                Solutions <Badge className='bg-green-700'>New</Badge>
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                Tutorials
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                Pricing
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                Releases
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-semibold text-lg mb-4'>Company</h3>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='text-muted-foreground'>
                About us
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                Careers
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                Press
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                News
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                Media kit
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-semibold text-lg mb-4'>Resources</h3>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='text-muted-foreground'>
                Blog
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                Newsletter
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                Events
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                Help centre
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                Tutorials
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                Support
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-semibold text-lg mb-4'>Use cases</h3>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='text-muted-foreground'>
                Startups
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                Enterprise
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                Government
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                SaaS centre
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                Marketplaces
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                Ecommerce
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-semibold text-lg mb-4'>Social</h3>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='text-muted-foreground'>
                Twitter
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                LinkedIn
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                Facebook
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                GitHub
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                AngelList
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                Dribbble
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-semibold text-lg mb-4'>Legal</h3>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='text-muted-foreground'>
                Terms
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                Privacy
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                Cookies
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                Licenses
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                Settings
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='mt-8 flex flex-col items-center justify-between border-t pt-4 md:flex-row'>
        <div className='flex items-center space-x-2'>
          <LogoWithText />
        </div>
        <p className='mt-4 text-sm text-muted-foreground md:mt-0'>
          &copy; 2077 Untitled UI. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
