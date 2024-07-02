import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'

export default function Faq() {
  return (
    <>
      <div className='container'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <h1 className='text-3xl font-bold text-center'>
            Frequently asked questions
          </h1>
          <p className='font-light'>
            Everything you need to know about the product and billing.
          </p>
          <div className='container max-w-[700px] my-12'>
            <Accordion type='single' collapsible className='w-full'>
              <AccordionItem value='item-1'>
                <AccordionTrigger>
                  Is there a free trial available?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-2'>
                <AccordionTrigger>Can I change my plan later?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-3'>
                <AccordionTrigger>
                  What is your cancellation policy?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-4'>
                <AccordionTrigger>
                  Can other info be added to an invoice?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-5'>
                <AccordionTrigger>How does billing work?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-6'>
                <AccordionTrigger>
                  How do I change my account email?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className='container bg-zinc-100 mx-12 p-12 rounded-xl flex flex-col justify-center items-center'>
            <div className='flex mb-4'>
              <Avatar>
                <AvatarImage src='https://xsgames.co/randomusers/avatar.php?g=female' />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src='https://xsgames.co/randomusers/avatar.php?g=male' />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src='https://xsgames.co/randomusers/avatar.php?g=female' />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
            <h3 className='font-bold text-xl mb-4'>Still have questions?</h3>
            <p className='font-light mb-8'>
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
            <Button className='bg-violet-700 hover:bg-violet-900 focus:bg-violet-900'>
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
