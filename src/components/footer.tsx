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
              <a href='#' className='text-muted-foreground text-sm '>
                Overview
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Features
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Solutions <Badge className='bg-green-700'>New</Badge>
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Tutorials
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Pricing
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Releases
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-semibold text-lg mb-4'>Company</h3>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                About us
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Careers
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Press
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                News
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Media kit
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-semibold text-lg mb-4'>Resources</h3>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Blog
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Newsletter
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Events
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Help centre
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Tutorials
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Support
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-semibold text-lg mb-4'>Use cases</h3>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Startups
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Enterprise
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Government
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                SaaS centre
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Marketplaces
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Ecommerce
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-semibold text-lg mb-4'>Social</h3>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Twitter
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                LinkedIn
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Facebook
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                GitHub
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                AngelList
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Dribbble
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-semibold text-lg mb-4'>Legal</h3>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Terms
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Privacy
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Cookies
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Licenses
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
                Settings
              </a>
            </li>
            <li>
              <a href='#' className='text-muted-foreground text-sm'>
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
        <p className='mt-4 text-muted-foreground text-sm md:mt-0'>
          &copy; 2077 Untitled UI. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
