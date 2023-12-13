import AnimatedText from '@/components/AnimatedText'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Album, Clock8, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1666214277657-e60f05c40b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='bg-blend-overlay bg-sky-400 bg-opacity-75 flex flex-col items-center w-full h-[80vh] relative object-cover mb-8'>
        <section style={{
          backgroundColor: 'rgba(0,0,0,0.45)'
        }} className='absolute top-0 left-0 w-full h-full  bg-blend-overlay flex flex-col items-center align-middle justify-center gap-3'>
          <h1 className='text-5xl w-full text-center  font-extrabold bg-gradient-to-r from-sky-800 via-cyan-400 to-green-300 text-transparent bg-clip-text leading-snug md:leading-loose outline-none '>
            Eagle Springs Medical Center
          </h1>

          <p className='text-xl text-white  font-semibold outline-none text-center'>
            <AnimatedText />
          </p>


          <aside className='w-full p-2 flex items-center align-middle justify-center gap-4 mt-2'>
            <Button className='bg-lime-600 hover:bg-lime-950 text-base font-semibold ring-0 border-0 outline-none' asChild>
              <Link href="/booking">Book Now!</Link>
            </Button>


            <Button variant='link' className=' text-base font-semibold ring-0 border-0 outline-none' asChild >
              <Link href="/services">Our Services</Link>
            </Button>
          </aside>
        </section>
      </div>


      <div className="flex w-full md:p-4 justify-center gap-4 align-middle items-center flex-col md:flex-row h-[70vh] max-h-fit">

        <section className='h-full w-full md:w-auto  flex-1 relative object-cover object-center  '>
          <Image src={'/monitor.jpg'} fill objectFit='cover' alt='monitor loading' className='w-full md:rounded-xl overflow-hidden md:max-h-80 lg:max-h-fit' />
        </section>
        <section className='h-full w-full md:w-auto flex flex-col flex-1 items-center  justify-center p-1 gap-2'>
          <h2 className='text-2xl md:text-4xl text-center w-[75%] font-bold md:leading-loose bg-gradient-to-l from-sky-800 via-cyan-400 to-green-500 text-transparent bg-clip-text '>About us</h2>
          <p className='text-xl  md:text-xl font-[400] md:leading-snug text-justify leading-5 p-3'>
            At Eagle Springs Medical Center, we are more than just a medical center; we are your beacon of hope and health in the heart of Gataka town. Our commitment to your well-being extends across all stages of life, from infancy to adulthood.
          </p>
        </section>

      </div>


      <div className="flex w-full p-4 justify-center gap-4 align-middle items-center flex-col md:flex-row min-h-[50vh]">

        <section className='h-full w-full md:w-auto flex flex-col flex-1 items-center  justify-center p-2 gap-2'>
          <h2 className='text-xl md:text-3xl font-bold leading-loose bg-gradient-to-l from-sky-800 via-cyan-400 to-green-500 text-transparent bg-clip-text '>
            ...More...
          </h2>
          <p className='text-xl font-[400] md:leading-snug text-justify leading-5 p-4'>
            We are more than just a medical center; we are your beacon of hope and health in the heart of Gataka town. Our commitment to your well-being extends across all stages of life, from infancy to adulthood. Located along the picturesque Gataka road in Karen View Estate, we are conveniently positioned to serve the communities of Karen, Ongata Rongai, and Ngong Hills.
          </p>
        </section>

        <section className='h-full w-full md:w-auto flex flex-col flex-1 items-center  justify-center p-1 gap-2'>
          <h2 className='text-xl md:text-3xl font-bold  bg-gradient-to-r from-sky-800 via-cyan-400 to-green-500 text-transparent bg-clip-text '>
            Location
          </h2>

          <aside className='inline-block'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d638.0692148348068!2d36.72661116826049!3d-1.3756757690180226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMjInMzIuNSJTIDM2wrA0MyczNi4wIkU!5e1!3m2!1sen!2ske!4v1697483014597!5m2!1sen!2ske" width="300" height="225" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </aside>
        </section>

      </div>

      <div className="mt-3 w-full min-h-[40vh] max-h-fit flex p-4 justify-around gap-4 align-middle items-center flex-col md:flex-row border-b">
        <Card className={cn("w-full md:min:w-[320px] max-w-sm h-[300px]")}>
          <CardHeader>
            <CardTitle >
              <Album className='text-sky-900 dark:text-lime-400 ' size={48} strokeWidth={3} />
            </CardTitle>
            <CardDescription className='text-xl'>Book Online</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Book an appointment with us by a click of button on our website.</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant='primary' className='bg-lime-600 ring-0 outline-none hover:opacity-80'>
              <Link href={'/booking'} >Book Now!</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className={cn("w-full md:min:w-[320px] max-w-sm h-[300px]")}>
          <CardHeader>
            <CardTitle>
              <Phone className='text-sky-900 dark:text-lime-400 ' size={48} strokeWidth={3} />
            </CardTitle>
            <CardDescription className='text-xl'>Call Us Now!</CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-md '>
              <span className='text-3xl  font-bold'>
                0797894402
              </span>

            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant='primary' className='bg-lime-600 ring-0 outline-none hover:opacity-80'>
              <a href='tel:+254797894402' className='flex items-center align-middle' >
                Call Now!
              </a>
            </Button>
          </CardFooter>
        </Card>
        <Card className={cn("w-full md:min:w-[320px] max-w-sm h-[300px]")}>
          <CardHeader>
            <CardTitle>
              <Clock8 className='text-sky-900 dark:text-lime-400' size={48} strokeWidth={3} />
            </CardTitle>
            <CardDescription className='text-xl'>Working Hours!</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Visit our clinic for any of our services</p>
            <ul className='flex flex-col align-middle justify-center'>
              <li className='border-b'>Mon-Fri: 8:00am - 11:00pm</li>
              <li className='border-b'>Sat-Sun: 10:00am - 7:00pm</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild variant='primary' className='bg-lime-600 ring-0 outline-none hover:opacity-80'>
              <a href='tel:2547194844555' className='flex items-center align-middle' >
                Open Location
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="w-full bg-sky-100 dark:bg-slate-950 p-4 flex flex-col md:flex-row items-center justify-around mt-3 gap-4 min-h-[50vh] max-h-fit">
        <div className="w-full object-cover object-center flex-1 min-h-[300px] h-fit relative">
          <Image src='/tester1.jpg' alt='heartbeat image' fill objectFit='cover' />
        </div>
        <div className="w-full object-cover flex-1 ">
          <p className='w-full text-left text-xl md:text-2xl font-semibold'>
            We believe health is not just the absence of illness; {`it's`} a state of complete physical, mental, and social well-being. We are dedicated to delivering healthcare that goes beyond the ordinary, striving for excellence in every aspect of your journey with us.
          </p>

          <Button className='bg-lime-600 mt-3 text-base font-semibold ring-0 border-0 outline-none' asChild >
            <Link href="/services">Our Services</Link>
          </Button>
        </div>
      </div>



      <div className="mt-3 w-full min-h-[40vh] max-h-fit flex p-4 justify-around gap-4 align-middle items-center flex-col md:flex-row border-b">
        Recent blogs go here
      </div>
    </>

  )
}
